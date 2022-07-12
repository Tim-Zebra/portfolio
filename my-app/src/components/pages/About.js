import React from 'react';

export default function About() {
  return (
    <section id="aboutSection" className="d-flex column justify-content-between portfolioSection">
      <aside className="col-4">
        <div id="aboutHeading" className="col-4">
          <h1 id="aboutHeader" className="text-center mr-5">About Me</h1>
          <img src="images/profile-photo.png" className="img-fluid "id="aboutProfileImage" alt="developer"></img>
        </div>
      </aside>
      <div id="aboutParagraphs" className='d-flex row col-8 justify-content-center'>
        <p className="text-center">Hello! My name is Timothy Zalewski and the most exciting thing about me right now is that I made a huge career leap!
            I was previously a pharmacist for 6 years, and have been in the pharmacy field for 9+ years. As a top performer, I 
            was one of the fastest and most accurate prescription verifiers in the highly desirable Austin Texas market. I chose to 
            transfer into Web Development as a way to be able to also apply my many other talents towards helping people.
        </p>
        <p className="text-center">I am about half way through UT Austin's Web Development Coding Bootcamp and I am absolutely loving it! What drew me to this career 
            (and continues to draw me) is how JavaScript, HTML, CSS, JQuery, Bootstrap, Node, etc. are all just part one giant puzzle wanting to be solved.
            And you know what? I absolutely love doing puzzles! It feels so good to see a project come together, and then release something really cool 
            at the end. One of my more notable talents is being able to pick up any new skill, and apply it quickly on a whole new level of efficiency.
            Be sure to check out my <a href="https://www.linkedin.com/in/timothy-zalewski-18a8393a/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://github.com/Tim-Zebra" target="_blank" rel="noopener noreferrer">GitHub</a> profiles to see where I started, 
             who I am, and how far I have come in such a short amount of time.   
        </p>
      </div>
    </section>
  );
}