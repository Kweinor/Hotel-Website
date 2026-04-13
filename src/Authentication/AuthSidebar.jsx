import { useNavigate, useLocation } from "react-router-dom";
import RoleCard from "../RoleCard";

const ROLES = [
  { id: "admin", label: "Admin", desc: "Invited by Super Admin · Login only", icon: "🛡", iconBg: "bg-slate-800/30" },
  { id: "staff", label: "Staff", desc: "Invited by Admin · Login only", icon: "🪪", iconBg: "bg-amber-400/15" },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="h-screen sticky hidden md:flex px-8 flex-col gap-10 pt-10 bg-[#1a2744] text-orange-50 w-[380px] min-w-[380px]">
      <div className="flex flex-col items-center border-b border-gray-700 pb-10">
        <h1 className="text-2xl font-bold">KINGSLAND</h1>
        <span className="text-sm text-gray-400">HOTEL</span>
        <p className="text-[9px] text-gray-400">Admin Panel</p>
      </div>
      <div>
        <h1 className="leading-[1.15] font-serif text-[38px]">
          Sign in to your <em className="italic text-teal-300">hotel</em>
          <br /> portal
        </h1>
        <p className="text-[13px] text-white/45">
          Select your role. All accounts are created by authorised administrators
        </p>
      </div>
      <div className="flex flex-col gap-6 text-gray-400">
        {ROLES.map((role) => (
          <RoleCard
            key={role.id}
            role={role}
            selected={pathname.includes(role.id)}
            onClick={() => navigate(role.id)}
          />
        ))}
      </div>
      <span className="text-[9px] text-gray-400">© 2023 Kingsland Hotel. All rights reserved.</span>
    </div>
  );
}