import { unstable_noStore as noStore } from 'next/cache';
import DatabaseClient from '@/app/lib/mongodb/client';
import { ObjectId } from 'mongodb';
import { Varela } from 'next/font/google';

const client = new DatabaseClient();
const ITEMS_PER_PAGE = 8;

export async function fetchFilteredEmployees(
    query: string,
    currentPage: number
) {
    let psnrQuery;
    try {
        psnrQuery = parseInt(query);
    } catch { }

    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        await client.connectToDatabase();
        const collection = client.getCollection("employees");
        const result = await collection.aggregate([
            {
                $match: {
                    $or: [
                        { "psnr": psnrQuery },
                        { "username": { $regex: new RegExp(query, "i") } },
                        { "firstname": { $regex: new RegExp(query, "i") } },
                        { "lastname": { $regex: new RegExp(query, "i") } },
                    ]
                }
            },
            {
                $sort: { "psnr": 1 }
            },
            {
                $skip: offset
            },
            {
                $limit: ITEMS_PER_PAGE
            }
        ]).toArray();
        return result;
    }
    catch (error) {
        console.error('datafetching---Datenbankfehler:', error);
    }
    finally {
        await client.closeDatabaseConnection();
    }
}

export async function fetchNextFreePsnr() {
    noStore();

    try {
        await client.connectToDatabase();
        const collection = client.getCollection("employees");

        // Pipeline für die Aggregation
        const aggregationPipeline = [
            {
                $group: {
                    _id: null,
                    maxPsnr: { $max: "$psnr" },
                },
            },
        ];

        // Führe die Aggregation durch
        const result = await collection.aggregate(aggregationPipeline).toArray();

        // Extrahiere die maximale Personalnummer
        const maxPsnr = result.length > 0 ? result[0].maxPsnr : 0;

        // Finde die nächste freie Personalnummer
        const nextFreePsnr = maxPsnr + 1;

        return nextFreePsnr;
    } catch (error) {
        console.error('datafetching---Datenbankfehler:', error);
    } finally {
        await client.closeDatabaseConnection();
        console.log('datafetching---Verbindung geschlossen');
    }
}


export async function fetchEmployeesPages(query: string) {

    noStore();
    let psnrQuery;
    try {
        psnrQuery = parseInt(query);
    } catch { }

    try {
        await client.connectToDatabase();
        const collection = client.getCollection("employees");

        const countResult = await collection.aggregate([
            {
                $match: {
                    $or: [
                        { "psnr": psnrQuery },
                        { "username": { $regex: new RegExp(query, "i") } },
                        { "firstname": { $regex: new RegExp(query, "i") } },
                        { "lastname": { $regex: new RegExp(query, "i") } },
                    ]
                }
            },
            {
                $count: "totalCount"
            }
        ]).toArray();
        const result = countResult.length > 0 ? countResult[0].totalCount : 0;

        const resultFormatted = Math.ceil(Number(result / ITEMS_PER_PAGE));

        return resultFormatted;
    }
    catch (error) {
        console.error('datafetching---Datenbankfehler:', error);
    }
    finally {
        await client.closeDatabaseConnection();
        console.log('datafetching---Verbindung geschlossen')
    }
}

export async function fetchEmployeeById(id: ObjectId) {

    noStore();

    try {
        await client.connectToDatabase();
        const collection = client.getCollection("employees");

        const employee = await collection.findOne({ "_id": id });

        return employee;
    }
    catch (error) {
        console.error('datafetching---Datenbankfehler:', error);
    }
    finally {
        await client.closeDatabaseConnection();
        console.log('datafetching---Verbindung geschlossen')
    }
}

export async function fetchUnregisteredtags() {

    noStore();

    try {
        await client.connectToDatabase();
        const collection = client.getCollection("unregisteredtags");
        const result = await collection.find({}).toArray();
        return result;
    }
    catch (error) {
        console.error('datafetching---Datenbankfehler:', error);
    }
    finally {
        await client.closeDatabaseConnection();
    }
}

export async function fetchTimestampsFromDay(
    psnr: number,
    date: string
) {
    noStore();
    try {
        await client.connectToDatabase();
        const collection = client.getCollection("timestampsperday");
        const result = await collection.find({ "emppsnr": psnr, "date": date }).toArray();
        return result;
    }
    catch (error) {
        console.error('datafetching---Datenbankfehler:', error);
    }
    finally {
        await client.closeDatabaseConnection();
    }
}

function getDatesBetween(firstDate: string, lastDate: string) {
    const datesArray = [];

    const startDate = new Date(firstDate);
    const endDate = new Date(lastDate);

    let currentDate = startDate;
    while (currentDate <= endDate) {
        datesArray.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return datesArray;
}

interface Timestamp {
    type: string;
    time: string;
}

const calculateWorkHours = (timestamps: Timestamp[]): { workhours: number; pauseHours: number } => {
    // Sortiere die Timestamps nach Zeit
    timestamps.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

    let workHours = 0;
    let pauseHours = 0;
    let isOdd = true;

    for (let i = 0; i < timestamps.length - 1; i++) {
        const currentTimestamp = new Date(timestamps[i].time).getTime();
        const nextTimestamp = new Date(timestamps[i + 1].time).getTime();
        const duration = (nextTimestamp - currentTimestamp) / (1000 * 60 * 60); // Differenz in Stunden

        if (isOdd) {
            workHours += duration;
        } else {
            pauseHours += duration;
        }

        isOdd = !isOdd;
    }

    console.log("Pausenzeit (Stunden):", pauseHours); // Ausgabe der Pausenzeit in der Konsole
    return {workhours: workHours, pauseHours: pauseHours};
};

export async function fetchTimeReport(
    psnr: number,
    firstdate: string,
    lastdate: string
) {
    noStore();
    console.log(`datafetching---Paramter: psnr: ${psnr}, firstdate: ${firstdate}, lastdate: ${lastdate}`);
    try {
        await client.connectToDatabase();
        const collection = client.getCollection("timestampsperday");

        const dates = getDatesBetween(firstdate, lastdate);
        var trimmedDates;
        if (dates) {
            trimmedDates = dates.map(date => date.toISOString().split('T')[0]);
        }

        console.log("Dates: " + JSON.stringify(trimmedDates));

        const timestampsperday = [];
        const workreport = [];

        if (trimmedDates) {
            for (const date of trimmedDates) {
                const result = await collection.find({ "emppsnr": psnr, "date": date }).toArray();
                timestampsperday.push(...result);
            }
        }
        for (const obj of timestampsperday) {

            const resultcalculation = calculateWorkHours(obj.timestamps);
            const workHours = resultcalculation.workhours;
            const pauseHours = resultcalculation.pauseHours;
            console.log("Date: " + obj.date);
            console.log("workHours: " + JSON.stringify(workHours));

            const result = { date: obj.date, workhours: workHours, pausehours: pauseHours };
            workreport.push(result);
        }

        //console.log("timestampsperday: " + JSON.stringify(timestampsperday));
        console.log("workreport: " + JSON.stringify(workreport));
        return workreport;
    }
    catch (error) {
        console.error('datafetching---Datenbankfehler:', error);
    }
    finally {
        await client.closeDatabaseConnection();
    }
}