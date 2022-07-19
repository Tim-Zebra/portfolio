import React, {useState} from 'react';
import IconCreator from '../../../utils/IconCreator'
import "../../../styles/Project.css"

export default function Project({projectNum, currentProject, selectedStatus, handleSelection, firstLanding}) {
  // Translates currentProject object to IconCreator expectations
  const iconLinkObj= {
    link: currentProject.github,
    image: 'images/iconImages/githubIcon.png'
  }

  const isFirstLandingStyle = {
    filter: 'grayscale(0)',
  }

  const isNotSelectedStyle = {
    filter: 'grayscale(100)',
  }

  const isSelectedStyle = {
    filter: 'grayscale(0)',
  }


// Mouse enter effects
  const [isSelected, setIsSelected] = useState(selectedStatus);
  if (!selectedStatus && firstLanding) {
    return (
      <div className='d-flex col-12 col-lg-5 col-xl-4 my-3 projectDiv'
      onClick={() =>  handleSelection(true, currentProject.title, projectNum)}>
        <img src={currentProject.image} alt="project screen shot" className="projectBackground" id="backgroundImage" style={isFirstLandingStyle}></img>
      </div>
    );
  } else if (!selectedStatus && !firstLanding) {
    return (
      <div className='d-flex col-12 col-lg-5 col-xl-4 my-3 projectDiv'
      onClick={() =>  handleSelection(true, currentProject.title, projectNum)}>
        <img src={currentProject.image} alt="project screen shot" className="projectBackground" id="backgroundImage" style={isNotSelectedStyle}></img>
      </div>
    );
  } else if (selectedStatus && !firstLanding) {
    return (
      <div className='d-flex col-12 col-lg-5 col-xl-4 my-3 projectDiv'
      onClick={() =>  handleSelection(true, currentProject.title, projectNum)}>
        <div className="projectContent d-flex">
          <div className="projectProgramsUsed text-center">{currentProject.prgms}</div>
          {/* <a href={currentProject.deployed} target="_blank" rel="noreferrer" className="projectDeployedAt text-center">Deployed @</a> */}
          <div className="projectGithubLink">
            <IconCreator activeIconObj={iconLinkObj}/>
          </div>
          <img src={currentProject.image} alt="project screen shot" className="projectBackground" id="backgroundImage" style={isSelectedStyle}></img>
        </div>
      </div>
    );
  }
}