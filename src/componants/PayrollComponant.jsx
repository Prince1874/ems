import React from "react";

const PayrollComponant = () => {
  const payrollData = [
    { id: 1, name: "Prince Kumar", month: "April", salary: 50000 },
    { id: 2, name: "Banty Kumar", month: "April", salary: 45000 },
    { id: 3, name: "Aman Yadav", month: "April", salary: 48000 },
    { id: 5, name: "Nikhil Kumar", month: "April", salary: 47000 },
    { id: 6, name: "MS Dhoni", month: "April", salary: 60000 },
    { id: 7, name: "Cillian Murphy", month: "April", salary: 55000 },
    { id: 8, name: "Vikash Singh", month: "April", salary: 53000 },
    { id: 1, name: "John Doe", month: "April", salary: 40000 },
    { id: 2, name: "Jane Smith", month: "April", salary: 38000 },
    { id: 3, name: "Alice Johnson", month: "April", salary: 42000 },
    { id: 4, name: "Bob Brown", month: "April", salary: 46000 },
    { id: 5, name: "Charlie Davis", month: "April", salary: 49000 },
    { id: 6, name: "David Wilson", month: "April", salary: 51000 },
    { id: 7, name: "Eve Thompson", month: "April", salary: 53000 },
    { id: 8, name: "Frank Garcia", month: "April", salary: 55000 },
    { id: 9, name: "Grace Martinez", month: "April", salary: 57000 },
    { id: 10, name: "Hank Lee", month: "April", salary: 59000 },
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
