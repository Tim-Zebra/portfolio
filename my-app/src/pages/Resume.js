import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

// const pdf = '../assets/resume.pdf';
import pdf from '../assets/resume.pdf';
export default function Resume() {


  const redirect_Page = () => {
    let tID = setTimeout(function () {
        window.location.href = 
        {pdf}; //replace with your url
        window.clearTimeout(tID);// clear time out.
    }, 1000);
  };

  redirect_Page();
};