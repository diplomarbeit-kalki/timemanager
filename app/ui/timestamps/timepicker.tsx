'use client';

import React, { FC, useState } from 'react';
import dayjs from 'dayjs';

interface Props {
  onSelectTime: (time: string) => void;
}

const TimePicker: FC<Props> = ({ onSelectTime }) => {
  const [selectedHour, setSelectedHour] = useState('');
  const [selectedMinute, setSelectedMinute] = useState('');

  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let hour = e.target.value.replace(/\D/g, '').slice(0, 2);
    if (hour === '') hour = '';
    if (parseInt(hour) > 23) hour = '23';
    setSelectedHour(hour);
    updateSelectedTime(hour, selectedMinute);
  };

  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let minute = e.target.value.replace(/\D/g, '').slice(0, 2);
    if (minute === '') minute = '';
    if (parseInt(minute) > 59) minute = '59';
    setSelectedMinute(minute);
    updateSelectedTime(selectedHour, minute);
  };

  const updateSelectedTime = (hour: string, minute: string) => {
    const selectedTime = dayjs().hour(parseInt(hour)).minute(parseInt(minute)).format('HH:mm');
    onSelectTime(selectedTime);
  };

  return (
    <div className="flex justify-center">
      <div className="rounded-md bg-gray-100 dark:bg-zinc-900 text-gray-500 dark:text-gray-300 p-4">
        <div className="flex">
          <input
            type="number"
            className="peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded-md border border-gray-200 dark:border-gray-500 py-2 w-12 text-xl text-center outline-2 placeholder:text-gray-500"
            placeholder='00'
            min="0"
            max="23"
            value={selectedHour}
            onChange={handleHourChange}
          />
          <span className="text-2xl py-1 mx-2">:</span>
          <input
            type="number"
            className="peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded-md border border-gray-200 dark:border-gray-500 py-2 w-12 text-xl text-center outline-2 placeholder:text-gray-500"
            placeholder='00'
            min="0"
            max="59"
            value={selectedMinute}
            onChange={handleMinuteChange}
          />
          <input 
            type="hidden"
            name="time"
            value={`${selectedHour}:${selectedMinute}:00`}
          />
        </div>
      </div>
    </div>
  );
};

export default TimePicker;




