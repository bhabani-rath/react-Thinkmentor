import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
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
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Super Admin Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/superadmin/dashboard" element={<Dashboard />} />
          <Route path="/superadmin/data-hub" element={<DataHub />} />
          <Route path="/superadmin/syllabus" element={<Syllabus />} />
          <Route path="/superadmin/users-roles" element={<UsersAndRoles />} />
          <Route path="/superadmin/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
