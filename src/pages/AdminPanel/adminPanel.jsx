import { Outlet } from "react-router-dom";
import Sidebar from "../../sidebar";
import Header from "../../Header";

function AdminPanel() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md fixed h-full">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 ml-64 flex flex-col overflow-y-auto bg-indigo-50">
        {/* Full-width header at the top */}
        <Header />

        {/* Content below header */}
        <div className="flex-1 justify-center items-centeroverflow-y-auto px-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
