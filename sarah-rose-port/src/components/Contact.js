import "../Contact.css";
import React from "react";
import styled from "styled-components";

const Links = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    color: pink;
  }
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
    </div>
  );
};

export default Contact;
