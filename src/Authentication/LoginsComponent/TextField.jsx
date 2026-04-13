function TextField({ label, type = "text", placeholder, icon, value, onChange }) {
  return (
    <div className="mb-5">
      <label className="block text-[10.5px] uppercase tracking-widest text-slate-500 font-medium mb-1.5">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full pl-9 pr-4 py-2.5 border border-slate-300 rounded-lg text-[12.5px] text-slate-800 bg-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all placeholder:text-slate-400"
        />
      </div>
    </div>
  );
}
export default TextField;