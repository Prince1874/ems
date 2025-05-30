import React from "react";

const AttendenceComponant = () => {
  const attendanceData = [
    { id: 1, name: "Prince Kumar", date: "2025-05-30", status: "Present" },
    { id: 2, name: "Banty Kumar", date: "2025-05-30", status: "Absent" },
    { id: 3, name: "Aman Yadav", date: "2025-05-30", status: "Present" },
    { id: 4, name: "Amit Kumar", date: "2025-05-30", status: "Present" },
    { id: 5, name: "Nikhil Kumar", date: "2025-05-30", status: "Absent" },
    { id: 6, name: "MS Dhoni", date: "2025-05-30", status: "Present" },
    { id: 7, name: "John Doe", date: "2025-05-30", status: "Present" },
    { id: 8, name: "Cillian Murphy", date: "2025-05-30", status: "Absent" },
    { id: 9, name: "Vikash Singh", date: "2025-05-30", status: "Present" },
    { id: 10, name: "Test User", date: "2025-05-30", status: "Present" },
  ];

  return (
    <div className="container mt-4">
      <h2>Attendance Records</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record) => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.date}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendenceComponant;
