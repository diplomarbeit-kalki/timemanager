"use server"
import { ObjectId } from 'mongodb';
import DatabaseClient from '@/app/lib/mongodb/client';
import axios from 'axios';
import  { fetchEmployeeById } from '@/app/lib/data/datafetching';

const idstring = "65bb6eca319adc7a6e45df6d";
const id = new ObjectId("65bb6eca319adc7a6e45df6d");

//Funktioniert nur wenn man timerest laufen hat.
async function fetchData(idstring: string): Promise<void> {
    console.time("REST API Fetch Time");
    const apiUrl = `http://localhost:3001/employees/byId/${idstring}`;
    try {
        const response = await axios.get(apiUrl);
        console.log("REST---Daten erhalten!");
    } catch (error) {
        console.error('REST---Fehler beim Abrufen der Daten:', error);
    } finally {
        console.timeEnd("REST API Fetch Time");
    }
}

async function fetchDataWithServerAction(id: ObjectId) {
    console.time("Server Action Fetch Time");
    try {
        const result = await fetchEmployeeById(id);
        console.log("Server action---Daten erhalten!");
    } catch (error) {
        console.error('Server action---Fehler beim Abrufen der Daten:', error);
    } finally {
        console.timeEnd("Server Action Fetch Time"); 
    }
}

export async function testfunction() {

    const client = new DatabaseClient();

    console.log("Testaction called by Button");
    try {
        console.log("Try ...");
        console.log("Start Datfetching REST!");
        await fetchData(idstring);
        console.log("Start Datfetching Server Action!");
        await fetchDataWithServerAction(id);
    }
    catch (error) {
        console.error('testactions---Fehler: ', error);
    }
}
