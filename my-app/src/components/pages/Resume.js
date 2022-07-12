import React, {useState} from 'react';
import pdf from '../../assets/resume.pdf';

export default function Resume() {
// Styles for resume
// style reset
const noStyle = {
  transitionDuration: '0.5s',
};

// style for resume link
const linkStyle = {
  color: 'red',
  fontSize: '40px',
  transitionDuration: '2s',
}

// style for proficiencies 
const profStyle = {
  opacity: '0.2',
  transitionDuration: '1s',
}

// Variables to handle style change
const [ resumeStyle, setResumeStyle] = useState(noStyle);
const [ frontendProfStyle, setfrontendProfStyle] = useState(noStyle);
const [ backendProfStyle, setbackendProfStyle] = useState(noStyle);

// function to handle resume style change
const resumeStyleChangeActive = () => {
  setResumeStyle(linkStyle);
}

const resumeStyleChangeInactive = () => {
  setResumeStyle(noStyle);
}

// Front end section mouse activity style change
const frontEndProfActive = () => {
  setfrontendProfStyle(profStyle);
}

const backEndProfInactive = () => {
  setbackendProfStyle(noStyle);
}

// Backend section mouse activity style change
const backEndProfActive = () => {
  setbackendProfStyle(profStyle);
}

const frontEndProfInactive = () => {
  setfrontendProfStyle(noStyle);
}

  return (
    <section className="portfolioSection">
      <div className="d-block mb-5 text-center">
        <h1>Resume</h1>
        <div>Download my Resume <a href={pdf} target="_blank" rel="noreferrer" id="resumeLink" style={resumeStyle}>Here</a></div>
      </div>
      <div id="resumeBlock" className="d-flex row col-12 ml-4 justify-content-around proficienciesBlock">
        <div id="frontendProficiences" className="col-lg-4 col-md-6 align-center resumeProficiences"
        onMouseEnter={() => {resumeStyleChangeActive(); frontEndProfActive();}}
        onMouseLeave={() => {resumeStyleChangeInactive(); frontEndProfInactive();}}
        style={frontendProfStyle}>
          <h4>
            Front-End Proficiences
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>responsive design</li>
              <li>React</li>
              <li>Boostrap</li>
            </ul>
          </h4>
        </div>
        <div id="backendProficiences" className="col-lg-4 col-md-6 align-center resumeProficiences"
        onMouseEnter={() => {resumeStyleChangeActive(); backEndProfActive();}}
        onMouseLeave={() => {resumeStyleChangeInactive(); backEndProfInactive();}}
        style={backendProfStyle}>
          <h4>
            Back-End Proficiences
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>mySQL, Sequelize</li>
              <li>noSQL, MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </h4>
        </div>
      </div>
    </section>
  );
}