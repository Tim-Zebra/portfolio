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
                <img src={"images/badges/react.svg"}></img>
              </li>
              <li>
                <img src={"images/badges/jwt.svg"}></img>
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
                <img src={"images/badges/csharp.svg"}></img>
              </li>
              <li>
                <img src={"images/badges/python.svg"}></img>
              </li>
              <li>
                <img src={"images/badges/javaScript.svg"}></img>
              </li>
              <li>
                <img src={"images/badges/java.svg"}></img>
              </li>
              <li>
                <img src={"images/badges/HTML5.svg"}></img>
              </li>
              <li>
                <img src={"images/badges/CSS3.svg"}></img>
              </li>
            </ul>
          </h4>
        </div>
        <div id="backendProficiences" className="col-lg-4 col-md-6 align-center resumeProficiences"
        onMouseEnter={() => {resumeStyleChangeActive(); backEndProfActive();}}
        onMouseLeave={() => {resumeStyleChangeInactive(); backEndProfInactive();}}
        style={backendProfStyle}>
          <h4>
            Databases/Realted:
            <ul>
            <li>
                <img src={"images/badges/mySQL.svg"}></img>
              </li>
              <li>
                <img src={"images/badges/sequelize.svg"}></img>
              </li>
              <li> and Mongoose :/
                <img src={"images/badges/mongoDB.svg"}></img>
              </li>
              <li>
                <img src={"images/badges/graphQL.svg"}></img>
              </li>
              <li>
                REST
              </li>
              <li>
                <img src={"images/badges/apolloGraphQL.svg"}></img>
              </li>
              <li>
                <img src={"images/badges/flask.svg"}></img>
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
                <img src={"images/badges/net.svg"}></img>
              </li>
              <li>
                <img src={"images/badges/node.svg"}></img>
              </li>
              <li>
                <img src={"images/badges/bootstrap.svg"}></img>
              </li>
              <li>
                <img src={"images/badges/jwt.svg"}></img>
              </li>
              <li>
                <img src={"images/badges/styledComponents.svg"}></img>
              </li>
              <li>
                <img src={"images/badges/jest.svg"}></img>
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
                <img src={"images/badges/heroku.svg"}></img>
              </li>
              <li>
                <img src={"images/badges/gitHub.svg"}></img>
              </li>
            </ul>
          </h4>
        </div>
      </div>
    </section>
  );
}