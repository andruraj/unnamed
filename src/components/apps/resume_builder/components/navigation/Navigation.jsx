import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavItem text="Welcome" route="/" />
      <NavItem text="Personal Details" route="/personal-details" />
      <NavItem text="Education" route="/education" />
      <NavItem text="Experience" route="/experience" />
      <NavItem text="Extras" route="/extras" />
      <NavItem text="Templates" route="/templates" />
    </div>
  );
};

export default Navigation;

const NavItem = withRouter(({ route = "#", text = "", ...props }) => {
  return (
    <NavLink className="nav-item" exact to={props.match.path + route}>
      {text}
    </NavLink>
  );
});
