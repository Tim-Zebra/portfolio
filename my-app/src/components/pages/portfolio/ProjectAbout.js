import React, {useState} from 'react';
import IconCreator from '../../../utils/IconCreator'
import "../../../styles/ProjectAbout.css"

export default function ProjectAbout({currentProject, handleReset}) {
  const iconLinkObj= {
    link: currentProject.github,
    image: 'images/iconImages/githubIcon.png'
  }

  return(
    <div className='d-flex col-12 col-lg-5 col-xl-4 my-3 projectDiv'
    >
      <div className="projectContent d-flex">
        <div className="projectProgramsUsed text-center">{currentProject.prgms}</div>
        <a href={currentProject.deployed} target="_blank" rel="noreferrer" className="projectDeployedAt text-center">Deployed @</a>
        <div className="projectGithubLink">
          <IconCreator activeIconObj={iconLinkObj}/>
        </div>
        <button className="ml-2" id="exitButton"
        onClick={() =>  handleReset()}
        >
          &#10060;
        </button>
        <img 
        src={currentProject.image} alt="project screen shot" className="projectBackground" id="backgroundImage"></img>
      </div>
    </div>
  )
}