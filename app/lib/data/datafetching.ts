import { unstable_noStore as noStore } from 'next/cache';
import DatabaseClient from '@/app/lib/mongodb/client';
import { ObjectId } from 'mongodb';

const client = new DatabaseClient();
const ITEMS_PER_PAGE = 10;

export async function fetchFilteredEmployees(
    query: string,
    currentPage: number,
    username: string
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