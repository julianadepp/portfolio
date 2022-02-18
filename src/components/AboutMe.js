import React from "react";
import headshot from "../media/photo1.jpg";
import Resume from "./Resume";

function AboutMe(props) {
  return (
    <div>
      <h2>About Me</h2>
      <div className="nontext">
        <div className="resume">
          <Resume />
        </div>
        <img src={headshot} alt="julianas face" className="headshot" />
      </div>
      <p>
        With a background in event and customer service management, I thrive in
        changing environments and have an unquenchable curiosity that leads me
        to constantly seek new skills. For me, there is no greater joy than
        coming up with creative solutions to problems by looking at them from
        all angles. <br />
        <br />
        Previously, I relished the challenge that was coordinating multiple
        events on the same night, presenting each client with a solution that
        meant their guests would never know the chaos and cross over occuring
        behind the scenes. Now, with coding, I can take my knack for problem
        solving to a whole new level. Perhaps its a bit masochistic, but I
        genuinely love working through a tough problem. The gratification that
        comes with solving it and seeing the working product is unmatched, and I
        get to learn along the way!
        <br />
        <br />
        Currently, I am seeking employment in front-end, back-end, and
        full-stack software engineering. I am based in New York City at the moment,
        but I am open to relocating as well as remote work. Most important to me
        is that the work I do contributes toward something bigger in some
        meaningful way.
        <br />
        <br />
        When I'm not on the job hunt or working on my coding skills, it's
        anyone's guess what I might be up to! If you've found my site by way of
        LinkedIn, you'll know that I consider myself a professional hobby
        dabbler, so much so that I put it in my headline. I love to learn how
        things work and the basic techniques required for various crafts and
        skills. Most recently I've taken up crochet, but I have dabbled in
        everything from woodworking to photography to embroidery. I have an ever
        growing list of things I want to try, so if you have any suggestions,
        I'd love to hear them. The more niche the better!
      </p>
    </div>
  );
}

export default AboutMe;
