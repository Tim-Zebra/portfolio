import React from 'react';

export default function activeIcon({activeIconObj}) {
  return (
    <div className="activeIcon d-inline">
      <a href={activeIconObj.link} target="_blank" rel="noreferrer">
        <img src={activeIconObj.image} alt="external link" className="activeIconImage"></img>
      </a>
    </div>
  );
}