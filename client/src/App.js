import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/recent-projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
