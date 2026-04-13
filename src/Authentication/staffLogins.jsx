import { useState } from "react";
import NoticeBox from "./LoginsComponent/Notice";
import PasswordField from "./LoginsComponent/PasswordField";
import SubmitBtn from "./LoginsComponent/SubmitButton";

function StaffLogin() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="animate-[fadeIn_0.28s_ease_both]">
      <span className="inline-flex items-center gap-1.5 bg-amber-400/10 border border-amber-400/30 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest text-amber-700 mb-3.5">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" /> Staff Portal
      </span>
      <h2 className="font-serif text-[26px] font-medium text-slate-900 tracking-tight mb-1.5">Staff Login</h2>
      <p className="text-[12px] text-slate-400 leading-relaxed mb-6">
        Sign in with the credentials your Admin sent you.
      </p>

      <NoticeBox
        icon="⚠️"
        title="First time logging in?"
        text="You'll be asked to change your temporary password immediately after signing in."
        className="bg-amber-50 border border-amber-300/50 text-amber-800 [&_strong]:text-amber-900"
      />

      <div className="mb-5">
        <label className="block text-[10.5px] uppercase tracking-widest text-slate-500 font-medium mb-1.5">
          Staff ID or Email
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">🪪</span>
          <input
            type="text"
            placeholder="STF-00124 or staff@hotel.com"
            value={id}
            onChange={e => setId(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-slate-300 rounded-lg text-[12.5px] text-slate-800 bg-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      <PasswordField
        label="Password"
        placeholder="Your temporary password"
        value={pw}
        onChange={e => setPw(e.target.value)}
        forgotColor="#b45309"
      />

      <SubmitBtn
        className="bg-gradient-to-r from-amber-700 to-amber-500 hover:from-amber-600 hover:to-amber-400 hover:shadow-amber-900/20"
        onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1800); }}
        loading={loading}
      >
        → Sign In as Staff
      </SubmitBtn>

      <p className="text-center text-[11px] text-slate-400">
        Having trouble?{" "}
        <a className="text-amber-700 cursor-pointer hover:underline">Contact your Admin</a>
      </p>
    </div>
  );
}
export default StaffLogin;