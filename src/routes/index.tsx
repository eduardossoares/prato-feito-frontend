import { Route, Routes } from "react-router";
import { StatusPage } from "@/pages/status";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/status" element={<StatusPage />} />
    </Routes>
  );
}
