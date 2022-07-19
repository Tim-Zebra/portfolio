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
    transition: '0.5s',
    filter: 'grayscale(0)',
  }

  const isNotSelectedStyle = {
    transition: '0.5s',
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
        <img 
        onClick={() =>  handleSelection(true, currentProject.title, projectNum)}
        src={currentProject.image} alt="project screen shot" className="projectBackground" id="backgroundImage" style={isFirstLandingStyle}
        />
      </div>
    );
  } else if (!selectedStatus && !firstLanding) {
    return (
      <div className='d-flex col-12 col-lg-5 col-xl-4 my-3 projectDiv'
      >
        <img 
        onClick={() =>  handleSelection(true, currentProject.title, projectNum)}
        src={currentProject.image} alt="project screen shot" className="projectBackground" id="backgroundImage" style={isNotSelectedStyle}
        />
      </div>
    );
  } else if (selectedStatus && !firstLanding) {
    return (
      <div className='d-flex col-12 col-lg-5 col-xl-4 my-3 projectDiv'
      >
        <img 
        src={currentProject.image} alt="project screen shot" className="projectBackground" id="backgroundImage" style={isSelectedStyle}
        />
      </div>
    );
  }
}