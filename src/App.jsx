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

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="tutor" element={<Tutor />} />
        <Route path="learning-path" element={<LearningPath />} />
        <Route path="subjects" element={<Subjects />} />
        <Route path="practice" element={<Practice />} />
        <Route path="progress" element={<Progress />} />
        <Route path="resources" element={<Resources />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}