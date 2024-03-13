"use client"
import Image from "next/image"
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import React, { useState, ChangeEvent, useEffect } from 'react';
import { uploadPicture } from '@/app/lib/actions/dbactions';

export function FormImage({
    psnr,
}: {
    psnr: string;
}) {
    return (
        <Image
            src={`http://localhost:3001/media/profilepictures/byPsnr/${psnr}?${Math.random()}`}
            alt="Profilbild"
            width={400}
            height={400}
            className="rounded-2xl"
        />
    )
}

export function UploadPictureField({
    psnr,
    id
}: {
    psnr: string;
    id: string;
}) {
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

            await uploadPicture(id, psnr, formData);
            alert('Bild erfolgreich hochgeladen.');

            // FormData leeren
            setSelectedFile(null);
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