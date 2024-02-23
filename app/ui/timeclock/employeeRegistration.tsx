'use client';
import clsx from "clsx";
import Image from "next/image"
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function EmployeeRegistration() {
  const [message, setMessage] = React.useState<string>("Keine Websocket Verbindung");
  const [pictureSrc, setPictureSrc] = React.useState<string>(`/profile_picture_demo.jpg`);
  const [employeeId, setEmployeeId] = useState("");
  const [imageLoaded, setImageLoaded] = useState(true);

  const handleImageError = () => {
    setImageLoaded(false);
  };

  const imageUrl = imageLoaded ? pictureSrc : '/profile_picture_demo.jpg';

  // Clsx Color adaption for Status field
  const statusKommt = message.includes('kommt');
  const statusGeht = message.includes('geht');

  const messageStyle = clsx(
    'sm:block md:block lg:block',
    'select-none',
    'rounded-lg',
    'mt-8 lg:mt-12',
    'p-4 lg:p-6',
    'text-zinc-700 dark:text-white text-center',
    'border border-gray-300 dark:border-gray-500',
    {
      'bg-green-500': statusKommt,
      'bg-red-500': statusGeht,
      'bg-zinc-300 dark:bg-zinc-900': !statusKommt && !statusGeht,
    }
  )

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3002');

    ws.onmessage = (event) => {
      const receivedObj = JSON.parse(event.data);
      if (receivedObj.message) {
        setMessage(receivedObj.message);
      }
      if (receivedObj.psnr) {
        setPictureSrc(`/employees/${receivedObj.psnr}.jpg`);
      }
      console.log("Daten vom Server erhalten: " + event.data);
      setTimeout(() => {
        setMessage("Warte auf NFC Tags");
        setPictureSrc("/profile_picture_demo.jpg");
      }, 5000);
    };

    return () => {
      ws.close();
    };
  }, []);

  const handleNumberClick = (number: number) => {
    setEmployeeId((prevEmployeeId) => prevEmployeeId + number.toString());
    // Fokus auf das Input-Feld setzen
    document.getElementById("employeeId")?.focus();
  };

  const handleClearClick = () => {
    setEmployeeId("");
    // Fokus auf das Input-Feld setzen
    document.getElementById("employeeId")?.focus();
  };

  const handleSubmit = async () => {
    try {
      console.log("Submit Button clicked");
      const timestamp = new Date();
      console.log(`POST Anfrage: { "psnr": ${employeeId}, "timestamp": ${JSON.stringify(timestamp)} }`);
      const response = await fetch('http://localhost:3001/timerecords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "psnr": employeeId, "timestamp": timestamp }),
      });

      if (response.ok) {
        // Erfolgreich
        console.log('Daten erfolgreich an den REST-Service gesendet');
      } else {
        // Fehler beim Server
        console.error('Fehler beim Senden der Daten an den REST-Service');
      }
    } catch (error) {
      // Fehler beim Netzwerk
      console.error('Netzwerkfehler beim Senden der Daten', error);
    }
  };

  return (
    <div className="flex flex-row justify-center overflow-hidden">
      <div className="px-20 lg:px-28 pt-8 md:border-r-2 lg:border-r-2">
        <div className="relative h-64 w-64 mx-auto">
          <Image
            src={imageUrl}
            alt="Profilbild"
            onError={handleImageError}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: 'cover',
            }}
            className="rounded-2xl outline outline-zinc-400 dark:outline-zinc-600 outline-2 outline-offset-[6px]" // you can use other classes here too
          />
        </div>
        <div className={messageStyle}> {message} </div>
        <div className="flex md:hidden lg:hidden sm:flex mt-6">
          <input
            id="employeeId"
            name="employeeId"
            type="number"
            pattern="\d*"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            placeholder="Mitarbeiternummer"
            className="peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block rounded-lg border bg-white dark:bg-zinc-800 border-gray-200 dark:border-gray-500 py-4 pl-2 text-md outline-none placeholder:text-gray-500"
            required
          />
          <div className="pl-4 flex">
            <button
              className="w-14 h-14 rounded-full bg-green-700 hover:bg-green-500 active:bg-green-500 text-white text-2xl font-bold border-4 border-gray-500 dark:border-zinc-700"
              onClick={handleSubmit}
            >
              ✓
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:flex lg:flex flex-col gap-12 px-20 py-6">
        <div className="">
          <input
            id="employeeId"
            name="employeeId"
            type="number"
            min="1"
            max="999"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            placeholder="Mitarbeiternummer"
            className="peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block rounded-lg border bg-white dark:bg-zinc-800 border-gray-200 dark:border-gray-500 py-4 lg:py-6 pl-2 w-full text-sm outline-none placeholder:text-gray-500"
            required
          />
        </div>
        <div className="hidden md:grid lg:grid grid-cols-3 gap-6 lg:gap-8 transition-all">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <div key={number}>
              <button
                className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-white dark:bg-zinc-900 hover:bg-zinc-300 dark:hover:bg-zinc-800 text-black dark:text-white text-2xl font-bold border-4 border-gray-400 dark:border-zinc-700"
                onClick={() => handleNumberClick(number)}
              >
                {number}
              </button>
            </div>
          ))}
          <div>
            <button
              className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-red-700 hover:bg-red-500 active:bg-red-500 text-white text-2xl font-bold border-4 border-gray-500 dark:border-zinc-700"
              onClick={handleClearClick}
            >
              X
            </button>
          </div>

          <button
            className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-white dark:bg-zinc-900 hover:bg-zinc-300 dark:hover:bg-zinc-800 text-black dark:text-white text-2xl font-bold border-4 border-gray-400 dark:border-zinc-700"
            onClick={() => handleNumberClick(0)}
          >
            0
          </button>

          <div>
            <button
              className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-green-700 hover:bg-green-500 active:bg-green-500 text-white text-2xl font-bold border-4 border-gray-500 dark:border-zinc-700"
              onClick={handleSubmit}
            >
              ✓
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}