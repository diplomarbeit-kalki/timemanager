"use client"
import React, { useState, useEffect } from 'react';

const days: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const Number: React.FC<{ value: number }> = ({ value = 0 }) => {
    const result = String(value).padStart(2, '0');
    return (
        <div className="digital">
            <p>{result}</p>
        </div>
    );
};

const Word: React.FC<{ value: string, hidden?: boolean }> = ({ value }) => {
    return (
        <div className="digital">
            <p>{value}</p>
        </div>
    );
};

export const AnalogClock: React.FC = () => {
    const [hour, setHour] = useState<number>(0);
    const [minute, setMinute] = useState<number>(0);
    const [second, setSecond] = useState<number>(0);
    const [day, setDay] = useState<number>(0);

    useEffect(() => {
        const update = () => {
            const date = new Date();
            setHour(date.getHours());
            setMinute(date.getMinutes());
            setSecond(date.getSeconds());
            setDay(date.getDay());
        };

        update();

        const interval = setInterval(() => {
            update();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl dark:text-slate-100 flex flex-col justify-center items-center mx-10">
            <div className="text-sm md:text-2xl lg:text-2xl flex justify-center items-center gap-4 md:gap-8 lg:gap-12 pb-4 transition-all">
                {days.map((value, index) => (
                    <div key={value} className={`text-${index !== day ? 'gray-400 opacity-50' : 'black'} dark:text-${index !== day ? 'gray-400 opacity-50' : 'white'}`}>
                        <Word value={value} hidden={index !== day} />
                    </div>
                ))}
            </div>
            <div className="flex gap-10">
                <div className="flex items-center text-6xl md:text-8xl lg:text-8xl">
                    <Number value={hour} />
                    <Word value={':'} />
                    <Number value={minute} />
                    <Word value={':'} />
                    <Number value={second} />
                </div>
            </div>
        </div>
    );
};