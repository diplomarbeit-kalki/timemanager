"use server"
import { ObjectId } from 'mongodb';
import DatabaseClient from '@/app/lib/mongodb/client';
import { getUser } from '@/app/lib/auth/authuser';

export async function testfunction() {

    const client = new DatabaseClient();

    console.log("Testaction called by Button");
    try {
        console.log("Try ...");
        const user = await getUser("KALELI");
        console.log("testactions---User: " + JSON.stringify(user));
    }
    catch (error) {
        console.error('testactions---Fehler: ', error);
    }
    finally {
     
        console.log("testactions---Datenbankverbindung geschlossen");
    }
}
