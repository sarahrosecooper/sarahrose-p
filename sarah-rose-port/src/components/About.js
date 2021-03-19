import React from "react";
import "../About.css";
import styled from "styled-components";

const Main = styled.div`
  overflow: hidden;
`;

const Span = styled.span`
  color: #fa89d8;
  font-style: italic;
`;

const AboutText = styled.div`
  padding-left: 5%;
  padding-right: 5%;
`;

const H3 = styled.h3`
  margin: 0;
  padding: 0;
  border: 0;
  color: gray;
  font-size: 1rem;
  font-weight: normal;
  text-shadow: 1px 1px 2px #606060;
  text-decoration: underline;
`;

const SpanHover = styled.span`
  &:hover {
    font-family: "Trebuchet";
  }
`;

const AboutMe = styled.div`
  margin-left: 12%;
  margin-right: 12%;
  margin-bottom: 3%;
`;
const About = () => {
  return (
    <Main className="mainContainer">
      <AboutMe>
        <h2>
          my name is{" "}
          <SpanHover>
            sarah <Span>rose</Span> cooper.
          </SpanHover>
        </h2>

        <AboutText className="mainDiv">
          <p>
            (<Span>she/her</Span>) i'm a passionately empathetic full stack
            developer with a vigor for front end who is dedicated to making the
            internet more human.
          </p>
        </AboutText>
      </AboutMe>

      <H3>skills</H3>
      <i class="devicon-slack-plain-wordmark" title="slack"></i>
      <i class="devicon-trello-plain-wordmark" title="trello"></i>
      <i class="devicon-visualstudio-plain-wordmark" title="VSCode"></i>
      <i class="devicon-git-plain-wordmark" title="git"></i>

      <br></br>
      <i class="devicon-npm-original-wordmark tooltip" title="npm"></i>
      <i class="devicon-chrome-plain tooltip" title="Chrome"></i>
      <i class="devicon-github-original tooltip" title="Github"></i>
      <i class="devicon-apple-original tooltip" title="macOS"></i>

      <i class="devicon-codepen-plain tooltip" title="Codepen"></i>
      <br></br>
      <i class="devicon-html5-plain-wordmark tooltip" title="HTML5"></i>
      <i class="devicon-css3-plain-wordmark tooltip" title="CSS3"></i>

      <i class="devicon-javascript-plain tooltip" title="Javascript"></i>

      <i class="devicon-react-original-wordmark tooltip" title="reactJS"></i>
      <i class="devicon-redux-original tooltip" title="redux"></i>
      <i class="devicon-nodejs-plain-wordmark" title="node"></i>
      <br></br>
    </Main>
  );
};

export default About;
