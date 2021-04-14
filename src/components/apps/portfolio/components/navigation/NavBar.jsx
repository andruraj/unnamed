import React from "react";
import { Empty } from "../utilities/Utils";
import Logo from "./favicon.jpg";

const NavItem = ({ icon, children, ...props }) => (
  <div className={`nav-item${props.className ? " " + props.className : ""}`}>
    {icon && <span className="icon">{icon}</span>}
    <span className="text">{children}</span>
  </div>
);

const NavBar = (props) => (
  <nav className={!Empty(props.className) ? props.className : ""}>
    <div className="left">
      <img
        src={Logo}
        alt="logo"
        style={{
          width: "35px",
          height: "35px",
          borderRadius: "50%",
        }}
      />
    </div>
    <div className="right">
      <NavItem>Home</NavItem>
      <NavItem>About</NavItem>
      <NavItem>Skills</NavItem>
      <NavItem>Projects</NavItem>
      <NavItem>About</NavItem>
    </div>
  </nav>
);

export default NavBar;
