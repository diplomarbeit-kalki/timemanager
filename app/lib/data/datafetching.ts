import { unstable_noStore as noStore } from 'next/cache';
import axios from 'axios';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const ITEMS_PER_PAGE = 5;

export async function fetchFilteredEmployees(query: string) {
    noStore();
    try {
        const apiUrl = `http://localhost:3001/employees/filtered?query=${query}`;
        const response = await axios.get(apiUrl);
        return response.data;
    }
    catch (error) {
        console.error('datafetching---Fehler:', error);
    }
}

export async function fetchFilteredEmployeesArchive(query: string) {
    noStore();
    try {
        const apiUrl = `http://localhost:3001/employeesArchive/filtered?query=${query}`;
        const response = await axios.get(apiUrl);
        return response.data;
    }
    catch (error) {
        console.error('datafetching---Fehler:', error);
    }
}

export async function fetchEmployeeById(id: string) {
    noStore();
    try {
        const apiUrl = `http://localhost:3001/employees/byId/${id}`;
        const response = await axios.get(apiUrl);
        return response.data;
    }
    catch (error) {
        console.error('datafetching---Fehler:', error);
    }
}

export async function fetchEmployeeArchiveById(id: string) {
    noStore();
    try {
        const apiUrl = `http://localhost:3001/employeesArchive/byId/${id}`;
        const response = await axios.get(apiUrl);
        return response.data;
    }
    catch (error) {
        console.error('datafetching---Fehler:', error);
    }
}

export async function fetchTransponders() {
    noStore();
    try {
        const apiUrl = `http://localhost:3001/transponders`;
        const response = await axios.get(apiUrl);
        return response.data;
    }
    catch (error) {
        console.error('datafetching---Fehler:', error);
    }
}

export async function fetchCountTransponders() {
    //noStore();
    try {
        const apiUrl = `http://localhost:3001/cards/countTransponders`;
        const response = await axios.get(apiUrl);
        return response.data;
    }
    catch (error) {
        console.error('datafetching---Fehler:', error);
    }
}

export async function fetchCountActualWorkingEmployees() {
    //noStore();
    try {
        const apiUrl = `http://localhost:3001/cards/countWorkingEmployees`;
        const response = await axios.get(apiUrl);
        console.log("reponse: " + response.data)
        return response.data;
    }
    catch (error) {
        console.error('datafetching---Fehler:', error);
    }
}

export async function fetchTimestampsFromDay(
    psnr: number,
    date: string
) {
    noStore();
    try {
        const apiUrl = `http://localhost:3001/timerecords/byPsnrAndDate?psnr=${psnr}&date=${date}`;
        const response = await axios.get(apiUrl);
        return response.data;
    }
    catch (error) {
    }
}

export async function fetchTimerecordById(id: string) {
    noStore();
    try {
        const apiUrl = `http://localhost:3001/timerecords/byId/${id}`;
        const response = await axios.get(apiUrl);
        return response.data;
    }
    catch (error) {
        console.error('datafetching---Fehler:', error);
    }
}

export async function fetchTimerecordsFromPeriod(
    psnr: number,
    firstdate: string,
    lastdate: string
) {
    noStore();
    try {
        const apiUrl = `http://localhost:3001/timerecords/byPsnrAndPeriod?psnr=${psnr}&firstdate=${firstdate}&lastdate=${lastdate}`;
        const response = await axios.get(apiUrl);
        return response.data;
    }
    catch (error) {
    }
}


export async function fetchActualTimeSheetFromMonthAllPsnr() {
    noStore();
    try {
        const date = new Date();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        const apiUrl = `http://localhost:3001/pdf/timesheetFromMonth/AllPsnr?month=${month}&year=${year}`;
        const response = await axios.get(apiUrl, {
            responseType: 'blob', // Blob-Datentyp für binäre Daten
        });
        // Erstellen Sie einen Blob-URL für die heruntergeladene PDF-Datei
        const url = window.URL.createObjectURL(new Blob([response.data]));

        // Erstellen Sie ein unsichtbares Link-Element und klicken Sie es an, um den Download zu starten
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Monatsbericht.pdf');
        document.body.appendChild(link);
        link.click();
    }
    catch (error) {
        //console.error('Fehler beim Herunterladen der PDF-Datei:', error);
        redirect('/dashboard?showPdfError=true');

    }
}

const SelectEmployeeAndDateFormSchema = z.object({
    psnr: z.string(),
    month: z.string(),
    year: z.string(),
});

export async function fetchTimeSheetFromMonthWithPsnr(formData: FormData) {
    const { psnr, month, year } = SelectEmployeeAndDateFormSchema.parse({
        psnr: formData.get('psnr'),
        month: formData.get('month'),
        year: formData.get('year')
    });

    noStore();
    try {

        const apiUrl = `http://localhost:3001/pdf/timesheetFromMonth/WithPsnr?psnr=${psnr}&month=${month}&year=${year}`;
        const response = await axios.get(apiUrl, {
            responseType: 'blob', // Blob-Datentyp für binäre Daten
        });
        // Erstellen Sie einen Blob-URL für die heruntergeladene PDF-Datei
        const url = window.URL.createObjectURL(new Blob([response.data]));

        // Erstellen Sie ein unsichtbares Link-Element und klicken Sie es an, um den Download zu starten
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Monatsbericht.pdf');
        document.body.appendChild(link);
        link.click();

    }
    catch (error) {
        console.error('Fehler beim Herunterladen der PDF-Datei:', error);
        redirect('/dashboard?showPdfError=true');
    }
}

export async function fetchTestPdf() {
    noStore();
    try {
        // Rufen Sie den PDF-Download-Endpunkt auf
        const response = await axios.get('http://localhost:3001/pdf', {
            responseType: 'blob', // Blob-Datentyp für binäre Daten
        });

        // Erstellen Sie einen Blob-URL für die heruntergeladene PDF-Datei
        const url = window.URL.createObjectURL(new Blob([response.data]));

        // Erstellen Sie ein unsichtbares Link-Element und klicken Sie es an, um den Download zu starten
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'example.pdf');
        document.body.appendChild(link);
        link.click();
    }
    catch (error) {
        console.error('Fehler beim Herunterladen der PDF-Datei:', error);
    }
}

export async function fetchTestPicture() {
    noStore();
    try {
        // Rufen Sie den PDF-Download-Endpunkt auf
        const response = await axios.get('http://localhost:3001/media/profilepictures/byPsnr/2', {
            responseType: 'blob', // Blob-Datentyp für binäre Daten
        });

        // Erstellen Sie einen Blob-URL für die heruntergeladene PDF-Datei
        const url = window.URL.createObjectURL(new Blob([response.data]));

        // Erstellen Sie ein unsichtbares Link-Element und klicken Sie es an, um den Download zu starten
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'example.jpg');
        document.body.appendChild(link);
        link.click();
    }
    catch (error) {
        console.error('Fehler beim Herunterladen der Datei:', error);
    }
}

export async function fetchAverageWorkinghoursFromActualMonth() {
    //noStore();
    try {
        const apiUrl = `http://localhost:3001/cards/averageWorkinghoursFromActualMonth`;
        const response = await axios.get(apiUrl);
        return response.data;
    }
    catch (error) {
    }
}

export async function fetchWorkingEmployeesCountFromActualMonth() {
    //noStore();
    try {
        const apiUrl = `http://localhost:3001/cards/workingEmployeesCountFromActualMonth`;
        const response = await axios.get(apiUrl);
        return response.data;
    }
    catch (error) {
    }
}