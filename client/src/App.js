import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Process } from "./components/Process";
import { Projects } from "./components/Projects";
import { About } from "./components/About";

function App() {
  return (
    <>
      <NavBar />      
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Process} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
