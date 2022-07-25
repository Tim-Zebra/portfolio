import React, {useState} from 'react';
import "../../styles/Resume.css";
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
            Libraries
            <ul>
              <li>
                <img src={"images/badges/react.svg"} alt="react badge"></img>
              </li>
              <li>
                <img src={"images/badges/jQuery.svg"} alt="jQuery badge"></img>
              </li>
            </ul>
          </h4>
        </div>
        <div id="backendProficiences" className="col-lg-4 col-md-6 align-center resumeProficiences"
        onMouseEnter={() => {resumeStyleChangeActive(); backEndProfActive();}}
        onMouseLeave={() => {resumeStyleChangeInactive(); backEndProfInactive();}}
        style={backendProfStyle}>
          <h4>
            Languages
            <ul>
              <li>
                <img src={"images/badges/javaScript.svg"} alt="javascript badge"></img>
              </li>
              <li>
                <img src={"images/badges/HTML5.svg"} alt="HTML-5 badge"></img>
              </li>
              <li>
                <img src={"images/badges/CSS3.svg"} alt="CSS-3 badge"></img>
              </li>
              <li>
                <img src={"images/badges/csharp.svg"} alt="c-sharp badge"></img>
              </li>
              <li>
                <img src={"images/badges/python.svg"} alt="python badge"></img>
              </li>
              <li>
                <img src={"images/badges/java.svg"} alt="java badge"></img>
              </li>
            </ul>
          </h4>
        </div>
        <div id="backendProficiences" className="col-lg-4 col-md-6 align-center resumeProficiences"
        onMouseEnter={() => {resumeStyleChangeActive(); backEndProfActive();}}
        onMouseLeave={() => {resumeStyleChangeInactive(); backEndProfInactive();}}
        style={backendProfStyle}>
          <h4>
            Databases/ORM/Related:
            <ul>
            <li>
                <img src={"images/badges/mySQL.svg"} alt="mySQL badge"></img>
              </li>
              <li>
                <img src={"images/badges/sequelize.svg"} alt="sequelize badge"></img>
              </li>
              <li>
                <img src={"images/badges/mongoDB.svg"} alt="mongoDB badge"></img>
              </li>
              <li>
                <img src={"images/badges/mongoose.svg"} alt="mongoose badge"></img>
              </li>
              <li>
                <img src={"images/badges/graphQL.svg"} alt="graphQL badge"></img>
              </li>
              <li>
                <img src={"images/badges/apolloGraphQL.svg"} alt="apollo-graphQL badge"></img>
              </li>
              <li>
                <img src={"images/badges/RESTAPI.svg"} alt="REST API badge"></img>
              </li>
            </ul>
          </h4>
        </div>
        <div id="backendProficiences" className="col-lg-4 col-md-6 align-center resumeProficiences"
        onMouseEnter={() => {resumeStyleChangeActive(); backEndProfActive();}}
        onMouseLeave={() => {resumeStyleChangeInactive(); backEndProfInactive();}}
        style={backendProfStyle}>
          <h4>
            Packages/Frameworks:
            <ul>
              <li>
                <img src={"images/badges/node.svg"} alt="node.js badge"></img>
              </li>
              <li>
                <img src={"images/badges/express.svg"} alt="express.js badge"></img>
              </li>
              <li>
                <img src={"images/badges/jwt.svg"} alt="jwt badge"></img>
              </li>
              <li>
                <img src={"images/badges/bootstrap.svg"} alt="bootstrap badge"></img>
              </li>
              <li>
                <img src={"images/badges/styledComponents.svg"} alt="styled-components badge"></img>
              </li>
              <li>
                <img src={"images/badges/jest.svg"} alt="jest badge"></img>
              <li>
                <img src={"images/badges/net.svg"} alt=".net badge"></img>
              </li>
              <li>
                <img src={"images/badges/flask.svg"} alt="flask badge"></img>
              </li>
              </li>
            </ul>
          </h4>
        </div>
        <div id="backendProficiences" className="col-lg-4 col-md-6 align-center resumeProficiences"
        onMouseEnter={() => {resumeStyleChangeActive(); backEndProfActive();}}
        onMouseLeave={() => {resumeStyleChangeInactive(); backEndProfInactive();}}
        style={backendProfStyle}>
          <h4>
            Services
            <ul>
            <li>
                <img src={"images/badges/heroku.svg"} alt="heroku badge"></img>
              </li>
              <li>
                <img src={"images/badges/gitHub.svg"} alt="github badge"></img>
              </li>
            </ul>
          </h4>
        </div>
      </div>
    </section>
  );
}