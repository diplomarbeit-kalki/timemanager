"use server"
import { z } from 'zod';
import { ObjectId } from 'mongodb';
import Databaseclient from '@/app/lib/mongodb/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { User } from '@/app/lib/data/definitions';

const client = new Databaseclient();

export async function deleteEmployee(id: string) {

    try {
        await client.connectToDatabase();
        const collectionObj = client.getCollection("employees");

        const objectId = new ObjectId(id);

        await collectionObj.deleteOne({ "_id": objectId });

        console.log("dbactions---Hospitation mit id: " + id + " gelöscht");
        revalidatePath('/dashboard/employeelist');

        return { message: 'Hospitation gelöscht' };
    }
    catch (error) {
        return { message: 'Datenbank Fehler: Hospitation löschen fehlgeschlagen' };
    }
    finally {
        await client.closeDatabaseConnection();
    }
}