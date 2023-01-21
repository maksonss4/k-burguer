import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { LandingPage } from "../pages/LandingPage";

export function ContainerRoutes() {
  return (
    <Routes>
      {/* <Route path="landingpage" element={<LandingPage />} /> */}
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
