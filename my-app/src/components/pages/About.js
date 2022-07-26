import React, { useEffect, useState } from 'react';
import '../../styles/About.css'

export default function About() {
  // Changes the opacity of Hello!
  const [opacity, setOpacity] = useState(0);
  const [ paragraph1, setParagraph1 ] = useState('black');
  const [ paragraph2, setParagraph2 ] = useState('black');
  const [ paragraph3, setParagraph3 ] = useState('black');
  const [ paragraph4, setParagraph4 ] = useState('black');

  // Logic from Scroll position
  const handleScroll = () => {
    const position = window.scrollY;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    changeParagraphBorderMobile(position, screenWidth, screenHeight);

  };

  const changeParagraphBorderMobile = (positionY, screenWidth, screenHeight) => {
    // Filters for a mobile or hand held display
    if(screenWidth < 450) {
      // Filters for longer phones like Galaxy S20 Ultra
      if(screenHeight > 677) {
        if(positionY <= 51) {
          setParagraph1('black');
          setParagraph2('black');
          setParagraph3('black');
          setParagraph4('black');
        } else if(positionY <= 496) {
          setParagraph1('red');
          setParagraph2('black');
          setParagraph3('black');
          setParagraph4('black');
        } else if(positionY <= 907) {
          setParagraph1('black');
          setParagraph2('deepskyblue');
          setParagraph3('black');
          setParagraph4('black');
        } else if(positionY <= 1436) {
          setParagraph1('black');
          setParagraph2('black');
          setParagraph3('limegreen');
          setParagraph4('black');
        } else {
          setParagraph1('black');
          setParagraph2('black');
          setParagraph3('black');
          setParagraph4('gold');
        }
      } 
      // Filters for more standard phones like iPhone SE
      else {
        if(positionY <= 60) {
          setParagraph1('black');
          setParagraph2('black');
          setParagraph3('black');
          setParagraph4('black');
        } else if(positionY <= 686) {
          setParagraph1('red');
          setParagraph2('black');
          setParagraph3('black');
          setParagraph4('black');
        } else if(positionY <= 1256) {
          setParagraph1('black');
          setParagraph2('deepskyblue');
          setParagraph3('black');
          setParagraph4('black');
        } else if(positionY <= 1628) {
          setParagraph1('black');
          setParagraph2('black');
          setParagraph3('limegreen');
          setParagraph4('black');
        } else {
          setParagraph1('black');
          setParagraph2('black');
          setParagraph3('black');
          setParagraph4('gold');
        }
      }

    }

  }

  // Updates all the paragraphs to their original state
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

  // Fade effect of the greeting in and out after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  // Adds event listener to window scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
          My name is Timothy Zalewski. I am a Full-Stack Web Developer in addition to having my Doctorate of Pharmacy.
          "Wait what!? How did that come to be?" My career originally began in pharmacy where
          I had the opportunity to help patients and customers navigate the ambiguity of our health care market.
          As I continued to grow and challenge myself others began referring to me as a subject matter expert and top performer. 
          I slide into the role of pharmacy manager and got to lead a lot of cool stuff including leading the COVID-19 vaccine role out at my store.
        </p>
        <p className="col-12 aboutParagraphs"
          style={paragraph2Boarder}
          onMouseOver={() => {setParagraph2('deepskyblue')}}
          onMouseLeave={() => {setParagraph2('black')}}
        >
          As time went on, I found myself looking into more avenues for creativity and innovation.
          I began researching different options and discovered tech has many opportunities that highly emphasis both of these aspects.
          This is when I began to seriously consider a career switch. I spent hours talking with friends and working with JavaScript. And you know what?
          I absolutely loved it! I looked into boot camps and decided <a href="https://techbootcamps.utexas.edu/coding/" className="sectionParagraphLinks" target="_blank" rel="noopener noreferrer">UT Austin's Full-Stack Web Development</a> course would be a great fit for me.
        </p>
        <p className="col-12 aboutParagraphs"
          style={paragraph3Boarder}
          onMouseOver={() => {setParagraph3('limegreen')}}
          onMouseLeave={() => {setParagraph3('black')}}
        >
          Fastforward through the next 12 weeks of intensive, Full-Stack, fast-paced web developement and here I am graduated as a Full-Stack Web Developer!
          I learned so much during that cramped time frame, in which I comitted about 60-80 hours per week coding.
          We focused heavily on JavaScript which includes: Express.js, Node.js, and React.js. 
          The boot camp also offered post course work, where I took it upon myself to learn Python and C#.
          Along the way I met some great people, formed some new friendships, and enjoyed getting to network with other techies.
          {'(Always down for a game of Age of Empires 2, Zombicide, or even a quick pick-up soccer game!)'}
          I am excited to see how the futue of my career developes, and look forward to experiencing all the tech field has to offer.
        </p>
        <p className="col-12 aboutParagraphs"
          style={paragraph4Boarder}
          onMouseOver={() => {setParagraph4('gold')}}
          onMouseLeave={() => {setParagraph4('black')}}
        >
          What keeps coding so interesting for me is how the entire process is like putting together a puzzle or playing a strategy game.
          I love doing puzzles, recognizing patterns, and applying unique yet crafted solutions towards a particular challenge.
          It is like getting played to play games, and I love it!
          For more about me,
          be sure to connect with me on <a href="https://www.linkedin.com/in/timzalewski/" className="sectionParagraphLinks" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://github.com/Tim-Zebra" className="sectionParagraphLinks" target="_blank" rel="noopener noreferrer">GitHub</a>
          to see where I started, who I am, and how far I have come in such a short amount of time.   
        </p>
      </div>
    </section>
  );
}