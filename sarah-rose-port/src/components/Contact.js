import "../Contact.css";
import React, { useState, useEffect } from "react";
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

const QuoteBlock = styled.div`
  // background-color: #f7e9e8;
  // width: 85%;
  // margin: 0 auto;
  // padding: 0.5%;
  // margin-bottom: 50px;
`;

const InfinityIcon = styled.span`
  text-decoration: underline;

  &:hover {
    color: gray;
    font-style: italic;
    font-size: 1.3rem;
  }
}
`;
const Contact = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(setQuote(`"${data.content}" —${data.author}`));
      });
  }, []);

  const getQuote = (e) => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(`"${data.content}" —${data.author}`);
      });
  };

  return (
    <div className="contact-container">
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
      <br></br>
      <div className="contact-triangle-divider">-- ▲▼▲ --</div>
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
      <br></br>
      <div className="contact-triangle-divider">-- ▲▼▲ --</div>
      <br></br>
      <br></br>
      <QuoteBlock className="contact-blockquote-div">
        <blockquote>
          {quote}{" "}
          <InfinityIcon className="contact-infinity-icon" onClick={getQuote}>
            ∞
          </InfinityIcon>
        </blockquote>
      </QuoteBlock>
    </div>
  );
};

export default Contact;
