import { SessionOptions } from "iron-session";

export interface SessionData {
    id: string
    username: string;
    isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
    id: "",
    username: "",
    isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
    password: "wA3Zh1ZzFtCPYOD0fCU5U1PHHqDnqxOZj+1fUIFB2o4=",
    cookieName: "timemanager.session-data",
    cookieOptions: {
        // secure only works in `https` environments
        // if your localhost is not on `https`, then use: `secure: process.env.NODE_ENV === "production"`
        secure: true,
    },
};

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}