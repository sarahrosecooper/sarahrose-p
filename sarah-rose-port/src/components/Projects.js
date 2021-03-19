import "../Projects.css";
import React from "react";

import africanMarketplace from "../images/build-week-group.png";
import essentialism from "../images/essentialism-group-build.png";
import firstProject from "../images/faux-portfolio.png";
import reactRedux from "../images/react-redux-app.png";
import reduxTodo from "../images/redux-todo.png";
import wireframe from "../images/wireframe.png";
import styled from "styled-components";

const Links = styled.a`
  text-decoration: none;
  color: darkgray;
  &:hover {
    font-style: italic;
    color: pink;
    text-decoration: underline;
  }
`;

const Projects = () => {
  return (
    <div>
      <div className="portfolio">
        <div className="child">
          <h4>african marketplace</h4>
          <p className="description">
            built with redux, react, css, and styled components on a
            collaborative team of four developers over two weeks.
          </p>
          <a
            href="https://front-end-african-market-place.vercel.app/"
            target="_blank"
          >
            <img
              src={africanMarketplace}
              alt="african marketplace screenshot"
            />
          </a>
          <p>
            <Links
              href="https://github.com/TrackTeam-175-African-MarketPlace-BW/Front-End-African-Market-Place"
              target="_blank"
            >
              code
            </Links>{" "}
            |{" "}
            <Links
              href="https://front-end-african-market-place.vercel.app/"
              target="_blank"
            >
              view project
            </Links>
          </p>
        </div>
        <div className="child">
          <h4>reducer to do </h4>
          <p className="description">
            built with react, redux, and styled components as an introductory
            project to using reducers and hooks in redux.
          </p>{" "}
          <a href="https://react-redux-todo-nine.vercel.app/" target="_blank">
            <img
              src={reduxTodo}
              alt="screenshot of a todo list with hearts and flowers"
            />
          </a>
          <p>
            <Links
              href="https://github.com/sarahrosecooper/react-redux-todo"
              target="_blank"
            >
              code
            </Links>{" "}
            |{" "}
            <Links
              href="https://react-redux-todo-nine.vercel.app/"
              target="_blank"
            >
              view project
            </Links>
          </p>
        </div>
        <div className="child">
          <h4>essentialism</h4>
          <p className="description">
            worked collaboratively with six developers to create a landing page
            for their project using css and html.
          </p>{" "}
          <a href="https://essentialism-simplify.netlify.app/" target="_blank">
            <img
              src={essentialism}
              alt="screenshot of a green themed landing page"
            />
          </a>
          <p>
            <Links
              href="https://github.com/Buildweek-Essentialism/essentialism-buildweek"
              target="_blank"
            >
              code
            </Links>{" "}
            |{" "}
            <Links
              href="https://essentialism-simplify.netlify.app/"
              target="_blank"
            >
              view project
            </Links>
          </p>
        </div>
        <div className="child">
          <h4>react redux quote generator</h4>
          <p className="description">
            built with react and redux using asychronous action creators and
            consuming apis in react redux using reducers.{" "}
          </p>
          <a
            href="https://redux-quote-app-cqx1shs85-sarahrosecooper.vercel.app/"
            target="_blank"
          >
            <img
              src={reactRedux}
              alt="screenshot of a preview of a quote generator using trump and emojis"
            />
          </a>
          <p>
            <Links
              href="https://github.com/sarahrosecooper/redux-quote-app/tree/master/async-redux"
              target="_blank"
            >
              code
            </Links>{" "}
            |{" "}
            <Links
              href="https://redux-quote-app-cqx1shs85-sarahrosecooper.vercel.app/
"
              target="_blank"
            >
              view project
            </Links>
          </p>
        </div>

        <div className="child">
          <h4>faux portfolio</h4>
          <p className="description">
            one of my very first projects trying to grasp flexbox and css
            styling in faux portfolio format.
          </p>
          <a
            href="https://portfoliotestsrc.netlify.app/index.html"
            target="_blank"
          >
            <img src={firstProject} alt="screenshot of a homepage with roses" />
          </a>
          <p>
            <Links
              href="https://github.com/sarahrosecooper/User-Interface-II/tree/sarah-cooper-day2
            "
              target="_blank"
            >
              code
            </Links>{" "}
            |{" "}
            <Links
              href="https://portfoliotestsrc.netlify.app/index.html"
              target="_blank"
            >
              view project
            </Links>
          </p>
        </div>
        <div className="child">
          <h4>wireframe example</h4>
          <p className="description">
            a project in progress just here to demonstrate my interest in
            documentation and planning before action.
          </p>
          <a
            href="https://whimsical.com/thought-flow-22TFNanDKbF1WQ6oDuLKYU"
            target="_blank"
          >
            <img
              src={wireframe}
              alt="screenshot of a wireframe using the whimsical platform"
            />
          </a>
          <p>
            <Links
              href="https://whimsical.com/thought-flow-22TFNanDKbF1WQ6oDuLKYU
            "
              target="_blank"
            >
              view project
            </Links>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
