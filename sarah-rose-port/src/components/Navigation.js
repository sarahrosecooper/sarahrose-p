import "../Navigation.css";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav``;

const Container = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 20px;
  padding-right: 20px;
  overflow: hidden;
`;

const NavElements = styled.li`
  display: inline;
`;

const Navigation = () => {
  return (
    <div>
      <Nav>
        <Container>
          <NavElements>
            <Link to="/about" className="nav-link">
              home
            </Link>
          </NavElements>
          <NavElements>
            <Link to="/projects" className="nav-link">
              projects
            </Link>
          </NavElements>
          <NavElements>
            <Link to="/contact" className="nav-link">
              contact
            </Link>
          </NavElements>
        </Container>
      </Nav>
    </div>
  );
};

export default Navigation;
