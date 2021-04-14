import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Bubbles from "./components/home/Bubble";
import ResumeBuilder from "./components/apps/resume_builder";
import Portfolio from "./components/apps/portfolio";
import "./App.css";

const App = ({
  comp = [
    {
      title: "Portfolio",
      description: "My Portfolio built using React with Snowpack",
      comp: Portfolio,
      compProps: null,
      route: "/my-portfolio",
    },
    {
      title: "Resume Builder",
      description:
        "A React App to create a Resume just by entering the personal details",
      comp: ResumeBuilder,
      compProps: null,
      route: "/resume-builder",
    },
  ],
}) => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="bg">
          <Bubbles />
        </div>
        <Switch>
          <Route exact path="/" render={() => <Home comp={comp} />} />
          {comp.map((c, i) => (
            <Route
              key={i}
              exact
              path={c.route}
              render={() => <c.comp {...c.compProps} />}
            />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
