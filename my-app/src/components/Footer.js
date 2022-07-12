import React from 'react';
import IconCreator from '../utils/IconCreator'
import '../styles/Footer.css';

// Icon object
const iconLinkObj = {
  github: {
    link: 'https://github.com/Tim-Zebra',
    image: 'images/iconImages/githubIcon.png'
  },
  linkedin: {
    link: 'https://www.linkedin.com/in/timothy-zalewski-18a8393a/',
    image:'images/iconImages/linkedinIcon.png'
  },
  stackoverflow: {
    link: 'https://stackoverflow.com/users/18346921/tim-zebra',
    image: 'images/iconImages/stackIcon.png'
  }
}

export default function Footer() {
  return (
    <footer>
      <IconCreator activeIconObj={iconLinkObj.github} />
      <IconCreator activeIconObj={iconLinkObj.linkedin} />
      <IconCreator activeIconObj={iconLinkObj.stackoverflow} />
    </footer>
  );
}