import React from "react";
import { useNavigate } from "react-router-dom";

const HomeComponant = () => {
  const navigator = useNavigate();

  function login() {
    navigator("/login");
  }

  return (
    <div style={{ backgroundColor: "#e3f2fd", minHeight: "100vh" }}>
      <br /> <br />
      {/* Right-aligned Login Button */}
      <div className="container">
        <div className="d-flex justify-content-end">
          <button className="btn btn-warning mb-3" onClick={login}>
            Login
          </button>
        </div>
      </div>
      {/* Hero Section */}
      <header className="container text-center mt-4">
        <h1 className="fw-bold">Manage Your Employees with Ease</h1>
        <p className="lead text-muted">
          A modern web application to help you organize employee data, monitor
          attendance, and handle payroll — all in one place, with zero hassle.
        </p>
      </header>
      {/* Feature Cards - One per Row */}
      <div className="container mt-5">
        {/* Card 1 */}
        <div className="row mb-4">
          <div className="col-md-12">
            <div
              className="card text-center shadow-sm p-4"
              style={{ backgroundColor: "#90caf9" }}
            >
              <div className="card-body">
                <i className="bi bi-people display-4 text-primary"></i>
                <h5 className="card-title mt-3">Employee Database</h5>
                <p className="card-text">
                  Store, organize, and access all employee records in one secure
                  and centralized system — making HR management seamless and
                  efficient.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="row mb-4">
          <div className="col-md-12">
            <div
              className="card text-center shadow-sm p-4"
              style={{ backgroundColor: "#a5d6a7" }}
            >
              <div className="card-body">
                <i className="bi bi-calendar-check display-4 text-success"></i>
                <h5 className="card-title mt-3">Attendance Monitoring</h5>
                <p className="card-text">
                  Track daily attendance automatically, reduce manual errors,
                  and generate instant reports — saving time and improving
                  accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="row mb-4">
          <div className="col-md-12">
            <div
              className="card text-center shadow-sm p-4"
              style={{ backgroundColor: "#fff176" }}
            >
              <div className="card-body">
                <i className="bi bi-cash-stack display-4 text-warning"></i>
                <h5 className="card-title mt-3">Payroll Processing</h5>
                <p className="card-text">
                  Automatically calculate salaries, apply deductions, and
                  generate payslips — ensuring every employee gets paid
                  correctly and on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponant;
