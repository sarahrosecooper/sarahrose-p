import "../Skills.css";
import React from "react";
import styled, { css } from "styled-components";

const H3 = styled.h3`
  margin: 0;
  padding: 0;
  border: 0;
  color: gray;
  font-size: 1rem;
  font-weight: normal;
  //   text-shadow: 1px 1px 2px #606060;
  text-decoration: underline;

  ${(props) =>
    props.special &&
    css`
     
    font-style: italic;
     
      }
    `}
`;

const Container = styled.div`
  margin-top: 3%;
  display: flex;
  justify-content: center;
`;

const SkillsBox = styled.div`
  margin-left: 4%;
  padding: 1%;
`;

const Skills = () => {
  return (
    <Container className="skills">
      <SkillsBox className="skillsContainer">
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
        <br></br>{" "}
      </SkillsBox>
      <SkillsBox className="skillsContainer">
        {" "}
        <H3 special>next on the agenda </H3>
        <br></br> material ui,<br></br>
        swift,<br></br>react native,<br></br>flutter,<br></br>typescript
        <br></br>
      </SkillsBox>
    </Container>
  );
};

export default Skills;
