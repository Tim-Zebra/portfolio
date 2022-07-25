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

  // style for Front/Back/Full
  const baseFrontStyle = {
    color: 'black',
  }
  const baseBackStyle = {
    color: 'black',
  }
  const baseFullStyle = {
    color: 'black',
  }

  const frontWordStyle = {
    color: 'rgb(250, 67, 67)',
  }
  const backWordStyle = {
    color: 'rgb(101, 196, 255)',
  }
  const fullWordStyle = {
    color: 'rgb(171, 72, 171)',
  }

  // style for proficiencies 
  const profStyle = {
    opacity: '0.2',
    transitionDuration: '1s',
  }

  // Variables to handle style change
  // header section
  const [ resumeStyle, setResumeStyle] = useState(noStyle);
  // sub-header section
  const [ frontEndButtonStyle, setFrontEndButtonStyle ] = useState(baseFrontStyle);
  const [ backEndButtonStyle, setBackEndButtonStyle ] = useState(baseBackStyle);
  const [ fullStackButtonStyle, setFullStackButtonStyle ] = useState(baseFullStyle);
  // proficiencies Section
  const [ librariesRuntimesStyle, setLibrariesRuntimesStyle] = useState(noStyle);
  const [ languagesStyle, setLanguagesStyle] = useState(noStyle);
  const [ databasesORMRelatedStyle, setDatabasesORMRelatedStyle] = useState(noStyle);
  const [ packagesFrameworksStyle, setPackagesFrameworksStyle] = useState(noStyle);
  const [ applicationsStyle, setApplicationsStyle] = useState(noStyle);

  // Variables to determine selection
  const [ frontSelected, setFrontSelected ] = useState(false);
  const [ backSelected, setBackSelected ] = useState(false);
  const [ fullSelected, setFullSelected ] = useState(false);

  // Handle changes
  const handleTalentSelection = (talent) => {
    
  }
  // function to handle resume style change
  const resumeStyleChangeActive = () => {
    setResumeStyle(linkStyle);
  }

  const resumeStyleChangeInactive = () => {
    setResumeStyle(noStyle);
  }

  // handles changes in Talents
  const handleFrontClick = (value) => {
    setFrontSelected(value);
  }

  const handleBackClick = () => {
    
  }

  const handleFullClick = () => {
    
  }

  // talent cards
  // librariesRuntimes section mouse activity style change
  const librariesRuntimesActive = () => {
    setLibrariesRuntimesStyle(profStyle);
  }

  const librariesRuntimesInactive = () => {
    setLibrariesRuntimesStyle(noStyle);
  }

  // languages section mouse activity style change
  const languagesActive = () => {
    setLanguagesStyle(profStyle);
  }

  const languagesInactive = () => {
    setLanguagesStyle(noStyle);
  }

  // databasesORMRelated section mouse activity style change
  const databasesORMRelatedActive = () => {
    setDatabasesORMRelatedStyle(profStyle);
  }

  const databasesORMRelatedInactive = () => {
    setDatabasesORMRelatedStyle(noStyle);
  }

  // packagesFrameworks section mouse activity style change
  const packagesFrameworksActive = () => {
    setPackagesFrameworksStyle(profStyle);
  }

  const packagesFrameworksInactive = () => {
    setPackagesFrameworksStyle(noStyle);
  }

  // applications section mouse activity style change
  const applicationsActive = () => {
    setApplicationsStyle(profStyle);
  }

  const applicationsInactive = () => {
    setApplicationsStyle(noStyle);
  }

  return (
    <section className="portfolioSection">
      <div id="resumeHeading" className="d-block text-center">
        <h1>Resume</h1>
        <div>Download my Resume <a href={pdf} target="_blank" rel="noreferrer" id="resumeLink" style={resumeStyle}>Here</a></div>
      </div>
      <div id="resumeSubHeadingTalents" className="d-flex justify-content-around text-center">
        <h2 className='col-4'
        onClick={() => {handleTalentSelection('front');}}
        style={frontEndButtonStyle}
        >
          <span style={frontWordStyle}>Front</span>-End Talents
        </h2>
        <h2 className='col-4'
        onClick={() => {handleTalentSelection('full');}}
        style={fullStackButtonStyle}
        >
          <span style={fullWordStyle}>Full</span>-Stack Talents
        </h2>
        <h2 className='col-4'
        style={backEndButtonStyle}
        onClick={() => {handleTalentSelection('back');}}
        >
          <span style={backWordStyle}>Back</span>-End Talents
        </h2>
      </div>
      <div id="resumeBlock" className="d-flex row justify-content-around col-12 text-center">
        <div id="resumeLibrariesRuntimes" className="d-flex justify-content-around col-12 col-md-2 resumeProficiencies"
        onMouseEnter={() => {resumeStyleChangeActive(); librariesRuntimesActive();}}
        onMouseLeave={() => {resumeStyleChangeInactive(); librariesRuntimesInactive();}}
        style={librariesRuntimesStyle}>
          <h4 className="resumeSkillsHeader">
            Libraries/Runtimes:
            <ul className="resumeSkillsList">
              <li>
                <img src={"images/badges/react.svg"} alt="react badge"></img>
              </li>
              <li>
                <img src={"images/badges/jQuery.svg"} alt="jQuery badge"></img>
              </li>
              <li>
                <img src={"images/badges/node.svg"} alt="node.js badge"></img>
              </li>
              <li>
                <img src={"images/badges/styledComponents.svg"} alt="styled-components badge"></img>
              </li>
            </ul>
          </h4>
        </div>
        <div id="resumeLanguages" className="d-flex justify-content-around col-12 col-md-2 resumeProficiencies"
        onMouseEnter={() => {resumeStyleChangeActive(); languagesActive();}}
        onMouseLeave={() => {resumeStyleChangeInactive(); languagesInactive();}}
        style={languagesStyle}>
          <h4 className="resumeSkillsHeader">
            Languages:
            <ul className="resumeSkillsList">
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
        <div id="resumeDatabasesORMRelated" className="d-flex justify-content-around col-12 col-md-2 resumeProficiencies"
        onMouseEnter={() => {resumeStyleChangeActive(); databasesORMRelatedActive();}}
        onMouseLeave={() => {resumeStyleChangeInactive(); databasesORMRelatedInactive();}}
        style={databasesORMRelatedStyle}>
          <h4 className="resumeSkillsHeader">
            Databases/ORM/ Related:
            <ul className="resumeSkillsList">
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
        <div id="resumePackagesFrameworks" className="d-flex justify-content-around col-12 col-md-2 resumeProficiencies"
        onMouseEnter={() => {resumeStyleChangeActive(); packagesFrameworksActive();}}
        onMouseLeave={() => {resumeStyleChangeInactive(); packagesFrameworksInactive();}}
        style={packagesFrameworksStyle}>
          <h4 className="resumeSkillsHeader">
            Packages/ Frameworks:
            <ul className="resumeSkillsList">
              <li>
                <img src={"images/badges/express.svg"} alt="express.js badge"></img>
              </li>
              <li>
                <img src={"images/badges/bootstrap.svg"} alt="bootstrap badge"></img>
              </li>
              <li>
                <img src={"images/badges/jest.svg"} alt="jest badge"></img>
              </li>
              <li>
                <img src={"images/badges/net.svg"} alt=".net badge"></img>
              </li>
              <li>
                <img src={"images/badges/flask.svg"} alt="flask badge"></img>
              </li>
              <li>
                <img src={"images/badges/jwt.svg"} alt="jwt badge"></img>
              </li>
            </ul>
          </h4>
        </div>
        <div id="resumeApplications" className="d-flex justify-content-around col-12 col-md-2 resumeProficiencies"
        onMouseEnter={() => {resumeStyleChangeActive(); applicationsActive();}}
        onMouseLeave={() => {resumeStyleChangeInactive(); applicationsInactive();}}
        style={applicationsStyle}>
          <h4 className="resumeSkillsHeader">
            Applications:
            <ul className="resumeSkillsList">
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