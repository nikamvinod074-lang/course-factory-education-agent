
import { Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import Tutor from "./pages/Tutor";
import LearningPath from "./pages/LearningPath";
import Subjects from "./pages/Subjects";
import Practice from "./pages/Practice";
import Progress from "./pages/Progress";
import Resources from "./pages/Resources";
import Settings from "./pages/Settings";

import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import ProtectedRoute from "./features/auth/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected routes */}
      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="tutor" element={<Tutor />} />
        <Route path="learning-path" element={<LearningPath />} />
        <Route path="subjects" element={<Subjects />} />
        <Route path="practice" element={<Practice />} />
        <Route path="progress" element={<Progress />} />
        <Route path="resources" element={<Resources />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
