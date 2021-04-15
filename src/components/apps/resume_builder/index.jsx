import React from "react";
import Welcome from "./components/content/Welcome";
import PersonalDetails from "./components/content/PersonalDetails";
import Navigation from "./components/navigation";
import "./index.css";
import { Route, Switch, withRouter } from "react-router";

const ResumeBuilder = withRouter((props) => {
  console.log(props);
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
        </Switch>
      </div>
    </div>
  );
});

export default ResumeBuilder;
