import React from 'react';
import Project from './portfolio/Project'
import '../../styles/Portfolio.css'

// Object of all projects
const projectObj = {
  project1: {
    title: 'Karmatic',  
    github: 'https://github.com/Tim-Zebra/Karmatic',
    deployed: 'https://serene-tor-70368.herokuapp.com/',
    prgms: 'React, MongoDB, Apollo/GraphQL',
    image: 'images/projectImages/karmatic.png',
  },  
  project2: {
    title: 'Clinical Platform',  
    github: 'https://github.com/Tim-Zebra/Clinical-Platform-Streamlined',
    deployed: 'https://timzebratechblog.herokuapp.com/',
    prgms: 'Express, SQL, Sequelize, handlebars',
    image: 'images/projectImages/clinicalPlatformStreamLined.png',
  },
  project3: {
    title: 'Love/Compatability Finder',  
    github: 'https://github.com/Tim-Zebra/Compatible-or-Not_Find-true-love-here.',
    deployed: 'https://tim-zebra.github.io/Compatible-or-Not_Find-true-love-here./',
    prgms: 'APIs, HTML, CSS, JS, Collaboration',
    image: 'images/projectImages/compatibility.gif',
  },
  project4: {
    title: 'Team Builder',  
    github: 'https://github.com/Tim-Zebra/Team-Builder',
    deployed: false,
    prgms: 'Node, Jest',
    image: 'images/projectImages/teamBuilder.gif',
},
  project5: {
    title: 'Badge Maker',  
    github: 'https://github.com/Tim-Zebra/C-Sharp-CatWorx',
    deployed: false,
    prgms: 'C#',
    image: 'images/projectImages/C-Sharp-Badge.png',
  },
  project6: {
    title: 'News Feed',  
    github: 'https://github.com/Tim-Zebra/python-newsfeed',
    deployed: 'https://python-newsfeed-timzebra.herokuapp.com/',
    prgms: 'Python, MongoDB',
    image: 'images/projectImages/python-news-feed.png',
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