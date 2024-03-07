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