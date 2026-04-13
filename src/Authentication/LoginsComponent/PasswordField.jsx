import { useState } from "react";

function PasswordField({ label, placeholder, value, onChange, forgotColor = "#2a9d8f" }) {
  const [show, setShow] = useState(false);
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-1.5">
        <label className="text-[10.5px] uppercase tracking-widest text-slate-500 font-medium">
          {label}
        </label>
        <a className="text-[11px] cursor-pointer hover:opacity-70 transition-opacity" style={{ color: forgotColor }}>
          Forgot password?
        </a>
      </div>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">🔒</span>
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full pl-9 pr-10 py-2.5 border border-slate-300 rounded-lg text-[12.5px] text-slate-800 bg-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all placeholder:text-slate-400"
        />
        <button
          type="button"
          onClick={() => setShow(s => !s)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors text-sm"
        >
          {show ? "🙈" : "👁"}
        </button>
      </div>
    </div>
  );
}
export default PasswordField;