import "./App.css";
import EmployeesComponant from "./componants/EmployeesComponant";
import FooterComponant from "./componants/FooterComponant";
import HeaderComponant from "./componants/HeaderComponant";
import ListEmployeeComponant from "./componants/ListEmployeeComponant";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponant from "./componants/HomeComponant";
import LoginComponant from "./componants/LoginComponant";
import AttendenceComponant from "./componants/AttendenceComponant";
import PayrollComponant from "./componants/PayrollComponant";
function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponant />
        <Routes>
          {/* // http://localhost:3000 */}
          <Route path="/" element={<HomeComponant />}></Route>
          {/* // http://localhost:3000/login */}
          <Route path="/login" element={<LoginComponant />}></Route>
          {/* // http://localhost:3000/list */}
          <Route path="/list" element={<ListEmployeeComponant />}></Route>
          {/* // http://localhost:3000/employees */}
          <Route path="/employees" element={<ListEmployeeComponant />}></Route>
          <Route path="/add-employee" element={<EmployeesComponant />}></Route>
          {/* // http://localhost:3000/edit-employee/1 */}
          <Route path="/attendance" element={<AttendenceComponant />}></Route>
          <Route path="/payroll" element={<PayrollComponant />}></Route>
          {/* // http://localhost:3000/edit-employee */}
          <Route
            path="/edit-employee/:id"
            element={<EmployeesComponant />}
          ></Route>
        </Routes>
        <FooterComponant />
      </BrowserRouter>
    </>
  );
}

export default App;
