import React from 'react';
import Project from './portfolio/Project'

// Object of all projects
const projectObj = {
  project1: {
    title: 'Regex Tutorial',  
    github: 'https://github.com/Tim-Zebra/Regex-Tutorial',
    deployed: 'https://gist.github.com/Tim-Zebra/3670f5235b2fcdd5dbf85251d1f9db89',
    prgms: 'Gist, Regex',
    image: 'images/projectImages/regex.png',
  },  
  project2: {
    title: 'Tech Blog',  
    github: 'https://github.com/Tim-Zebra/Tech-Blog',
    deployed: 'https://timzebratechblog.herokuapp.com/',
    prgms: 'MVC, express, JawsDB',
    image: 'images/projectImages/techBlog.png',
  },
  project3: {
    title: 'Social Network',  
    github: 'https://github.com/Tim-Zebra/Social-Network',
    deployed: false,
    prgms: 'NoSQL: MongoDB, Mongoose',
    image: 'images/projectImages/socialNetwork.png',
  },
  project4: {
    title: 'e-Commerce Data Server',  
    github: 'https://github.com/Tim-Zebra/eCommerce-Data-Server',
    deployed: false,
    prgms: 'SQL, Sequelize',
    image: 'images/projectImages/eCommerce.png',
  },
  project5: {
    title: 'Team Builder',  
    github: 'https://github.com/Tim-Zebra/Team-Builder',
    deployed: false,
    prgms: 'Node, Jest',
    image: 'images/projectImages/teamBuilder.gif',
  },
    project6: {
    title: 'Love/Compatability Finder',  
    github: 'https://github.com/Tim-Zebra/Compatible-or-Not_Find-true-love-here.',
    deployed: 'https://tim-zebra.github.io/Compatible-or-Not_Find-true-love-here./',
    prgms: 'APIs, HTML, CSS, JS, Collaboration',
    image: 'images/projectImages/compatibility.gif',
  },
}

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