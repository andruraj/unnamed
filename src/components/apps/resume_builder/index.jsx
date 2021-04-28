import React from "react";
import { Route, Switch, withRouter } from "react-router";
import Welcome from "./components/content/Welcome";
import PersonalDetails from "./components/content/PersonalDetails";
import Education from "./components/content/Education";
import Experience from "./components/content/Experience";
import Extras from "./components/content/Extras";
import Templates from "./components/content/Templates";
import Navigation from "./components/navigation";
import "./index.css";

const ResumeBuilder = withRouter((props) => {
  return (
    <div className="resume-builder">
      <Navigation />
      <div className="content">
        <Switch>
          <Route exact path={props.match.path} component={Welcome} />
          <Route
            path={props.match.path + "/personal-details"}
            component={PersonalDetails}
          />
          <Route path={props.match.path + "/education"} component={Education} />
          <Route
            path={props.match.path + "/experience"}
            component={Experience}
          />
          <Route path={props.match.path + "/extras"} component={Extras} />
          <Route path={props.match.path + "/templates"} component={Templates} />
        </Switch>
      </div>
    </div>
  );
});

export default ResumeBuilder;
