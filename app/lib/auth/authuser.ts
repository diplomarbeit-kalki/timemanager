"use server"
import DatabaseClient from '@/app/lib/mongodb/client';
import type { User } from '@/app/lib/data/definitions';
import { Document } from 'mongodb';

export async function getUser(username: string): Promise<User | undefined> {

    const client = new DatabaseClient();
    try {
        await client.connectToDatabase();
        const queryString = `{"username": "${username}"}`;
        //console.log("dbactions---Suche nach: " + queryString);

        const collectionObj = client.getCollection("users");
        const result = await collectionObj.find({ "username": username }).toArray();
        const logResultsString = JSON.stringify(result);
        const truncatedString = logResultsString.substring(0, 60);
        //console.log("dbactions---Results: " + truncatedString + "...");

        if (result && result.length > 0) {
            const user: Document = result[0];

            const formattedUser: User = {
                id: user._id.toString(),
                username: user.username,
                password: user.password,
            };

            //console.log("dbactions---Benutzer erhalten und formatiert");
            //console.log(JSON.stringify(formattedUser));

            return formattedUser;
        }
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
    finally {
        client.closeDatabaseConnection();
    }
}