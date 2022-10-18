import React, { useState, useEffect } from 'react';
import "../../styles/Resume.css";
import pdf from '../../assets/resume.pdf';

export default function Resume() {
  // Styles and constants for useStates
  // style reset
  const noStyle = {
    transitionDuration: '0.5s',
  };

  // style for resume link
  const linkStyle = {
    color: 'red',
    fontSize: '40px',
    transitionDuration: '2s',
  }

  // style for Front/Back/Full
  const baseFrontStyle = {
    color: 'black',
  }
  const baseBackStyle = {
    color: 'black',
  }
  const baseFullStyle = {
    color: 'black',
  }

  const frontWordStyle = {
    color: 'rgb(250, 67, 67)',
  }

  const backWordStyle = {
    color: 'rgb(101, 196, 255)',
  }

  const fullWordStyle = {
    color: 'rgb(171, 72, 171)',
  }

  // style for proficiencies 
  const profStyle = {
    opacity: '0.2',
    transitionDuration: '1s',
  }

  // styles for subheaders
  const defaultSubHeaderStyle = {};

  const frontSubHeaderFadeIn = {
    boxShadow: '0px 0px 80px 10px red',
    backgroundColor: 'rgba(255, 0, 0, 0.199)',
    height: '1px',
  };

  const frontSubHeaderFadeOut = {
    transition: '0.8s',
    height: '1px',
  };

  const backSubHeaderFadeIn = {
    boxShadow: '0px 0px 80px 10px rgb(70, 183, 254)',
    backgroundColor: 'rgba(70, 183, 254, 0.199)',
    height: '1px',
  };

  const backSubHeaderFadeOut = {
    transition: '0.8s',
    height: '1px',
  };

  const fullSubHeaderFadeIn = {
    boxShadow: '0px 0px 80px 10px rgb(232, 73, 214)',
    backgroundColor: 'rgba(232, 73, 214, 0.199)',
    height: '1px',
  };

  const fullSubHeaderFadeOut = {
    transition: '0.8s',
    height: '1px',
  };

  // sets flex box for Talents
  const baseResumeProficiencies = "d-flex justify-content-around resumeProficiencies col-12 col-sm-12 col-md-5 col-lg-5";

  // styles for individual talents
  // default talent style assumes full-stack
  const defaultTalentStyle = {
    opacity: 1,
    transitionDuration: '1s',
  };

  const fadeTalentStyle = {
    opacity: 0.2,
    transitionDuration: '1s',
  };

  // Mobile
  // fade variables
  const mobilePartialOpac = {
    opacity: '0.1',
    transitionDuration: '1s',
  };
  const mobileHalfOpac = {
    opacity: '0.4',
    transitionDuration: '1s',
  };
  const mobileFullOpac = {
    opacity: '0',
    transitionDuration: '1s',
  };
  // Display names for Headers
  const defaultResumeSkillsHeaderTextLibraries = "Libraries/Runtimes:";
  const spacedResumeSkillsHeaderTextLibraries = "Libraries/ Runtimes:";
  const defaultResumeSkillsHeaderTextPackages = "Packages/Frameworks:";
  const spacedResumeSkillsHeaderTextPackages = "Packages/ Frameworks:";
  const defaultResumeSkillsHeaderTextDatabases = "Databases/ORM/Related:";
  const spacedResumeSkillsHeaderTextDatabases= "Databases/ORM/ Related:";
  // const defaultResumeSkillsHeaderText = "Libraries/Runtimes:";
  // const spacedResumeSkillsHeaderText = "Libraries/ Runtimes:";
  // Variables to handle style change with "useState"
  // header section
  const [ resumeStyle, setResumeStyle] = useState(noStyle);
  // sub-header section
  const [ frontSubHeaderStyle, setFrontSubHeaderStyle ] = useState(defaultSubHeaderStyle);
  const [ fullSubHeaderStyle, setFullSubHeaderStyle ] = useState(defaultSubHeaderStyle);
  const [ backSubHeaderStyle, setBackSubHeaderStyle ] = useState(defaultSubHeaderStyle);
  const [ frontEndButtonStyle, setFrontEndButtonStyle ] = useState(baseFrontStyle);
  const [ backEndButtonStyle, setBackEndButtonStyle ] = useState(baseBackStyle);
  const [ fullStackButtonStyle, setFullStackButtonStyle ] = useState(baseFullStyle);
  // proficiencies Section
  const [ librariesRuntimesStyle, setLibrariesRuntimesStyle] = useState(noStyle);
  const [ languagesStyle, setLanguagesStyle] = useState(noStyle);
  const [ databasesORMRelatedStyle, setDatabasesORMRelatedStyle] = useState(noStyle);
  const [ packagesFrameworksStyle, setPackagesFrameworksStyle] = useState(noStyle);
  const [ applicationsStyle, setApplicationsStyle] = useState(noStyle);
  // styles for types of talents
  const [ frontEndTalentStyle, setFrontEndTalentStyle ] = useState(defaultTalentStyle); 
  const [ backEndTalentStyle, setBackEndTalentStyle ] = useState(defaultTalentStyle); 
  const [ fullTalentStyle, setFullTalentStyle ] = useState(defaultTalentStyle); 
  const [ noTalentStyle, setNoTalentStyle ] = useState(defaultTalentStyle); 
  // variables to determine selection
  const [ frontSelected, setFrontSelected ] = useState(false);
  const [ backSelected, setBackSelected ] = useState(false);
  const [ fullSelected, setFullSelected ] = useState(false);
  // updates flex box for talent cards
  const [ fluidResumeProficiencies, setFluidResumeProficiencies ] = useState(baseResumeProficiencies + " col-xl-2");
  // Updates the headings of the cards depending on screenwidth
  const [ resumeSkillsHeaderTextLibraries, setResumeSkillsHeaderTextLibraries ] = useState(defaultResumeSkillsHeaderTextLibraries);
  const [ resumeSkillsHeaderTextPackages, setResumeSkillsHeaderTextPackages] = useState(defaultResumeSkillsHeaderTextPackages);
  const [ resumeSkillsHeaderTextDatabases, setResumeSkillsHeaderTextDatabases] = useState(defaultResumeSkillsHeaderTextDatabases);
  // listens for window change
  useEffect(() => {
    updateFlexBox();
    window.addEventListener("resize", updateFlexBox);
    return () => {
      window.removeEventListener("resize", updateFlexBox);
    };
  })
  // listens for window scroll
  useEffect(() => {
    
    window.addEventListener("scroll", handleMobileScroll);
    return () => {
      window.removeEventListener("scroll", handleMobileScroll);
    };
  })

  // updates display
  const updateFlexBox = () => {
    // +17 to adjust for some off set between window object and actual screen width
    const screenWidth = window.visualViewport.width+17;
    if(screenWidth >= 1800) {
      setFluidResumeProficiencies(baseResumeProficiencies + " col-xl-2");
      setResumeSkillsHeaderTextLibraries(spacedResumeSkillsHeaderTextLibraries);
      setResumeSkillsHeaderTextPackages(spacedResumeSkillsHeaderTextPackages);
      setResumeSkillsHeaderTextDatabases(spacedResumeSkillsHeaderTextDatabases);
    } else if(screenWidth < 1800 && screenWidth >= 1400) {
      setFluidResumeProficiencies(baseResumeProficiencies + " col-xl-3 mx-1");
      setResumeSkillsHeaderTextLibraries(defaultResumeSkillsHeaderTextLibraries);
      setResumeSkillsHeaderTextPackages(spacedResumeSkillsHeaderTextPackages);
      setResumeSkillsHeaderTextDatabases(spacedResumeSkillsHeaderTextDatabases);
    } else if (screenWidth < 1400 && screenWidth >= 1200) {
      setResumeSkillsHeaderTextLibraries(spacedResumeSkillsHeaderTextLibraries);
      setResumeSkillsHeaderTextPackages(spacedResumeSkillsHeaderTextPackages);
      setResumeSkillsHeaderTextDatabases(spacedResumeSkillsHeaderTextDatabases);
    } else if (screenWidth < 1200 && screenWidth >= 890) {
      setResumeSkillsHeaderTextLibraries(defaultResumeSkillsHeaderTextLibraries);
      setResumeSkillsHeaderTextPackages(defaultResumeSkillsHeaderTextPackages);
      setResumeSkillsHeaderTextDatabases(spacedResumeSkillsHeaderTextDatabases);
      if (screenWidth < 1000) {
        setResumeSkillsHeaderTextPackages(spacedResumeSkillsHeaderTextPackages);
      }
    } else if (screenWidth < 890 && screenWidth >= 768) {
      setResumeSkillsHeaderTextLibraries(spacedResumeSkillsHeaderTextLibraries);
      setResumeSkillsHeaderTextPackages(spacedResumeSkillsHeaderTextPackages);
      setResumeSkillsHeaderTextDatabases(spacedResumeSkillsHeaderTextDatabases);
    } else if (screenWidth < 768 && screenWidth >= 500) {
      setResumeSkillsHeaderTextLibraries(defaultResumeSkillsHeaderTextLibraries);
      setResumeSkillsHeaderTextPackages(defaultResumeSkillsHeaderTextPackages);
      setResumeSkillsHeaderTextDatabases(defaultResumeSkillsHeaderTextDatabases);
    }  else if (screenWidth < 500) {
      setResumeSkillsHeaderTextLibraries(spacedResumeSkillsHeaderTextLibraries);
      setResumeSkillsHeaderTextPackages(spacedResumeSkillsHeaderTextPackages);
      setResumeSkillsHeaderTextDatabases(spacedResumeSkillsHeaderTextDatabases);
    }
  }

  // Handle Events/Actions
  // main function - talent section
  const handleTalentSelection = (talent) => {
    // confirms only one button is selected/active
    if(talent === 'front') {
      handleFrontSelection();
    } 
    // confirms only one button is selected/active
    else if (talent === 'back') {
      handleBackSelection();
    } 
    // confirms full stack selection, also includes if both front and back end buttons are activated
    else if (talent === 'full') {
      handleFullSelection();
    }
  }

  // Front/Back/Full Talent Buttons
  // front button
  const handleFrontSelection = () => {
    // Fade effect on click
    setFrontSubHeaderStyle(frontSubHeaderFadeIn);
    const timer = setTimeout(() => {
      setFrontSubHeaderStyle(frontSubHeaderFadeOut);
    }, 1);

    const timer2 = setTimeout(() => {
      setFrontSubHeaderStyle(defaultSubHeaderStyle);
    }, 1000);

    // Affects talents styling/fading
    if(frontSelected === false) {
      setFrontSelected(true);
      setFrontEndTalentStyle(defaultTalentStyle);
      setBackSelected(false);
      setBackEndTalentStyle(fadeTalentStyle);
      setFullSelected(false);
      setNoTalentStyle(fadeTalentStyle);
    } else if (frontSelected === true) {
      setBackEndTalentStyle(defaultTalentStyle);
      setFrontSelected(false);
      setNoTalentStyle(defaultTalentStyle);
    }
  }

  // back button
  const handleBackSelection = () => {
    // Fade effect on click
    setBackSubHeaderStyle(backSubHeaderFadeIn);
    const timer = setTimeout(() => {
      setBackSubHeaderStyle(backSubHeaderFadeOut);
    }, 1);

    const timer2 = setTimeout(() => {
      setBackSubHeaderStyle(defaultSubHeaderStyle);
    }, 1000);

    // Affects talents styling/fading
    if(backSelected === false) {
      setBackSelected(true);
      setBackEndTalentStyle(defaultTalentStyle);
      setFrontSelected(false);
      setFrontEndTalentStyle(fadeTalentStyle);
      setFullSelected(false);
      setNoTalentStyle(fadeTalentStyle);
    } else if (backSelected === true) {
      setFrontEndTalentStyle(defaultTalentStyle);
      setBackSelected(false);
      setNoTalentStyle(defaultTalentStyle);
    }
  }

  // full button
  const handleFullSelection = () => {
    // Fade effect on click
    setFullSubHeaderStyle(fullSubHeaderFadeIn);
    const timer = setTimeout(() => {
      setFullSubHeaderStyle(fullSubHeaderFadeOut);
    }, 1);

    const timer2 = setTimeout(() => {
      setFullSubHeaderStyle(defaultSubHeaderStyle);
    }, 1000);

    // Affects talents styling/fading
    if(fullSelected === false) {
      setFrontEndTalentStyle(defaultTalentStyle);
      setBackEndTalentStyle(defaultTalentStyle);
      setFrontSelected(false);
      setBackSelected(false);
      setFullSelected(true);
      setNoTalentStyle(fadeTalentStyle);
    } else if (fullSelected === true) {
      setFrontEndTalentStyle(defaultTalentStyle);
      setBackEndTalentStyle(defaultTalentStyle);
      setNoTalentStyle(defaultTalentStyle);
      setBackSelected(false);
      setFrontSelected(false);
      setFullSelected(false);
    }
  }

  // Resume Style Change on Mouse Hover
  // header/resume download here
  const resumeStyleChangeActive = () => {
    setResumeStyle(linkStyle);
  }

  const resumeStyleChangeInactive = () => {
    setResumeStyle(noStyle);
  }

  // Talent cards
  // librariesRuntimes section mouse activity style change
  const librariesRuntimesActive = () => {
    if(window.visualViewport.width + 17 > 992) {
      let newStyle = profStyle;
      setLibrariesRuntimesStyle(newStyle);
    }

  }

  const librariesRuntimesInactive = () => {
    setLibrariesRuntimesStyle(noStyle);
  }

  // languages section mouse activity style change
  const languagesActive = () => {
    if(window.visualViewport.width + 17 > 992)
    setLanguagesStyle(profStyle);
  }

  const languagesInactive = () => {
    setLanguagesStyle(noStyle);
  }

  // databasesORMRelated section mouse activity style change
  const databasesORMRelatedActive = () => {
    if(window.visualViewport.width + 17 > 992)
    setDatabasesORMRelatedStyle(profStyle);
  }

  const databasesORMRelatedInactive = () => {
    setDatabasesORMRelatedStyle(noStyle);
  }

  // packagesFrameworks section mouse activity style change
  const packagesFrameworksActive = () => {
    if(window.visualViewport.width + 17 > 992)
    setPackagesFrameworksStyle(profStyle);
  }

  const packagesFrameworksInactive = () => {
    setPackagesFrameworksStyle(noStyle);
  }

  // applications section mouse activity style change
  const applicationsActive = () => {
    if(window.visualViewport.width + 17 > 992)
    setApplicationsStyle(profStyle);
  }

  const applicationsInactive = () => {
    setApplicationsStyle(noStyle);
  }

  // Mobile Style Change
  // Fade on scroll
  const handleMobileScroll = () => {
    const screenWidth = window.screen.width;
    // Filters for a mobile or hand held display
    if(screenWidth < 450) {
      const position = window.scrollY;
      const screenHeight = window.screen.height;
      changeTalentSectionMobile(position, screenHeight);
    }
  };

  const changeTalentSectionMobile = (positionY, screenHeight) => {
    // Filters for short phones where view of Talents is majority
    if (screenHeight <= 677) {
      console.log('This happened', positionY);
      if(positionY <= 105) {
        setLibrariesRuntimesStyle(noStyle);
        setLanguagesStyle(mobileFullOpac);
        setDatabasesORMRelatedStyle(mobileFullOpac);
        setPackagesFrameworksStyle(mobileFullOpac);
        setApplicationsStyle(mobileFullOpac);
      } else if (positionY <= 274) {
        setLibrariesRuntimesStyle(noStyle);
        setLanguagesStyle(mobilePartialOpac);
        setDatabasesORMRelatedStyle(mobileFullOpac);
        setPackagesFrameworksStyle(mobileFullOpac);
        setApplicationsStyle(mobileFullOpac);
      } else if (positionY <= 324) {
        setLibrariesRuntimesStyle(noStyle);
        setLanguagesStyle(mobileHalfOpac);
        setDatabasesORMRelatedStyle(mobileFullOpac);
        setPackagesFrameworksStyle(mobileFullOpac);
        setApplicationsStyle(mobileFullOpac);
      }  else if (positionY <= 476) {
        setLibrariesRuntimesStyle(mobileHalfOpac);
        setLanguagesStyle(mobileHalfOpac);
        setDatabasesORMRelatedStyle(mobileFullOpac);
        setPackagesFrameworksStyle(mobileFullOpac);
        setApplicationsStyle(mobileFullOpac);
      }  else if (positionY <= 493) {
        setLibrariesRuntimesStyle(mobilePartialOpac);
        setLanguagesStyle(noStyle);
        setDatabasesORMRelatedStyle(mobileFullOpac);
        setPackagesFrameworksStyle(mobileFullOpac);
        setApplicationsStyle(mobileFullOpac);
      } else if (positionY <= 675) {
        setLibrariesRuntimesStyle(mobilePartialOpac);
        setLanguagesStyle(noStyle);
        setDatabasesORMRelatedStyle(mobilePartialOpac);
        setPackagesFrameworksStyle(mobileFullOpac);
        setApplicationsStyle(mobileFullOpac);
      } else if (positionY <= 710) {
        setLibrariesRuntimesStyle(mobileFullOpac);
        setLanguagesStyle(noStyle);
        setDatabasesORMRelatedStyle(mobileHalfOpac);
        setPackagesFrameworksStyle(mobileFullOpac);
        setApplicationsStyle(mobileFullOpac);
      } else if (positionY <= 934) {
        setLibrariesRuntimesStyle(mobileFullOpac);
        setLanguagesStyle(mobileHalfOpac);
        setDatabasesORMRelatedStyle(mobileHalfOpac);
        setPackagesFrameworksStyle(mobileFullOpac);
        setApplicationsStyle(mobileFullOpac);
      }  else if (positionY <= 941) {
        setLibrariesRuntimesStyle(mobileFullOpac);
        setLanguagesStyle(mobilePartialOpac);
        setDatabasesORMRelatedStyle(noStyle);
        setPackagesFrameworksStyle(mobileFullOpac);
        setApplicationsStyle(mobileFullOpac);
      }  else if (positionY <= 987) {
        setLibrariesRuntimesStyle(mobileFullOpac);
        setLanguagesStyle(mobilePartialOpac);
        setDatabasesORMRelatedStyle(noStyle);
        setPackagesFrameworksStyle(mobileFullOpac);
        setApplicationsStyle(mobileFullOpac);
      }   else if (positionY <= 1068) {
        setLibrariesRuntimesStyle(mobileFullOpac);
        setLanguagesStyle(mobileFullOpac);
        setDatabasesORMRelatedStyle(noStyle);
        setPackagesFrameworksStyle(mobilePartialOpac);
        setApplicationsStyle(mobileFullOpac);
      }   else if (positionY <= 1166) {
        setLibrariesRuntimesStyle(mobileFullOpac);
        setLanguagesStyle(mobileFullOpac);
        setDatabasesORMRelatedStyle(noStyle);
        setPackagesFrameworksStyle(mobileHalfOpac);
        setApplicationsStyle(mobileFullOpac);
      }   else if (positionY <= 1300) {
        setLibrariesRuntimesStyle(mobileFullOpac);
        setLanguagesStyle(mobileFullOpac);
        setDatabasesORMRelatedStyle(mobileHalfOpac);
        setPackagesFrameworksStyle(mobileHalfOpac);
        setApplicationsStyle(mobileFullOpac);
      }   else if (positionY <= 1312) {
        setLibrariesRuntimesStyle(mobileFullOpac);
        setLanguagesStyle(mobileFullOpac);
        setDatabasesORMRelatedStyle(mobilePartialOpac);
        setPackagesFrameworksStyle(mobileHalfOpac);
        setApplicationsStyle(mobileFullOpac);
      }   else if (positionY <= 1340) {
        setLibrariesRuntimesStyle(mobileFullOpac);
        setLanguagesStyle(mobileFullOpac);
        setDatabasesORMRelatedStyle(mobilePartialOpac);
        setPackagesFrameworksStyle(noStyle);
        setApplicationsStyle(mobileFullOpac);
      }      else if (positionY <= 1385) {
        setLibrariesRuntimesStyle(mobileFullOpac);
        setLanguagesStyle(mobileFullOpac);
        setDatabasesORMRelatedStyle(mobilePartialOpac);
        setPackagesFrameworksStyle(noStyle);
        setApplicationsStyle(mobilePartialOpac);
      }    else if (positionY <= 1480) {
        setLibrariesRuntimesStyle(mobileFullOpac);
        setLanguagesStyle(mobileFullOpac);
        setDatabasesORMRelatedStyle(mobilePartialOpac);
        setPackagesFrameworksStyle(noStyle);
        setApplicationsStyle(mobileHalfOpac);
      }    else if (positionY <= 1511) {
        setLibrariesRuntimesStyle(mobileFullOpac);
        setLanguagesStyle(mobileFullOpac);
        setDatabasesORMRelatedStyle(mobileFullOpac);
        setPackagesFrameworksStyle(noStyle);
        setApplicationsStyle(mobileHalfOpac);
      }    else if (positionY <= 1589) {
        setLibrariesRuntimesStyle(mobileFullOpac);
        setLanguagesStyle(mobileFullOpac);
        setDatabasesORMRelatedStyle(mobileFullOpac);
        setPackagesFrameworksStyle(mobileHalfOpac);
        setApplicationsStyle(noStyle);
      } else {
        setLibrariesRuntimesStyle(mobileFullOpac);
        setLanguagesStyle(mobileFullOpac);
        setDatabasesORMRelatedStyle(mobileFullOpac);
        setPackagesFrameworksStyle(mobilePartialOpac);
        setApplicationsStyle(noStyle);
      }
    }
  };

  return (
    <section className="portfolioSection">
      <div id="resumeHeading" className="d-block text-center">
        <h1>Resume</h1>
        <div id="resumeDownloadDiv">Download my Resume <a href={pdf} target="_blank" rel="noreferrer" id="resumeLink" style={resumeStyle}>Here</a></div>
      </div>
      <div id="resumeSubHeadingTalents" className="d-flex justify-content-around text-center">
        <h2 className='col-12 col-sm-4'
          style={frontSubHeaderStyle}
        >
          <div className='resumeTalentOption'
            onClick={() => {handleTalentSelection('front');}}
            style={frontEndButtonStyle}
          >
            <span style={frontWordStyle}>Front</span>-End Talents
          </div>
        </h2>
        <h2 className='col-12 col-sm-4'
          style={fullSubHeaderStyle}
        >
          <div className='resumeTalentOption'
            onClick={() => {handleTalentSelection('full');}}
            style={fullStackButtonStyle}
          >
            <span style={fullWordStyle}>Full</span>-Stack Talents 
          </div>
        </h2>
        <h2 className='col-12 col-sm-4'
          style={backSubHeaderStyle}
        >
          <div className='resumeTalentOption'
            style={backEndButtonStyle}
            onClick={() => {handleTalentSelection('back');}}
          >
            <span style={backWordStyle}>Back</span>-End Talents
          </div>
        </h2>
      </div>
      <div id="resumeBlock" className="d-flex row justify-content-around col-12 text-center">
        <div id="resumeLibrariesRuntimes" className={fluidResumeProficiencies}
        onMouseEnter={() => {resumeStyleChangeActive(); librariesRuntimesActive();}}
        onMouseLeave={() => {resumeStyleChangeInactive(); librariesRuntimesInactive();}}
        style={librariesRuntimesStyle}>
          <h4 className="resumeSkillsHeader">
            {resumeSkillsHeaderTextLibraries}
            <ul className="resumeSkillsList">
              <li>
                <img style={frontEndTalentStyle} src={"images/badges/react.svg"} alt="react badge"></img>
              </li>
              <li>
                <img style={frontEndTalentStyle} src={"images/badges/jQuery.svg"} alt="jQuery badge"></img>
              </li>
              <li>
                <img style={backEndTalentStyle} src={"images/badges/node.svg"} alt="node.js badge"></img>
              </li>
              <li>
                <img style={frontEndTalentStyle} src={"images/badges/styledComponents.svg"} alt="styled-components badge"></img>
              </li>
            </ul>
          </h4>
        </div>
        <div id="resumeLanguages" className={fluidResumeProficiencies}
        onMouseEnter={() => {resumeStyleChangeActive(); languagesActive();}}
        onMouseLeave={() => {resumeStyleChangeInactive(); languagesInactive();}}
        style={languagesStyle}>
          <h4 className="resumeSkillsHeader">
            Languages:
            <ul className="resumeSkillsList">
              <li>
                <img style={frontEndTalentStyle} src={"images/badges/javaScript.svg"} alt="javascript badge"></img>
              </li>
              <li>
                <img style={frontEndTalentStyle} src={"images/badges/HTML5.svg"} alt="HTML-5 badge"></img>
              </li>
              <li>
                <img style={frontEndTalentStyle} src={"images/badges/CSS3.svg"} alt="CSS-3 badge"></img>
              </li>
              <li>
                <img style={fullTalentStyle} src={"images/badges/csharp.svg"} alt="c-sharp badge"></img>
              </li>
              <li>
                <img style={backEndTalentStyle} src={"images/badges/python.svg"} alt="python badge"></img>
              </li>
              <li>
                <img style={backEndTalentStyle} src={"images/badges/java.svg"} alt="java badge"></img>
              </li>
            </ul>
          </h4>
        </div>
        <div id="resumeDatabasesORMRelated" className={fluidResumeProficiencies}
        onMouseEnter={() => {resumeStyleChangeActive(); databasesORMRelatedActive();}}
        onMouseLeave={() => {resumeStyleChangeInactive(); databasesORMRelatedInactive();}}
        style={databasesORMRelatedStyle}>
          <h4 className="resumeSkillsHeader">
            {resumeSkillsHeaderTextDatabases}
            <ul className="resumeSkillsList">
              <li>
                <img style={backEndTalentStyle} src={"images/badges/mySQL.svg"} alt="mySQL badge"></img>
              </li>
              <li>
                <img style={backEndTalentStyle} src={"images/badges/sequelize.svg"} alt="sequelize badge"></img>
              </li>
              <li>
                <img style={backEndTalentStyle} src={"images/badges/mongoDB.svg"} alt="mongoDB badge"></img>
              </li>
              <li>
                <img style={backEndTalentStyle} src={"images/badges/mongoose.svg"} alt="mongoose badge"></img>
              </li>
              <li>
                <img style={backEndTalentStyle} src={"images/badges/graphQL.svg"} alt="graphQL badge"></img>
              </li>
              <li>
                <img style={backEndTalentStyle} src={"images/badges/apolloGraphQL.svg"} alt="apollo-graphQL badge"></img>
              </li>
              <li>
                <img style={backEndTalentStyle} src={"images/badges/RESTAPI.svg"} alt="REST API badge"></img>
              </li>
            </ul>
          </h4>
        </div>
        <div id="resumePackagesFrameworks" className={fluidResumeProficiencies}
        onMouseEnter={() => {resumeStyleChangeActive(); packagesFrameworksActive();}}
        onMouseLeave={() => {resumeStyleChangeInactive(); packagesFrameworksInactive();}}
        style={packagesFrameworksStyle}>
          <h4 className="resumeSkillsHeader">
            {resumeSkillsHeaderTextPackages}
            <ul className="resumeSkillsList">
              <li>
                <img style={backEndTalentStyle} src={"images/badges/express.svg"} alt="express.js badge"></img>
              </li>
              <li>
                <img style={frontEndTalentStyle} src={"images/badges/bootstrap.svg"} alt="bootstrap badge"></img>
              </li>
              <li>
                <img style={frontEndTalentStyle} src={"images/badges/jest.svg"} alt="jest badge"></img>
              </li>
              <li>
                <img style={fullTalentStyle} src={"images/badges/net.svg"} alt=".net badge"></img>
              </li>
              <li>
                <img style={backEndTalentStyle} src={"images/badges/flask.svg"} alt="flask badge"></img>
              </li>
              <li>
                <img style={backEndTalentStyle} src={"images/badges/jwt.svg"} alt="jwt badge"></img>
              </li>
            </ul>
          </h4>
        </div>
        <div id="resumeApplications" className={fluidResumeProficiencies}
        onMouseEnter={() => {resumeStyleChangeActive(); applicationsActive();}}
        onMouseLeave={() => {resumeStyleChangeInactive(); applicationsInactive();}}
        style={applicationsStyle}>
          <h4 className="resumeSkillsHeader">
            Applications:
            <ul className="resumeSkillsList">
              <li>
                <img style={noTalentStyle} src={"images/badges/heroku.svg"} alt="heroku badge"></img>
              </li>
              <li>
                <img style={noTalentStyle} src={"images/badges/gitHub.svg"} alt="github badge"></img>
              </li>
            </ul>
          </h4>
        </div>
      </div>
    </section>
  );
}