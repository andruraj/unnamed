import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <header>
        <h1>Welcome</h1>
        <hr />
      </header>
      <main style={{ lineHeight: "2rem" }}>
        <p>
          Welcome to Resume Builder. This is <b>Mark I</b> prototype of Single
          Page Application (SPA), named <b>Resume Builder</b> built using React
          JS with Snowpack.
        </p>
        <p>
          <b>Mark I</b> covers basic features such as collecting data and
          organize it into a Resume according to the template.
        </p>
        <p>
          <b>Mark I</b> does not make use of any backend service endpoints and
          all data are stored in the browser Session Storage.
        </p>
        <p>
          Future versions, i.e. if continued will provide better features and
          advanced functionalities with neater styles
        </p>
        <em>- Andruraj</em>
      </main>
      <footer
        style={{
          bottom: 0,
          position: "absolute",
          width: "92%",
          margin: "1rem 0",
        }}
      >
        <Link
          className="btn"
          to="/resume-builder/personal-details"
          style={{ float: "right" }}
        >
          Next
        </Link>
      </footer>
    </div>
  );
};

export default Welcome;
