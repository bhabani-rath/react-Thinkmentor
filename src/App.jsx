import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
// SuperAdmin imports
import Dashboard from "./pages/SuperAdmin/Dashboard";
import UsersAndRoles from "./pages/SuperAdmin/UsersAndRoles";
import DataHub from "./pages/SuperAdmin/DataHub";
import Syllabus from "./pages/SuperAdmin/Syllabus";
import Settings from "./pages/SuperAdmin/Settings";
// Other user dashboards
import AdminDashboard from "./pages/Admin/Dashboard";
import AdministratorDashboard from "./pages/Adminstrator/Dashboard";
import TeacherDashboard from "./pages/Teacher/Dashboard";
import TeacherContentHub from "./pages/Teacher/ContentHub";
import TeacherMyClasses from "./pages/Teacher/MyClasses";
import TeacherSchedule from "./pages/Teacher/Schedule";
import TeacherAssignments from "./pages/Teacher/Assignments";
import TeacherMyStudents from "./pages/Teacher/MyStudents";
import TeacherAttendance from "./pages/Teacher/Attendance";
import TeacherGrades from "./pages/Teacher/Grades";
import StudentDashboard from "./pages/Student/Dashboard";
import ParentDashboard from "./pages/Parent/Dashboard";
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

        {/* Admin Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>

        {/* Administrator Routes */}
        <Route element={<DashboardLayout />}>
          <Route
            path="/adminstrator/dashboard"
            element={<AdministratorDashboard />}
          />
        </Route>

        {/* Teacher Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/content-hub" element={<TeacherContentHub />} />
          <Route path="/teacher/classes" element={<TeacherMyClasses />} />
          <Route path="/teacher/schedule" element={<TeacherSchedule />} />
          <Route path="/teacher/assignments" element={<TeacherAssignments />} />
          <Route path="/teacher/students" element={<TeacherMyStudents />} />
          <Route path="/teacher/attendance" element={<TeacherAttendance />} />
          <Route path="/teacher/grades" element={<TeacherGrades />} />
        </Route>

        {/* Student Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
        </Route>

        {/* Parent Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/parent/dashboard" element={<ParentDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
