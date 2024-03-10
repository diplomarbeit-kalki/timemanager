import { unstable_noStore as noStore } from 'next/cache';
import axios from 'axios';

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