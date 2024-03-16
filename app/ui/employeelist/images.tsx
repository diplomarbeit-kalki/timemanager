"use client"
import Image from "next/image"
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import React, { useState, ChangeEvent, useEffect } from 'react';
import { uploadPicture } from '@/app/lib/actions/dbactions';
import { useDropzone } from 'react-dropzone';

export function FormImage({ psnr }: { psnr: string }) {
    return (
        <Image
            src={`http://localhost:3001/media/profilepictures/byPsnr/${psnr}?${Math.random()}`}
            alt="Profilbild"
            width={200}
            height={200}
            className="rounded-lg p-1 border border-gray-200 dark:border-gray-500 mt-7"
        />
    )
}

// *******************************************************************************************************************************************************

export function EditEmployeeFormImage({ id, psnr }: { id: string, psnr: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
        'image/webp': ['.webp'],
        'image/jpg': ['.jpg'],
    },
    multiple: false,
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      setSelectedFile(file);

      // Form Data vorbereiten
      const formData = new FormData();
      formData.append('image', file);

      try {
        await uploadPicture(id, psnr, formData);
        setSelectedFile(null); // Leere ausgewählte Datei nach erfolgreichem Upload
      } catch (error) {
        console.error('Fehler beim Hochladen des Bildes:', error);
        alert('Fehler beim Hochladen des Bildes. Bitte versuchen Sie es erneut.');
      }
    },
  });

  return (
    <div
      {...getRootProps({ className: 'relative' })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <input {...getInputProps()} />
      {isHovered && (
        <ArrowUpTrayIcon
          className="absolute mt-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      )}
      <Image
        src={`http://localhost:3001/media/profilepictures/byPsnr/${psnr}?${Math.random()}`}
        alt="Profilbild"
        width={200}
        height={200}
        className="rounded-lg p-1 border border-gray-200 dark:border-gray-500 mt-7 hover:opacity-30 transition-opacity duration-300 ease-in-out"
      />
    </div>
  );
}

// *******************************************************************************************************************************************************


// export function EditEmployeeFormImage({ psnr }: { psnr: string }) {
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//         <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={selectAndUploadFile}>
//             {isHovered && (
//                 <ArrowUpTrayIcon
//                     className="absolute mt-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//                 />
//             )}
//             <Image
//                 src={`http://localhost:3001/media/profilepictures/byPsnr/${psnr}?${Math.random()}`}
//                 alt="Profilbild"
//                 width={200}
//                 height={200}
//                 className="rounded-lg p-1 border border-gray-200 dark:border-gray-500 mt-7 hover:opacity-30 transition-opacity duration-300 ease-in-out"
//             />
//         </div>
//     )
// }

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
                <ArrowUpTrayIcon className="w-4" />
            </button>
        </div>
    );
}  