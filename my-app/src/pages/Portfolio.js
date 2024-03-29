import React, { useState } from 'react';
import Project from './portfolio/Project';
import ProjectAbout from './portfolio/ProjectAbout';
import '../styles/Portfolio.css'
import { projectObj } from './portfolio/projectInfo';

// Specified project values are passed to the Project component
export default function Portfolio() {
  // Project info to display
  const [projectInfo, setProjectInfo] = useState(0);
  // Allows images to display without selection
  const [firstLanding, setFirstLanding] = useState(true);
  // Sets props to display the currently selected project
  const [isSelectedProject1, setIsSelectedProject1] = useState(false);
  const [isSelectedProject2, setIsSelectedProject2] = useState(false);
  const [isSelectedProject3, setIsSelectedProject3] = useState(false);
  const [isSelectedProject4, setIsSelectedProject4] = useState(false);
  const [isSelectedProject5, setIsSelectedProject5] = useState(false);
  const [isSelectedProject6, setIsSelectedProject6] = useState(false);

  const projectSelectionArray = [
    isSelectedProject1,
    isSelectedProject2,
    isSelectedProject3,
    isSelectedProject4,
    isSelectedProject5,
    isSelectedProject6
  ]

  const handleReset = () => {
    updateAllStates(0);
    setFirstLanding(true);
    setProjectInfo(0);
  }

  // handles the change in selection
  const handleSelection = (isSelected, name, projectNum) => {
    setFirstLanding(false);
    updateAllStates(projectNum);
  }

  // Updates all states based off of what was selected
  const updateAllStates = (projectNum) => {
    // if statements to set statuses
    if (projectNum === 1) {
      setProjectInfo(1);
      setIsSelectedProject1(true);
      setIsSelectedProject2(false);
      setIsSelectedProject3(false);
      setIsSelectedProject4(false);
      setIsSelectedProject5(false);
      setIsSelectedProject6(false);
    } else if (projectNum === 2) {
      setProjectInfo(2);
      setIsSelectedProject1(false);
      setIsSelectedProject2(true);
      setIsSelectedProject3(false);
      setIsSelectedProject4(false);
      setIsSelectedProject5(false);
      setIsSelectedProject6(false);
    } else if (projectNum === 3) {
      setProjectInfo(3);
      setIsSelectedProject1(false);
      setIsSelectedProject2(false);
      setIsSelectedProject3(true);
      setIsSelectedProject4(false);
      setIsSelectedProject5(false);
      setIsSelectedProject6(false);
    } else if (projectNum === 4) {
      setProjectInfo(4);
      setIsSelectedProject1(false);
      setIsSelectedProject2(false);
      setIsSelectedProject3(false);
      setIsSelectedProject4(true);
      setIsSelectedProject5(false);
      setIsSelectedProject6(false);
    } else if (projectNum === 5) {
      setProjectInfo(5);
      setIsSelectedProject1(false);
      setIsSelectedProject2(false);
      setIsSelectedProject3(false);
      setIsSelectedProject4(false);
      setIsSelectedProject5(true);
      setIsSelectedProject6(false);
    } else if (projectNum === 6) {
      setProjectInfo(6);
      setIsSelectedProject1(false);
      setIsSelectedProject2(false);
      setIsSelectedProject3(false);
      setIsSelectedProject4(false);
      setIsSelectedProject5(false);
      setIsSelectedProject6(true);
    } else {
      setIsSelectedProject1(false);
      setIsSelectedProject2(false);
      setIsSelectedProject3(false);
      setIsSelectedProject4(false);
      setIsSelectedProject5(false);
      setIsSelectedProject6(false);
    }
  }

  return (
    <section className="portfolioSection">
      <h1 className="col-12" id="projectSectionTitle">Portfolio</h1>
      <div className="d-flex row justify-content-around" id="projectSection">
        <Project projectNum={1} currentProject={projectObj.project1} selectedStatus={isSelectedProject1} handleSelection={handleSelection} firstLanding={firstLanding}/>
        <Project projectNum={2} currentProject={projectObj.project2} selectedStatus={isSelectedProject2} handleSelection={handleSelection} firstLanding={firstLanding}/>
        <Project projectNum={3} currentProject={projectObj.project3} selectedStatus={isSelectedProject3} handleSelection={handleSelection} firstLanding={firstLanding}/>
        <Project projectNum={4} currentProject={projectObj.project4} selectedStatus={isSelectedProject4} handleSelection={handleSelection} firstLanding={firstLanding}/>
        <Project projectNum={5} currentProject={projectObj.project5} selectedStatus={isSelectedProject5} handleSelection={handleSelection} firstLanding={firstLanding}/>
        <Project projectNum={6} currentProject={projectObj.project6} selectedStatus={isSelectedProject6} handleSelection={handleSelection} firstLanding={firstLanding}/>
      </div>
      {projectInfo === 1 &&
        <ProjectAbout currentProject={projectObj.project1} handleReset={handleReset}/>
      }
      {projectInfo === 2 &&
        <ProjectAbout currentProject={projectObj.project2} handleReset={handleReset}/>
      }
      {projectInfo === 3 &&
        <ProjectAbout currentProject={projectObj.project3} handleReset={handleReset}/>
      }
      {projectInfo === 4 &&
        <ProjectAbout currentProject={projectObj.project4} handleReset={handleReset}/>
      }
      {projectInfo === 5 &&
        <ProjectAbout currentProject={projectObj.project5} handleReset={handleReset}/>
      }
      {projectInfo === 6 &&
        <ProjectAbout currentProject={projectObj.project6} handleReset={handleReset}/>
      }
    </section>
  );
}