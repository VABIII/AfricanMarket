import React from "react";
import { AboutPage, AboutPage2, ImageThing, StyledLi } from "../styled components/AboutElements";


const About = () => {
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
        <div>
          <StyledLi>Business Address: 1363 Filbert Street Philadelphia, PA 19108</StyledLi>
          <StyledLi>
            <a href="tel:6108107015">Phone: 610-810-7015</a>
          </StyledLi>
          <StyledLi>
          <a href="mailto:MildredMMoore@teleworm.us"> Email: MildredMMoore@teleworm.us </a> 
            </StyledLi>
        </div>
      </ul>
      </AboutPage2>
    </div>
  );
};

export default About;
