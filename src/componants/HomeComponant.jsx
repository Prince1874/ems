import React from "react";
import { useNavigate } from "react-router-dom";

const HomeComponant = () => {
  const navigator = useNavigate();

  function register() {
    navigator("/register");
  }
  function login() {
    navigator("/login");
  }
  return (
    <div>
      <br /> <br />
      <div className="container">
        <div className="ms-auto">
          <button className="btn btn-warning mb-3" onClick={login}>
            Login
          </button>
          <button className="btn btn-warning mb-3" onClick={register}>
            Register
          </button>
        </div>
      </div>
      {/* Hero Section */}
      <header className="container text-center mt-5">
        <h1 className="fw-bold">Manage Your Employees Efficiently</h1>
        <p className="lead text-muted">
          Our system helps you track employee records, attendance, payroll, and
          much more with ease.
        </p>
      </header>
      {/* Features Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 text-center">
            <i className="bi bi-people display-3 text-primary"></i>
            <h4 className="mt-3">Employee Records</h4>
            <p>Store and manage employee data securely.</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-calendar-check display-3 text-primary"></i>
            <h4 className="mt-3">Attendance Tracking</h4>
            <p>Monitor employee attendance effortlessly.</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-cash-stack display-3 text-primary"></i>
            <h4 className="mt-3">Payroll Management</h4>
            <p>Automate salary calculations and payments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponant;
