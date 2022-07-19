import React, { useState } from 'react';
import Project from './portfolio/Project'
import '../../styles/Portfolio.css'
import { projectObj } from './portfolio/projectInfo';

// Specified project values are passed to the Project component
export default function Portfolio() {
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

  // handles the change in selection
  const handleSelection = (isSelected, name) => {
    console.log('Handle selection happened');
    console.log('IsSelected ', isSelected, " from ", name);
  }

  return (
    <section className="portfolioSection">
      <h1 id="projectSectionTitle">Portfolio</h1>
      <div className="d-flex row justify-content-around" id="projectSection">
        <Project currentProject={projectObj.project1} selectedStatus={isSelectedProject1} handleSelection={handleSelection}/>
        <Project currentProject={projectObj.project2} selectedStatus={isSelectedProject2} handleSelection={handleSelection}/>
        <Project currentProject={projectObj.project3} selectedStatus={isSelectedProject3} handleSelection={handleSelection}/>
        <Project currentProject={projectObj.project4} selectedStatus={isSelectedProject4} handleSelection={handleSelection}/>
        <Project currentProject={projectObj.project5} selectedStatus={isSelectedProject5} handleSelection={handleSelection}/>
        <Project currentProject={projectObj.project6} selectedStatus={isSelectedProject6} handleSelection={handleSelection}/>
      </div>
    </section>
  );
}