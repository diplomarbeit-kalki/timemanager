"use client"
import { lusitana } from '@/app/ui/fonts';
import React, { useEffect, useState } from 'react';

export default function Page() {

    const [message, setMessage] = React.useState<string>("test");

    useEffect(() => {

        const ws = new WebSocket('ws://localhost:3002');

        ws.onmessage = (event) => {
            setMessage(event.data);
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Testpage 2</h1>
            </div>
            <br></br>
            <div className="flex w-full items-center justify-between">
                {message}
            </div>
        </div>
    );
}