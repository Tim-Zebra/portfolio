import React, { useState, useEffect } from 'react';
import "../styles/Talents.css";
import { Document, Page } from 'react-pdf';

const pdf = '../../assets/resume.pdf';
// import pdf from '../assets/resume.pdf';
export default function Resume() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  };

  return (
    <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={pageNumber} />
    </Document>
  );
};