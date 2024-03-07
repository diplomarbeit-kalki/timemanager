"use server"
import type { User } from '@/app/lib/data/definitions';
import axios from 'axios';

export async function getUser(username: string): Promise<User | undefined> {
    try {
        const apiUrl = `http://localhost:3001/users/byUsername/${username}`;
        const response = await axios.get(apiUrl);
        return response.data;
    }
    catch (error) {
    console.error('datafetching---Fehler:', error);
}
}