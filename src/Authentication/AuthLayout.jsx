import { useState } from "react";
import { Outlet } from "react-router-dom";
import AuthSidebar from "./AuthSidebar";

export default function AuthLayout() {
  const [activeRole, setActiveRole] = useState("admin");

  return (
    <div className="flex min-h-screen">
      <AuthSidebar activeRole={activeRole} onRoleChange={setActiveRole} />
      <div
        className="flex-1 flex items-center justify-center p-10 bg-[#f4f6fb]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(26,39,68,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div
          key={activeRole}
          className="w-full max-w-[420px] bg-white rounded-[20px] border border-slate-200 px-9 pt-8 pb-7"
          style={{ boxShadow: "0 20px 60px rgba(26,39,68,0.16)" }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}