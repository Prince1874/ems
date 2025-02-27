import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResgisterComponant = () => {
  const [hrName, setHrname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setError] = useState({
    hrName: "",
    email: "",
    password: "",
  });

  function validationForm() {
    let valid = true;

    const errorCopy = { ...errors };

    if (hrName.trim()) {
      errorCopy.hrName = "";
    } else {
      errorCopy.email = "Name is required";
      valid = false;
    }

    if (email.trim()) {
      errorCopy.email = "";
    } else {
      errorCopy.email = "Email is required";
      valid = false;
    }

    if (password.trim()) {
      errorCopy.password = "";
    } else {
      errorCopy.password = "Password is required";
    }

    setError(errorCopy);
    return valid;
  }

  const navigator = useNavigate();
  function register() {
    navigator("/login");
  }
  return (
    <div className="container">
      <br /> <br /> <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Register</h2>
          <div className="card-body">
            <form action="">
              <div className="form-group mb-2">
                <label className="form-label">Hr Name:</label>
                <input
                  type="text"
                  placeholder="Enter Hr Name"
                  name="hrname"
                  value={hrName}
                  className={`form-control ${
                    errors.hrName ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setHrname(e.target.value)}
                />
                {errors.hrName && (
                  <div className="invalid-feedbaack">{errors.hrName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={email}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <div className="invalid-feedbaack">{errors.email}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Password:</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={password}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn btn-primary" onClick={register}>
                Register
              </button>
              <button className="btn btn-primary" onClick={register}>
                Already have an account login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResgisterComponant;
