import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployees } from "../services/EmployeeSevice";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponant = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    deleteEmployee(id)
      .then(() => getAllEmployees())
      .catch((error) => console.error(error));
  }

  function goToAttendance() {
    navigator("/attendance");
  }

  function goToPayroll() {
    navigator("/payroll");
  }

  return (
    <div
      style={{ backgroundColor: "#e3f2fd", minHeight: "100vh" }}
      className="container py-4"
    >
      <h2 className="text-center mb-4">List of Employees</h2>

      <div className="mb-4">
        <button className="btn btn-primary me-3" onClick={addNewEmployee}>
          Add Employee
        </button>
        <button className="btn btn-success me-3" onClick={goToAttendance}>
          Track Attendance
        </button>
        <button className="btn btn-warning" onClick={goToPayroll}>
          Payroll
        </button>
      </div>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponant;
