"use server"
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import axios from 'axios';

const EmployeeFormSchema = z.object({
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

const AssignTagFormSchema = z.object({
    psnr: z.string()
});

const CreateEmployee = EmployeeFormSchema.omit({ id: true });
const UpdateEmployee = EmployeeFormSchema.omit({ id: true });
const AssignTransponder = AssignTagFormSchema.omit({});



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

    const employeeform = {
        firstname: firstname,
        lastname: lastname,
        birthdate: birthdate,
        street: street,
        housenr: housenr,
        residence: residence,
        postalcode: postalcode,
        phonenr: phonenr,
        email: email,
    };

    try {
        const response = await axios.post('http://localhost:3001/employees', employeeform);
        if (response.status === 201) {
            console.log("dbActions---Mitarbeiter erfolgreich erstellt");
        } else {
            throw new Error('Failed to create new employee');
        }
        revalidatePath('/dashboard/employeelist');
    }
    catch (error) {
        console.log("dbActions---Fehler: " + error);
    }
    finally {
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

    const employeeform = {
        firstname: firstname,
        lastname: lastname,
        birthdate: birthdate,
        street: street,
        housenr: housenr,
        residence: residence,
        postalcode: postalcode,
        phonenr: phonenr,
        email: email,
    };

    try {
        const response = await axios.put(`http://localhost:3001/employees/withId/${id}`, employeeform);
        if (response.status === 200) {
            console.log("dbActions---Mitarbeiter mit id: " + id + " erfolgreich bearbeitet");
        } else {
            throw new Error('Failed to update employee');
        }
        revalidatePath('/dashboard/employeelist');
    }
    catch (error) {
        console.log("dbActions---Fehler: " + error);
    }
    finally {
        redirect('/dashboard/employeelist');
    }
}

export async function archiveEmployee(id: string) {

    try {
        console.log("ID:" + id);
        const response = await axios.put(`http://localhost:3001/employeesArchive/intoArchive/withId/${id}`);
        if (response.status === 200) {
            console.log("dbActions---Mitarbeiter mit id: " + id + " erfolgreich archiviert");
        } else {
            throw new Error('Failed to archive employee');
        }
        revalidatePath('/dashboard/employeelist');
    }
    catch (error) {
        console.log("dbActions---Fehler: " + error);
    }
    finally {
        redirect('/dashboard/employeelist');
    }
}

export async function restoreEmployee(id: string) {

    try {
        console.log("ID:" + id);
        const response = await axios.put(`http://localhost:3001/employees/fromArchive/withId/${id}`);
        if (response.status === 200) {
            console.log("dbActions---Mitarbeiter mit id: " + id + " erfolgreich wiederhergestellt");
        } else {
            throw new Error('Failed to resotre employee');
        }
        revalidatePath('/dashboard/employeelist/archive');
    }
    catch (error) {
        console.log("dbActions---Fehler: " + error);
    }
    finally {
        redirect('/dashboard/employeelist/archive');
    }
}

export async function deleteEmployee(id: string) {

    try {
        const response = await axios.delete(`http://localhost:3001/employees/withId/${id}`);
        if (response.status === 200) {
            console.log("dbActions---Mitarbeiter mit id: " + id + " gelöscht");
        } else {
            throw new Error('Failed to delete employee');
        }
        revalidatePath('/dashboard/employeelist/archive');
    }
    catch (error) {
        console.log("dbActions---Fehler: " + error);
    }
    finally {
        redirect('/dashboard/employeelist/archive');
    }
}

export async function deleteEmployeeArchive(id: string) {

    try {
        const response = await axios.delete(`http://localhost:3001/employeesArchive/withId/${id}`);
        if (response.status === 200) {
            console.log("dbActions---Mitarbeiter mit id: " + id + " gelöscht");
        } else {
            throw new Error('Failed to delete employee');
        }
        revalidatePath('/dashboard/employeelist/archive');
    }
    catch (error) {
        console.log("dbActions---Fehler: " + error);
    }
    finally {
        redirect('/dashboard/employeelist/archive');
    }
}

export async function assignTransponder(id: string, formData: FormData) {
    const { psnr } = AssignTransponder.parse({
        psnr: formData.get('psnr')
    });
    const apiUrl = `http://localhost:3001/transponders/byId/${id}`;
    const transponder = await axios.get(apiUrl);
    const tag = transponder.data.uid;
    const body = {
        "tag": tag
    };
    try {
        const response = await axios.put(`http://localhost:3001/employees/withPsnr/${psnr}`, body);
        if (response.status === 200) {
            console.log("dbActions---Mitarbeiter mit psnr: " + psnr + " erfolgreich Tag hinzugefügt");
            const response2 = await axios.delete(`http://localhost:3001/transponders/withId/${id}`);
            if (response.status === 200) {
                console.log("dbActions---Transponder erfolgreich gelöscht");
            }
        }
        else {
            throw new Error('Failed to update employee');
        }
        revalidatePath('/dashboard/transponder');
    }
    catch (error) {
        console.log("dbActions---Fehler: " + error);
    }
    finally {
        redirect('/dashboard/transponder');
    }
}

export async function deleteTransponder(id: string) {

    try {
        const response = await axios.delete(`http://localhost:3001/transponders/withId/${id}`);
        if (response.status === 200) {
            console.log("dbActions---Transponder mit id: " + id + " gelöscht");
        } else {
            throw new Error('Failed to delete transponder');
        }
        revalidatePath('/dashboard/transponder');
    }
    catch (error) {
        console.log("dbActions---Fehler: " + error);
    }
    finally {
        redirect('/dashboard/transponder');
    }
}