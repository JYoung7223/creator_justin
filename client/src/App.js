import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Process } from "./components/Process";
import { Projects } from "./components/Projects";
import { ProjectDetail } from "./components/ProjectDetail";
import { About } from "./components/About";

function App() {
  return (
    <>
      <NavBar />      
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Projects} />
            <Route exact path="/process" component={Process} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/:id" component={ProjectDetail} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
