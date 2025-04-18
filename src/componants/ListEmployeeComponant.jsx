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
    console.log(id);

    deleteEmployee(id)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div
      style={{ backgroundColor: "#e3f2fd", minHeight: "100vh" }}
      className="container"
    >
      <h2 className="text-center">List of Employees</h2>
      <button className="btn btn-info mb-2" onClick={addNewEmployee}>
        Add Employee
      </button>
      <table className="table table-striped table-borderd">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee Fist Name</th>
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
                  className="btn btn-warning"
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
