import React, {useState, useEffect,  } from 'react';
import "../../styles/ProjectAbout.css"


export default function ProjectAbout({currentProject, handleReset}) {
  const [infoOpacity, setInfoOpacity] = useState(0);
  const [createdUsingOpacity, setCreatedUsingOpacity] = useState(0);
  // const [createdUsingBox, setCreatedUsingBox] = useState('white 5px solid');
  const [createdUsingTrans, setCreatedUsingTrans] = useState('0s');
  const [createdUsingTextOpacity, setCreatedUsingTextOpacity] = useState(0);
  // const [createdUsingTextBox, setCreatedUsingTextBox] = useState('white 5px solid');
  const [createdUsingTextTrans, setCreatedUsingTextTrans] = useState('0s');
  // Styling
  const projectInfoStyle = {
    opacity: infoOpacity,
  }

  const createdUsingStyle = {
    opacity: createdUsingOpacity,
    // border: createdUsingBox,
    transition: createdUsingTrans,
  }

  const createdUsingTextBoxStyle = {
    opacity: createdUsingTextOpacity,
    // border: createdUsingTextBox,
    transition: createdUsingTextTrans,
  }

  // Almost 0 delay timer. Intended to trigger styling effects at start up.
  useEffect(() => {
    const timer = setTimeout(() => {
      setCreatedUsingOpacity(1);
      setInfoOpacity(1);
;
    }, 1);
    return () => clearTimeout(timer);
  }, []);

  // 1 second timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setCreatedUsingTrans('1s')
      setCreatedUsingTextTrans('1s')
      // setCreatedUsingBox('red 5px solid');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // 2 second timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setCreatedUsingOpacity(0);
      // setCreatedUsingBox('white 5px solid');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // 3 second timer
  useEffect(() => {
    const timer = setTimeout(() => {
      // setCreatedUsingTextBox('red 5px solid');
      setCreatedUsingTextOpacity(1);
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
            <div className="text-center" id='createdUsingTextBox' style={createdUsingTextBoxStyle}>{currentProject.prgms}</div>
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
              <div className='text-center' id="projectNotDeployed">
                Local Project
              </div>
            }
            <a href={currentProject.github} target="_blank" rel="noreferrer" className="text-center" id="projectGitHubLink">
              GitHub Repo
            </a>
          </div>
        </div>

      </div>
  )
}