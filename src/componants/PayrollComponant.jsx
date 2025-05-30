import React from "react";

const PayrollComponant = () => {
  const payrollData = [
    { id: 1, name: "Prince Kumar", month: "May", salary: 50000 },
    { id: 2, name: "Banty Kumar", month: "May", salary: 45000 },
    { id: 3, name: "Aman Yadav", month: "May", salary: 48000 },
    { id: 5, name: "Nikhil Kumar", month: "May", salary: 47000 },
    { id: 6, name: "MS Dhoni", month: "May", salary: 60000 },
    { id: 7, name: "Cillian Murphy", month: "April", salary: 55000 },
    { id: 8, name: "Vikash Singh", month: "April", salary: 53000 },
    { id: 1, name: "John Doe", month: "April", salary: 40000 },
    { id: 2, name: "Jane Smith", month: "April", salary: 38000 },
    { id: 8, name: "Frank Garcia", month: "April", salary: 55000 },
  ];

  return (
    <div className="container mt-4">
      <h2>Payroll Details</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Month</th>
            <th>Salary (INR)</th>
          </tr>
        </thead>
        <tbody>
          {payrollData.map((record) => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.month}</td>
              <td>₹{record.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayrollComponant;
