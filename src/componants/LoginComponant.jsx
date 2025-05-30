import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginComponant = () => {
  const navigator = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function list(e) {
    e.preventDefault(); // Prevent form refresh

    const validUsers = [
      { email: "prince123@gmail.com", password: "prince" },
      { email: "bkbanty2002@gmail.com", password: "banty" },
      { email: "amank11@gmail.com", password: "aman" },
    ];

    const isValid = validUsers.some(
      (user) => user.email === email && user.password === password
    );

    if (isValid) {
      navigator("/list");
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <div className="container">
      <br /> <br /> <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Login</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Password:</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn btn-success me-2" onClick={list}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponant;
