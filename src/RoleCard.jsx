function RoleCard({ role, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3.5 px-4 py-3.5 rounded-lg border text-left w-full transition-all duration-200 ${
        selected
          ? "bg-teal-500/15 border-teal-500/40"
          : "bg-white/[0.04] border-white/10 hover:bg-teal-500/10 hover:border-teal-500/30"
      }`}
    >
      <div className={`w-9 h-9 rounded-[9px] flex items-center justify-center text-[17px] shrink-0 ${role.iconBg}`}>
        {role.icon}
      </div>
      <div className="flex-1">
        <div className="text-[13px] text-white/85">{role.label}</div>
        <div className="text-[10px] text-white/35 mt-0.5">{role.desc}</div>
      </div>
      <div className={`w-[18px] h-[18px] rounded-full border flex items-center justify-center text-[10px] text-white shrink-0 transition-all duration-200 ${
        selected ? "bg-teal-500 border-teal-500" : "border-white/20 bg-transparent"
      }`}>
        {selected ? "✓" : ""}
      </div>
    </button>
  );
}
export default RoleCard;