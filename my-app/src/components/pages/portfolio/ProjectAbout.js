import React, {useState} from 'react';
import IconCreator from '../../../utils/IconCreator'
import "../../../styles/ProjectAbout.css"

export default function ProjectAbout({currentProject, handleReset}) {
  const iconLinkObj= {
    link: currentProject.github,
    image: 'images/iconImages/githubIcon.png'
  }

  return(
      <div className="d-flex row" id="projectInfo">
        <div className='' id='heading'>
          <h1 className="text-center" id="titleHeading">{currentProject.title}</h1>
          <button className="ml-2" id="exitButton"
          onClick={() =>  handleReset()}
          >
            &#10060;
          </button>
        </div>


        <div className="" id='aboutContent'>
          <div className="text-center">{currentProject.prgms}</div>
          {currentProject.deployed !== false &&
            <a href={currentProject.deployed} target="_blank" rel="noreferrer" className="projectDeployedAt text-center">Deployed @</a>
          }
          <div className="projectGithubLink">
            <IconCreator activeIconObj={iconLinkObj}/>
          </div>

        </div>

      </div>
  )
}