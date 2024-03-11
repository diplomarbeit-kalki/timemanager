"use client";
import { lusitana } from '@/app/ui/fonts';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { fetchTestPdf, fetchTestPicture } from '@/app/lib/data/datafetching';
import React, { useState, ChangeEvent, useEffect } from 'react';
import { uploadPicture } from '@/app/lib/actions/dbactions';
import Image from "next/image"


function DownloadButtonPDF({ }: {}) {

    const testfunctionCons = fetchTestPdf.bind(null);

    return (
        <form action={testfunctionCons}>
            <button className="rounded-md border p-2 hover:bg-gray-100">
                <ArrowDownTrayIcon className="w-4" />
            </button>
        </form>
    );
}

function DownloadButtonPicture({ }: {}) {

    const testfunctionCons = fetchTestPicture.bind(null);

    return (
        <form action={testfunctionCons}>
            <button className="rounded-md border p-2 hover:bg-gray-100">
                <ArrowDownTrayIcon className="w-4" />
            </button>
        </form>
    );
}

function UploadPictureField() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        try {
            if (!selectedFile) {
                alert('Bitte wählen Sie eine Datei aus.');
                return;
            }
            const formData = new FormData();
            formData.append('image', selectedFile);

            await uploadPicture(2, formData);
            alert('Bild erfolgreich hochgeladen.');
        } catch (error) {
            console.error('Fehler beim Hochladen des Bildes:', error);
            alert('Fehler beim Hochladen des Bildes. Bitte versuchen Sie es erneut.');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>
                <ArrowDownTrayIcon className="w-4" />
            </button>
        </div>
    );
}

export function MyImage() {
    return (
        <Image
            src={`http://localhost:3001/media/profilepictures/byPsnr/2?${Math.random()}`}
            alt="Profilbild"
            width={500}
            height={500}
            className="rounded-2xl"
        />
    )
}

export default function Page() {

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Testpage 2</h1>
            </div>
            <DownloadButtonPDF />
            <DownloadButtonPicture />
            <UploadPictureField />
            <MyImage />
        </div>
    );
}