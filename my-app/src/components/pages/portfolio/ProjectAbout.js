import React, {useState, useEffect } from 'react';
import IconCreator from '../../../utils/IconCreator'
import "../../../styles/ProjectAbout.css"

export default function ProjectAbout({currentProject, handleReset}) {
  const [infoOpacity, setInfoOpacity] = useState(0);
  const [createdOpacity, setCreatedOpacity] = useState(0);

  const projectInfoStyle = {
    opacity: infoOpacity,
  }

  const createdUsingStyle = {
    opacity: createdOpacity,
  }

  // Almost 0 delay timer. Intended to trigger styling effects at start up.
  useEffect(() => {
    const timer = setTimeout(() => {
      setCreatedOpacity(1);
      setInfoOpacity(1);
    }, 1);
    return () => clearTimeout(timer);
  }, []);

  // 3 second timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setCreatedOpacity(0);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return(
      <div className="d-flex row" id="projectInfo" style={projectInfoStyle}>
        <div className='' id='heading'>
          <h1 className="text-center" id="titleHeading">{currentProject.title}</h1>
          <button className="ml-2" id="exitButton"
          onClick={() =>  handleReset()}
          >
            &#10060;
          </button>
            <p id="createdUsing" style={createdUsingStyle}>
            Created by Using: 
            </p>
            <div className="text-center" id='createdUsingTextBox'>{currentProject.prgms}</div>
        </div>

        <div className="" id='aboutContent'>
          <p className="text-center" id="aboutContentParagraph">
            {currentProject.about}
          </p>
          <div className="d-flex justify-content-between" id="aboutFooter">
            {currentProject.deployed !== false &&
              <a href={currentProject.deployed} target="_blank" rel="noreferrer" className="text-center" id="projectDeployedAt">Check it Out!</a>
            }
            {currentProject.deployed === false &&
              <a className='text-center' id="projectNotDeployed">
                Local Project
              </a>
            }
            <a href={currentProject.github} target="_blank" rel="noreferrer" className="text-center" id="projectGitHubLink">
              GitHub Repo
            </a>
          </div>
        </div>

      </div>
  )
}