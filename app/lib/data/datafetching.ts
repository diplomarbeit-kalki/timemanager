import { unstable_noStore as noStore } from 'next/cache';
import axios from 'axios';

const ITEMS_PER_PAGE = 5;

export async function fetchFilteredEmployees(query: string, currentPage: number) {
    noStore();
    try {
        const apiUrl = `http://localhost:3001/employees/filtered?query=${query}&itemsPerPage=${ITEMS_PER_PAGE}&currentPage=${currentPage}`;
        const response = await axios.get(apiUrl);
        return response.data;
    }
    catch (error) {
        console.error('datafetching---Fehler:', error);
    }
}

export async function fetchNextFreePsnr() {
    noStore();
    try {
        const apiUrl = `http://localhost:3001/employees/nextFreePsnr`;
        const response = await axios.get(apiUrl);
        return response.data;
    }
    catch (error) {
        console.error('datafetching---Fehler:', error);
    }
}


export async function fetchEmployeesPages(query: string) {
    noStore();
    try {
        var apiUrl;
        if (query == "") {
            apiUrl = `http://localhost:3001/employees/numberOfPages?itemsPerPage=${ITEMS_PER_PAGE}`;
        }
        else {
            apiUrl = `http://localhost:3001/employees/numberOfPages?query=${query}&itemsPerPage=${ITEMS_PER_PAGE}`;
        }
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
        const apiUrl = `http://localhost:3001/employees/byId?id=${id}`;
        const response = await axios.get(apiUrl);
        return response.data;
    }
    catch (error) {
        console.error('datafetching---Fehler:', error);
    }
}

export async function fetchUnregisteredtags() {
    noStore();
    try {
        const apiUrl = `http://localhost:3001/unregisteredtags`;
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