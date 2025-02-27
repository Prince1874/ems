import React from "react";
import { useNavigate } from "react-router-dom";

const LoginComponant = () => {
  const navigator = useNavigate();

  function list() {
    navigator("/list");
  }

  function register() {
    navigator("/register");
  }
  return (
    <div className="container">
      <br /> <br /> <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Login</h2>
          <div className="card-body">
            <form action="">
              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  className="form-control"
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Password:</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  className="form-control"
                />
              </div>
              <button className="btn btn-success" onClick={list}>
                Login
              </button>
              <button className="btn btn-success" onClick={register}>
                Don't have account register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponant;
