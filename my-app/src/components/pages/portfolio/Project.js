import React, {useState} from 'react';
import IconCreator from '../../../utils/IconCreator'
import "../../../styles/Project.css"

export default function Project({currentProject, selectedStatus, handleSelection}) {
// Translates currentProject object to IconCreator expectations
const iconLinkObj= {
  link: currentProject.github,
  image: 'images/iconImages/githubIcon.png'
}

// Mouse enter effects
  const [isSelected, setIsSelected] = useState(selectedStatus);
  
  return (
    <div className='d-flex col-12 col-lg-5 col-xl-4 my-3 projectDiv'
    onClick={() =>  handleSelection(true, currentProject.title)}>
        <img src={currentProject.image} alt="project screen shot" className="projectBackground" id="backgroundImage"></img>
      {/* <div class="projectContent d-flex">
        {isShown &&
          <div className="projectProgramsUsed text-center">{currentProject.prgms}</div>
        }
        {isShown && currentProject.deployed !== false &&
          <a href={currentProject.deployed} target="_blank" rel="noreferrer" className="projectDeployedAt text-center">Deployed @</a>
        }
        {isShown &&
          <div className="projectGithubLink">
            <IconCreator activeIconObj={iconLinkObj}/>
          </div>
        }
      </div> */}
    </div>
  );
}