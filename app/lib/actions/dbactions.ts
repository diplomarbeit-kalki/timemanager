"use server"
import { z } from 'zod';
import { ObjectId } from 'mongodb';
import Databaseclient from '@/app/lib/mongodb/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { fetchNextFreePsnr } from '@/app/lib/data/datafetching';


const client = new Databaseclient();

const FormSchema = z.object({
    id: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    birthdate: z.string(),
    street: z.string(),
    housenr: z.string(),
    residence: z.string(),
    postalcode: z.string(),
    phonenr: z.string(),
    email: z.string()
});

const CreateEmployee = FormSchema.omit({ id: true });
const UpdateEmployee = FormSchema.omit({ id: true });

export async function createEmployee(formData: FormData) {
    const { firstname, lastname, birthdate, street, housenr, residence, postalcode, phonenr, email } = CreateEmployee.parse({
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        birthdate: formData.get('birthdate'),
        street: formData.get('street'),
        housenr: formData.get('housenr'),
        residence: formData.get('residence'),
        postalcode: formData.get('postalcode'),
        phonenr: formData.get('phonenr'),
        email: formData.get('email')
    });

    function createUsername(firstname: string, lastname: string): string {
        const firstPart = firstname.length >= 3 ? firstname.substring(0, 3).toUpperCase() : firstname.toUpperCase();
        const lastPart = lastname.length >= 3 ? lastname.substring(0, 3).toUpperCase() : lastname.toUpperCase();
        return lastPart + firstPart;
    }
    const newPsnr = await fetchNextFreePsnr();

    const employee = {
        psnr: newPsnr,
        tag: null,
        pictureSrc: null,
        username: createUsername(firstname, lastname),
        firstname: firstname,
        lastname: lastname,
        birthdate: birthdate,
        street: street,
        housenr: housenr,
        residence: residence,
        postalcode: postalcode,
        phonenr: phonenr,
        email: email,
        createddate: new Date,
        editeddate: new Date,
    };

    try {
        await client.connectToDatabase();
        const collectionObj = client.getCollection("employees");

        if (employee) {
            const result = await collectionObj.insertOne(employee);
            return result;
        }

        revalidatePath('/dashboard/employeelist');
        console.log("dbActions---Mitarbeiter erfolgreich erstellt");
        return undefined;
    }
    catch (err) {
        console.log("dbActions---Fehler: " + err);
    }
    finally {
        await client.closeDatabaseConnection();
        redirect('/dashboard/employeelist');
    }
}

export async function updateEmployee(id: string, formData: FormData) {
    const { firstname, lastname, birthdate, street, housenr, residence, postalcode, phonenr, email } = UpdateEmployee.parse({
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        birthdate: formData.get('birthdate'),
        street: formData.get('street'),
        housenr: formData.get('housenr'),
        residence: formData.get('residence'),
        postalcode: formData.get('postalcode'),
        phonenr: formData.get('phonenr'),
        email: formData.get('email')
    });

    try {
        await client.connectToDatabase();
        const collectionObj = client.getCollection("employees");

        const objectId = new ObjectId(id);
        await collectionObj.updateOne(
            { _id: objectId },
            { $set: { firstname: firstname, lastname: lastname, birthdate: birthdate, street: street, housenr: housenr, residence: residence, postalcode: postalcode, phonenr: phonenr, email: email, editeddate: new Date } }
        );

        console.log("dbactions---Employee mit id: " + id + " bearbeitet");
        revalidatePath('/dashboard/employeelist');
        return { message: 'Employee bearbeitet' };
    }
    catch (error) {
        return { message: 'Datenbank Fehler: Hospitation löschen fehlgeschlagen' };
    }
    finally {
        await client.closeDatabaseConnection();
        redirect('/dashboard/employeelist');
    }
}


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