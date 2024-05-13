'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const Pdf = () => {
    const [file, setFile] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [scale, setScale] = useState(1.0);
    const fileInputRef = useRef(null);

    useEffect(() => {
        // Set the worker source path
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    }, []);

    const handleContainerClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const zoomIn = () => {
        setScale(scale + 0.1);
    };

    const zoomOut = () => {
        if (scale <= 0.1) {
            return;
        }
        setScale(scale - 0.1);
    };

    const fullScreen = () => {
        setScale(1.0);
    };

    return (
        <div className="flex justify-center items-center h-screen flex-col sm:flex-row">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-auto">
                {!file ? (
                    <div className="flex justify-center items-center mt-4 border-dashed border-2 p-10" onClick={handleContainerClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 019.07 4h5.86a2 2 0 011.664.89l.812-1.22a2 2 0 001.664.89H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <input ref={fileInputRef} type="file" accept=".pdf" className="hidden" onChange={handleFileChange} />
                    </div>
                ) : (
                    <>
                        {numPages && (
                            <>
                                <button onClick={zoomIn} className='bg-black'>Zoom In</button>
                                <button onClick={zoomOut}>Zoom Out</button>
                                <button onClick={fullScreen}>Full Screen</button>
                            </>
                        )}
                        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                            {Array.from(new Array(numPages), (el, index) => (
                                <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={scale} />
                            ))}
                        </Document>
                    </>
                )}
                <div className='text-center mt-5'>
                    {!file ? (
                        <>
                            <h1 className="text-xl sm:text-2xl">Upload Your Pdf You Currently Have 10 Credits</h1>
                            <p className="text-sm sm:text-base">You Can Upload A 5Mb File </p>
                        </>
                    ) : (
                        <p className="text-sm sm:text-base">Rendering the uploaded PDF...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Pdf;