import { Avatar } from "@mui/material";
import React from "react";
import "./Story.css";
//import StroyReel from './StroyReel'

function Story({ image, title, profileSrc }) {
  return (
    <div style={{backgroundImage:`url(${image})`}} className="story">
      <Avatar className="story__avatar" src={profileSrc} />
       <h4> {title} </h4>
    </div>
  );
}

export default Story;