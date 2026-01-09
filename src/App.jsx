import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/SuperAdmin/Dashboard";
import UsersAndRoles from "./pages/SuperAdmin/UsersAndRoles";
import DataHub from "./pages/SuperAdmin/DataHub";
import Syllabus from "./pages/SuperAdmin/Syllabus";
import Settings from "./pages/SuperAdmin/Settings";
import DashboardLayout from "./components/layout/DashboardLayout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/data-hub" element={<DataHub />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/users-roles" element={<UsersAndRoles />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
