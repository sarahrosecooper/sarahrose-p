import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
