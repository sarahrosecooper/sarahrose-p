import React, { useState, useEffect } from "react";
import styled from "styled-components";

// #d8e2dc
// #ffe5d9
// #ffcad4
// #f4acb7
// #9d8189 / brown pink

const FooterDiv = styled.div`
  margin-top: 1rem;
  padding: 0.2rem;
  background-color: #f4acb7; // rgb(235, 195, 64);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  color: black;
`;
const Footer = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(setQuote(`${data.content} —${data.author}`));
      });
  }, []);

  return (
    <FooterDiv className="footer">
      <p>{quote}</p>
    </FooterDiv>
  );
};

export default Footer;
