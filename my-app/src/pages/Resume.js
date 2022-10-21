import React, { useState, useEffect } from 'react';

import "../styles/Resume.css";

import pdf from '../assets/resume.pdf';
import bCard from '../assets/bCard.pdf';

export default function Resume() {
  return (
    <div class="d-flex justify-content-center my-5 py-5">
      <div class="w-100" id="resumeDownloadDiv">View my Resume <a href={pdf} id="resumeLinkView">Here</a></div>
      <div class="w-100">OR</div>
      <div class="w-100" id="resumeDownloadDiv">Download my Resume <a href={pdf} id="resumeLinkDownload" download="T.Zalewski_Full-Stack_Resume">Here</a></div>
      <div class="w-100">OR</div>
      <div class="w-100" id="resumeDownloadDiv">View my online business card <a href={bCard} id="bCardLinkView">Here</a></div>
    </div>);
};