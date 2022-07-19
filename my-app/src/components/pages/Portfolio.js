import React from 'react';
import Project from './portfolio/Project'
import '../../styles/Portfolio.css'
import { projectObj } from './portfolio/projectInfo';

// Specified project values are passed to the Project component
export default function Portfolio() {
  return (
    <section className="portfolioSection">
      <h1 id="projectSectionTitle">Portfolio</h1>
      <div className="d-flex row justify-content-around" id="projectSection">
        <Project currentProject={projectObj.project1}/>
        <Project currentProject={projectObj.project2}/>
        <Project currentProject={projectObj.project3}/>
        <Project currentProject={projectObj.project4}/>
        <Project currentProject={projectObj.project5}/>
        <Project currentProject={projectObj.project6}/>
      </div>
    </section>
  );
}