import React from "react";
import headshot from '../media/crochetTrackerStandIn.jpeg'

function AboutMe(props) {
  return (
    <div>
      <img src={headshot} alt='julianas face' className="headshot"/>
      <p>
        With a background in event and customer service management, I thrive in
        changing environments and have an unquenchable curiosity that leads me
        to constantly seek new skills. For me, there is no greater joy than
        coming up with creative solutions to problems by looking at them from
        all angles. Whether that’s in web development, designing an efficient
        path of travel for simultaneous events, or coming up with creative
        alternatives when I’ve just run out of eggs and I’m halfway through
        making a new cookie recipe!
      </p>
    </div>
  );
}

export default AboutMe;
