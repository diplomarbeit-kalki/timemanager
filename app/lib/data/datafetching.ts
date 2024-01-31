import { unstable_noStore as noStore } from 'next/cache';
import DatabaseClient from '@/app/lib/mongodb/client';
import { ObjectId } from 'mongodb';

const client = new DatabaseClient();
const ITEMS_PER_PAGE = 5;

export async function fetchFilteredEmployees(
    query: string,
    currentPage: number,
    username: string
) {

    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        await client.connectToDatabase();
        const collection = client.getCollection("employees");
        const result = await collection.aggregate([
            {
                $match: {
                    $or: [
                        { "psnr": { $regex: new RegExp(query, "i") } },
                        { "username": { $regex: new RegExp(query, "i") } },
                        { "firstname": { $regex: new RegExp(query, "i") } },
                        { "lastname": { $regex: new RegExp(query, "i") } },
                        { "endtime": { $regex: new RegExp(query, "i") } },
                        { "birthdate": { $regex: new RegExp(query, "i") } },
                        { "street": { $regex: new RegExp(query, "i") } },
                        { "housenr": { $regex: new RegExp(query, "i") } },
                        { "residence": { $regex: new RegExp(query, "i") } },
                        { "postalcode": { $regex: new RegExp(query, "i") } },
                        { "phonenr": { $regex: new RegExp(query, "i") } },
                        { "email": { $regex: new RegExp(query, "i") } }
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