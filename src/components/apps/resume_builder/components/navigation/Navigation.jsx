import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavItem text="Welcome" route="/" />
      <NavItem text="Personal Details" route="/personal-details" />
      <NavItem text="Welcome3" route="/welcome3" />
      <NavItem text="Welcome4" route="/welcome4" />
      <NavItem text="Welcome5" route="/welcome5" />
    </div>
  );
};

export default Navigation;

const NavItem = withRouter(({ route = "#", text = "", ...props }) => {
  return (
    <NavLink className="nav-item" to={props.match.path + route}>
      {text}
    </NavLink>
  );
});
