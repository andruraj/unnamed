import React from "react";
import { Link } from "react-router-dom";

const PersonalDetails = () => {
  const [state, setState] = React.useState({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    address: "",
    father: "",
    dob: "",
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <header>
        <h1>Personal Details</h1>
        <hr />
      </header>
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          margin: "1rem 0",
          gridGap: "1rem",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Field
          label="First Name"
          val={state.fname}
          onChange={(e) => setState({ ...state, fname: e })}
          required
        />
        <Field
          label="Middle Name"
          val={state.mname}
          onChange={(e) => setState({ ...state, mname: e })}
        />
        <Field
          label="Last Name"
          val={state.lname}
          onChange={(e) => setState({ ...state, lname: e })}
          required
        />
        <Field
          label="Email Address"
          val={state.email}
          onChange={(e) => setState({ ...state, email: e })}
          required
        />
        <Field
          label="Address for Communication"
          val={state.address}
          onChange={(e) => setState({ ...state, address: e })}
          required
        />
        <Field
          label="Father's Name"
          val={state.father}
          onChange={(e) => setState({ ...state, father: e })}
          required
        />
        <Field
          label="Date of Birth"
          val={state.dob}
          onChange={(e) => setState({ ...state, dob: e })}
          required
        />
      </main>
      <footer
        style={{
          bottom: 0,
          position: "absolute",
          width: "92%",
          margin: "1rem 0",
        }}
      >
        <Link className="btn" to="/resume-builder/" style={{ float: "left" }}>
          Back
        </Link>
        <Link
          className="btn"
          to="/resume-builder/education"
          style={{ float: "right" }}
        >
          Next
        </Link>
      </footer>
    </form>
  );
};

export default PersonalDetails;

const Field = ({ label, val = "", onChange, required = false, ...props }) => (
  <>
    <span>
      {label}
      {required ? "*" : null}
    </span>
    <input
      type="text"
      value={val}
      onChange={(e) => onChange(e.target.value)}
      style={{ border: "none", outline: "none", padding: "0.5rem" }}
      required={required}
      {...props}
    />
  </>
);
