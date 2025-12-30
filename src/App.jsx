import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import UsersAndRoles from "./pages/UsersAndRoles";
import DataHub from "./pages/DataHub";
import DashboardLayout from "./components/layout/DashboardLayout";
import "./App.css";

const Syllabus = () => (
  <div style={{ fontFamily: "'Inter', sans-serif" }}>
    <h1 className="text-2xl font-bold text-gray-900 mb-1">
      Syllabus Management
    </h1>
    <p className="text-gray-500">Create and manage course syllabi.</p>
  </div>
);

const Settings = () => (
  <div style={{ fontFamily: "'Inter', sans-serif" }}>
    <h1 className="text-2xl font-bold text-gray-900 mb-1">Settings</h1>
    <p className="text-gray-500">Configure your application settings.</p>
  </div>
);

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
