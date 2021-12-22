import React from "react";
import { AboutPage, AboutPage2, ImageThing } from "../styled components/AboutElements";
// TODO: Flesh out page w/ some bullshit and add in some fake contact info so we don't make a liar out of the
// TODO: of the 'contact us' link in Home page footer

// done - Lorenzo

const About = (props) => {
  return (
    <div>
      <AboutPage>
        <h1>About us </h1>
        <p>
          We are a non profit organization that connects multiple areas in
          Africa by letting them post items for sale.
        </p>
        <ImageThing src="https://image.shutterstock.com/image-photo/attractive-middle-aged-woman-folded-260nw-483735022.jpg" alt="Mildred M. Moore"/>
        <p>
          The company was started by Mildred M. Moore in 2015 as a passion
          project for charity.
        </p>
      </AboutPage>
      <AboutPage2>
      <ul> 
          <h3> 
              How to reach out to us: 
          </h3>
        <li> 
          <li>Business Address: 1363 Filbert Street Philadelphia, PA 19108</li>
          <li>Phone: 610-810-7015</li>
          <li>Email: MildredMMoore@teleworm.us</li>
        </li>
      </ul>
      </AboutPage2>
    </div>
  );
};

export default About;
