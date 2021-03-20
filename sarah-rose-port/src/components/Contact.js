import "../Contact.css";
import React from "react";
import styled, { css } from "styled-components";

const Links = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    color: pink;
  }

  ${(props) =>
    props.textLink &&
    css`
      color: grey;

      &:hover {
        font-style: italic;
      }
    `}
`;
const Contact = () => {
  return (
    <div className="center">
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
      <br></br>
      <br></br>
      <div>
        <Links
          href="https://www.linkedin.com/in/sarah-cooper-797370126/"
          target="_blank"
          textLink
        >
          (linkedin)
        </Links>
        <br></br>
        <Links
          textLink
          href="https://github.com/sarahrosecooper"
          target="_blank"
        >
          (github)
        </Links>
        <br></br>
        <Links
          href="mailto:sarahrosecooperx@gmail.com?subject=I would love to get in touch!"
          target="_blank"
          textLink
        >
          (gmail)
        </Links>
        <br></br>
        <Links href="https://twitter.com/srciscoding" target="_blank" textLink>
          (twitter)
        </Links>
        <br></br>
        <Links
          href="https://docs.google.com/document/d/1esH3jGG40mgo8Koh-0jqR589Sqnuw5D1-1QYUk-cc_k/edit?usp=sharing"
          target="_blank"
          textLink
        >
          (resume)
        </Links>{" "}
      </div>
    </div>
  );
};

export default Contact;
