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
        <h1 className="fw-bold">Simplify Employee Management</h1>
        <p className="lead text-muted">
          A smart solution to manage employee details, attendance, payroll, and
          more—all in one place.
        </p>
      </header>
      {/* Features Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 text-center">
            <i className="bi bi-people display-3 text-primary"></i>
            <h4 className="mt-3">Comprehensive Employee Database</h4>
            <p>Keep all employee information organized and accessible.</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-calendar-check display-3 text-primary"></i>
            <h4 className="mt-3">Real-Time Attendance Monitoring</h4>
            <p>Track attendance seamlessly with automated reports.</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-cash-stack display-3 text-primary"></i>
            <h4 className="mt-3">Effortless Payroll Processing</h4>
            <p>Ensure timely salary disbursement with accurate calculations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponant;
