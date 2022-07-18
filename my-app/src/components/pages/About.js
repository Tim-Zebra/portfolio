import React from 'react';
import '../../styles/About.css'

export default function About() {
  return (
    <section id="aboutSection" className="d-flex column justify-content-between portfolioSection">
      <aside className="col-4" id="aboutAside">
        <div id="aboutHeading" className="col-lg-4 col-sm-12">
          <h1 id="aboutHeader" className="text-center mr-5">About Me</h1>
          <img src="images/profile-photo.png" className="" id="aboutProfileImage" alt="developer"></img>
        </div>
      </aside>
      <div id="aboutParagraphs" className='col-lg-8 col-sm-12'>
        <p className="col-12">Hello!!
        </p>
        <p className="col-12">
          My name is Timothy Zalewski. I'm a Full-Stack Web Developer in addition to having my Doctorate of Pharmacy.
          "Wait what!? How did that come to be?" Previously I had been in the pharmacy field serving the community of Austin.
          I had the opportunity to help patient's and customers navigate the ambiguity of our health care market.
          I was also considered a top performer, as I had one of the fastest and most accurate prescription processing times in highly competitive Austin district.
        </p>
        <p className="col-12">
          As time went on, I found myself needing more avenues for creativity and innovation.
          I began researching the different options and found the tech field has many opportunities that highly emphasis both of these aspects.
          This is when I began to seriously consider a career switch. I spent hours talking with friends and working with JavaScript. And you know what?
          I absolutely loved it! I looked into boot camps and decided <a href="https://techbootcamps.utexas.edu/coding/" className="sectionParagraphLinks" target="_blank" rel="noopener noreferrer">UT Austin's Full-Stack Web Development</a> course would be a great fit for me.
        </p>
        <p className="col-12">
          Fastforward the next 12 weeks of intensive, Full-Stack, fast-paced web developement and here I am graduated as a Full-Stack Web Developer!
          I learned so much during that time frame, where I comitted about 60-80 hours a week coding.
          Along the way I met some great people and formed some new friendships along the way. 
          We focused heavily on JavaScript which includes: Express.js, Node.js, and React.js. which was great as it built a strong foundation of understanding coding.
          The boot camp also offered post course work, where I took it upon myself to learn Python and C#.
        </p>
        <p className="col-12">
          What helps keep coding so interesting to me is how the entire process is like putting together a puzzle or playing a strategy game.
          I love doing puzzles, recognizing patterns, and applying unique yet crafted solutions towards a challenge.
          For more content on who I am,
          Be sure to check out my <a href="https://www.linkedin.com/in/timzalewski/" className="sectionParagraphLinks" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          and
          <a href="https://github.com/Tim-Zebra" className="sectionParagraphLinks" target="_blank" rel="noopener noreferrer">GitHub</a>
          profiles to see where I started, who I am, and how far I have come in such a short amount of time.   
        </p>
      </div>
    </section>
  );
}