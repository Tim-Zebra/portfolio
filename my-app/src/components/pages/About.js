import React, { useEffect, useState } from 'react';
import '../../styles/About.css'

export default function About() {
  // Changes the opacity of Hello!
  const [opacity, setOpacity] = useState(1);
  const [ paragraph1, setParagraph1 ] = useState('black');
  const [ paragraph2, setParagraph2 ] = useState('black');
  const [ paragraph3, setParagraph3 ] = useState('black');
  const [ paragraph4, setParagraph4 ] = useState('black');

  const helloStyle = {
    opacity: opacity,
  }

  const paragraph1Boarder = {
    borderColor: paragraph1,
  }

  const paragraph2Boarder = {
    borderColor: paragraph2,
  }

  const paragraph3Boarder = {
    borderColor: paragraph3,
  }

  const paragraph4Boarder = {
    borderColor: paragraph4,
  }

  // Fade effect of the greeting after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0);
    }, 100000);
    return () => clearTimeout(timer);
  }, []);




  return (
    <section id="aboutSection" className="d-flex row portfolioSection">
      <aside className="col-12 col-lg-4" id="aboutAside">
        <div id="aboutHeading" className="col-12 col-lg-4">
          <h1 id="aboutHeader" className="text-center">About Me</h1>
          <p>
            <img src="images/profile-photo.png" className="" id="aboutProfileImage" alt="developer"></img>
          </p>
        </div>
      </aside>
      <div id="aboutParagraphsSection" className=' col-12 col-lg-8'>
        <p className="col-12" id="hello" style={helloStyle}>Hello!!
        </p>
        <p className="col-12 aboutParagraphs"
          style={paragraph1Boarder}
          onMouseOver={() => {setParagraph1('red')}}
          onMouseLeave={() => {setParagraph1('black')}}
        >
          My name is Timothy Zalewski. I'm a Full-Stack Web Developer in addition to having my Doctorate of Pharmacy.
          "Wait what!? How did that come to be?" Previously I had been in the pharmacy field serving the community of Austin.
          I had the opportunity to help patient's and customers navigate the ambiguity of our health care market.
          I was also considered a top performer, as I had one of the fastest and most accurate prescription processing times in highly competitive Austin district.
        </p>
        <p className="col-12 aboutParagraphs"
          style={paragraph2Boarder}
          onMouseOver={() => {setParagraph2('deepskyblue')}}
          onMouseLeave={() => {setParagraph2('black')}}
        >
          As time went on, I found myself needing more avenues for creativity and innovation.
          I began researching the different options and found the tech field has many opportunities that highly emphasis both of these aspects.
          This is when I began to seriously consider a career switch. I spent hours talking with friends and working with JavaScript. And you know what?
          I absolutely loved it! I looked into boot camps and decided <a href="https://techbootcamps.utexas.edu/coding/" className="sectionParagraphLinks" target="_blank" rel="noopener noreferrer">UT Austin's Full-Stack Web Development</a> course would be a great fit for me.
        </p>
        <p className="col-12 aboutParagraphs"
          style={paragraph3Boarder}
          onMouseOver={() => {setParagraph3('limegreen')}}
          onMouseLeave={() => {setParagraph3('black')}}
        >
          Fastforward the next 12 weeks of intensive, Full-Stack, fast-paced web developement and here I am graduated as a Full-Stack Web Developer!
          I learned so much during that time frame, where I comitted about 60-80 hours a week coding.
          Along the way I met some great people and formed some new friendships along the way. 
          We focused heavily on JavaScript which includes: Express.js, Node.js, and React.js. which was great as it built a strong foundation of understanding coding.
          The boot camp also offered post course work, where I took it upon myself to learn Python and C#.
        </p>
        <p className="col-12 aboutParagraphs"
          style={paragraph4Boarder}
          onMouseOver={() => {setParagraph4('gold')}}
          onMouseLeave={() => {setParagraph4('black')}}
        >
          What helps keep coding so interesting to me is how the entire process is like putting together a puzzle or playing a strategy game.
          I love doing puzzles, recognizing patterns, and applying unique yet crafted solutions towards a challenge.
          For more about me,
          be sure to check out my <a href="https://www.linkedin.com/in/timzalewski/" className="sectionParagraphLinks" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://github.com/Tim-Zebra" className="sectionParagraphLinks" target="_blank" rel="noopener noreferrer">GitHub</a> profiles 
          to see where I started, who I am, and how far I have come in such a short amount of time.   
        </p>
      </div>
    </section>
  );
}