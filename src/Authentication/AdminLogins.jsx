import { useState } from "react";
import PasswordField from "./LoginsComponent/PasswordField";
import SubmitBtn from "./LoginsComponent/SubmitButton";
import TextField from "./LoginsComponent/TextField";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="animate-[fadeIn_0.28s_ease_both]">
      <span className="inline-flex items-center gap-1.5 bg-teal-500/10 border border-teal-500/25 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest text-teal-600 mb-3.5">
        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" /> Super Admin
      </span>
      <h2 className="font-serif text-[26px] font-medium text-slate-900 tracking-tight mb-1.5">Sign in</h2>
      <p className="text-[12px] text-slate-400 leading-relaxed mb-6">
        Enter your Super Admin credentials to access the full system dashboard.
      </p>

      <TextField label="Email Address" type="email" placeholder="superadmin@hotel.com" icon="✉" value={email} onChange={e => setEmail(e.target.value)} />
      <PasswordField label="Password" placeholder="Your password" value={pw} onChange={e => setPw(e.target.value)} />

      <SubmitBtn
        className="bg-[#1a2744] hover:bg-[#243259] hover:shadow-slate-900/25"
        onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1800); }}
        loading={loading}
      >
        → Sign In as Super Admin
      </SubmitBtn>
    </div>
  );
}
export default AdminLogin;