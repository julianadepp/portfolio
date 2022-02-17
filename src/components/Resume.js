import React from "react";
import resume from "../media/JulianaDeppResumeWebDev.pdf";

function Resume(props) {
  return (
    <div >
      <a target="_blank" rel="noopener noreferrer nofollow" href={resume}>
        <button >Resume</button>
      </a>
    </div>
  );
}

export default Resume;
