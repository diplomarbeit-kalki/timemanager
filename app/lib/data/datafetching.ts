import { unstable_noStore as noStore } from 'next/cache';
import DatabaseClient from '@/app/lib/mongodb/client';
import { ObjectId } from 'mongodb';

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