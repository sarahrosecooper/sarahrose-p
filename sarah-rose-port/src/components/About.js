import React from "react";
import "../About.css";
import styled from "styled-components";
// import { useWindupString } from "windups";
import { Pace, WindupChildren } from "windups";

const Main = styled.div`
  border: 1px solid black;
  // margin-left: 25%;
  // margin-right: 25%;
`;

const Span = styled.span`
  color: #fa89d8;
  font-style: italic;
`;

const AboutText = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  text-align: justify;
`;

const AboutMe = styled.div`
  // margin-left: 12%;
  // margin-right: 12%;
  // margin-bottom: 3%;
`;

const Links = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    color: pink;
  }
`;

const About = () => {
  return (
    <Main className="container">
      <AboutMe>
        <h2>
          hi there,
          <WindupChildren>
            {" my name is"}
            <Pace ms={70}>
              <span style={{ color: "#fa89d8" }}>{" sarah rose cooper"}</span>
              {"."}
            </Pace>
          </WindupChildren>
        </h2>

        <AboutText className="mainDiv">
          <p>
            (<Span>she/her</Span>) I am a passionate Full-Stack Developer with a
            vigor for front-end. I am currently studying Full Stack at Lambda
            School - having just finished the front end and focusing on new back
            end technologies. However, my dream stack is everything iOS and
            advancing my UI/UX knowledge. I’m not ashamed to say my interest in
            technology was peaked in the early 2000’s when I picked up my first
            HTML/CSS for Dummies book so I could make my friends Myspace layouts
            (and my own) stand out. When I’m not developing, my interests range
            from psychology, cats, film, music, all forms of art and
            literature/poetry to caffeine. After being a barista off and on for
            8 years I find that my empathy for people, diversity, and
            inclusivity for all human beings has and only will continue to
            magnify. Although these skill sets are not tech oriented, I have no
            doubt that they are directly transferable. There is no greater
            motivating factor in my life than fostering connection and warmth
            between all different types of people (animals, too.) I believe
            there is no denying that the internet is a central focus in making
            this happen. I hope as I expand my technical knowledge I can play a
            part in bridging this gap as a queer, woman of color. It’s riveting
            to be a part of an industry where ones hunger for knowledge can be
            endlessly satiated with a thousand ways to expand your skill set at
            any given moment.
          </p>
        </AboutText>
      </AboutMe>
      <br></br>
      <div>
        <Links
          href="https://www.linkedin.com/in/sarah-cooper-797370126/"
          target="_blank"
        >
          <i class="devicon-linkedin-plain" title="linkedIn"></i>
        </Links>
        <Links href="https://github.com/sarahrosecooper" target="_blank">
          <i class="devicon-github-original" title="github"></i>
        </Links>
        <Links href="https://twitter.com/srciscoding" target="_blank">
          {" "}
          <i class="devicon-twitter-original" title="twitter"></i>
        </Links>
        <Links
          href="mailto:sarahrosecooperx@gmail.com?subject=I would love to get in touch!"
          target="_blank"
        >
          <i
            class="fa fa-envelope"
            style={{ fontSize: "36px" }}
            title="email"
          ></i>
        </Links>
      </div>
      <br></br>
    </Main>
  );
};

export default About;
