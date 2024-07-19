import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export default function Default() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
