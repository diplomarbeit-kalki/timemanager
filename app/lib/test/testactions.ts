"use server"
import axios from 'axios';
import { fetchTimestampsFromDay } from '@/app/lib/data/datafetching';
import { ObjectId } from 'mongodb';

export async function testfunction() {

    console.log("Testaction called by Button");

    try {

        //const result = await fetchTimestampsFromDay(psnr, date);
        //console.log("Serveraction: " + JSON.stringify(result));
        const username = "kaleli";
        const apiUrl = `http://localhost:3001/users/byUsername?username=${username}`;
        const response = await axios.get(apiUrl);
        console.log("REST: " + JSON.stringify(response.data));
    }
    catch (error) {
        console.error('testactions---Fehler: ', error);
    }
}