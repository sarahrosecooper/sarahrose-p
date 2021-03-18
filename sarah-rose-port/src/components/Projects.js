import "../Projects.css";
import React from "react";
import africanMarketplace from "../images/build-week-group.png";
import essentialism from "../images/essentialism-group-build.png";
import firstProject from "../images/faux-portfolio.png";
import reactRedux from "../images/react-redux-app.png";
import reduxTodo from "../images/redux-todo.png";
import wireframe from "../images/wireframe.png";
import styled from "styled-components";

const Projects = () => {
  return (
    <div className="portfolio">
      <div className="child">
        <h4>african marketplace</h4>
        <img src={africanMarketplace} />
        <p>code | view project</p>
      </div>
      <div className="child">
        <h4>reducer to do </h4>
        <img src={reduxTodo} />
        <p>code | view project</p>
      </div>
      <div className="child">
        <h4>essentialism</h4>
        <img src={essentialism} />
        <p>code | view project</p>
      </div>
      <div className="child">
        <h4>react redux quote generator</h4>
        <img src={reactRedux} />
        <p>code | view project</p>
      </div>

      <div className="child">
        <h4>faux portfolio</h4>
        <img src={firstProject} />
        <p>code | view project</p>
      </div>
      <div className="child">
        <h4>wireframe example</h4>
        <img src={wireframe} />
        <p>code | view project</p>
      </div>
    </div>
  );
};

export default Projects;
