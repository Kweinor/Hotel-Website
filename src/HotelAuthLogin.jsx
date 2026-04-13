import { useState } from "react";

// ── Shared: show/hide password field ────────────────────────────────────────
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

// ── Shared: text input field ─────────────────────────────────────────────────
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

// ── Shared: submit button ────────────────────────────────────────────────────
function SubmitBtn({ children, onClick, loading, className = "" }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`w-full py-3 rounded-lg text-white text-[13px] tracking-wide font-medium transition-all duration-200 flex items-center justify-center gap-2 mb-5 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 disabled:opacity-80 ${className}`}
    >
      {loading
        ? <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
        : children}
    </button>
  );
}

// ── Shared: notice/info box ──────────────────────────────────────────────────
function NoticeBox({ icon, title, text, className = "" }) {
  return (
    <div className={`flex gap-3 rounded-lg p-3.5 mb-5 ${className}`}>
      <span className="text-base shrink-0 mt-0.5">{icon}</span>
      <div className="text-[11.5px] leading-relaxed">
        <strong className="block mb-0.5">{title}</strong>
        {text}
      </div>
    </div>
  );
}

// ── Left panel — role selector ────────────────────────────────────────────────
const ROLES = [
  { id: "superadmin", label: "Super Admin", desc: "One-time setup · Full access", icon: "👑", iconBg: "bg-teal-500/15" },
  { id: "admin",      label: "Admin",        desc: "Invited by Super Admin · Login only", icon: "🛡", iconBg: "bg-slate-800/30" },
  { id: "staff",      label: "Staff",        desc: "Invited by Admin · Login only", icon: "🪪", iconBg: "bg-amber-400/15" },
];

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

// ── Super Admin Login ────────────────────────────────────────────────────────
function SuperAdminLogin() {
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

// ── Admin Login ──────────────────────────────────────────────────────────────
function AdminLogin() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="animate-[fadeIn_0.28s_ease_both]">
      <span className="inline-flex items-center gap-1.5 bg-slate-900/8 border border-slate-900/20 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest text-slate-700 mb-3.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1a2744] shrink-0" /> Admin Portal
      </span>
      <h2 className="font-serif text-[26px] font-medium text-slate-900 tracking-tight mb-1.5">Admin Login</h2>
      <p className="text-[12px] text-slate-400 leading-relaxed mb-6">
        Sign in with the credentials sent to you by the Super Admin.
      </p>

      <NoticeBox
        icon="ℹ️"
        title="Invited admins only"
        text="No credentials yet? Ask your Super Admin to create your account."
        className="bg-slate-900/[0.06] border border-slate-900/15 text-slate-600 [&_strong]:text-slate-800"
      />

      <TextField label="Email Address" type="email" placeholder="admin@hotel.com" icon="✉" value={email} onChange={e => setEmail(e.target.value)} />
      <PasswordField label="Password" placeholder="Your temporary or current password" value={pw} onChange={e => setPw(e.target.value)} />

      <SubmitBtn
        className="bg-[#243259] hover:bg-[#2e3f6e] hover:shadow-slate-900/25"
        onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1800); }}
        loading={loading}
      >
        → Sign In as Admin
      </SubmitBtn>
    </div>
  );
}

// ── Staff Login ──────────────────────────────────────────────────────────────
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

// ── Root Component ────────────────────────────────────────────────────────────
export default function HotelAuthLogin() {
  const [role, setRole] = useState("superadmin");

  const formMap = {
    superadmin: <SuperAdminLogin key="superadmin" />,
    admin:      <AdminLogin key="admin" />,
    staff:      <StaffLogin key="staff" />,
  };

  return (
    <div className="flex min-h-screen bg-[#1a2744] font-mono">

      {/* ── LEFT: Role Selector ── */}
      <div className="w-[400px] min-w-[400px] flex flex-col px-11 py-12 relative overflow-hidden">

        {/* Decorative rings */}
        <div className="absolute w-64 h-64 rounded-full border border-teal-500/15 top-[30%] -left-20 pointer-events-none" />
        <div className="absolute w-44 h-44 rounded-full border border-teal-500/15 top-[35%] -left-5 pointer-events-none" />
        <div className="absolute w-96 h-96 rounded-full border border-teal-500/15 -bottom-28 -right-36 pointer-events-none" />

        {/* Glow blobs */}
        <div className="absolute w-[500px] h-[500px] rounded-full -top-24 -left-24 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(42,157,143,0.14) 0%, transparent 70%)" }} />
        <div className="absolute w-72 h-72 rounded-full bottom-14 -right-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(42,157,143,0.10) 0%, transparent 70%)" }} />

        {/* Brand */}
        <div className="relative z-10 shrink-0">
          <div className="flex items-center gap-3 mb-1.5">
            <div className="w-10 h-10 rounded-[11px] flex items-center justify-center text-xl shrink-0"
              style={{ background: "linear-gradient(135deg,#2a9d8f,#3bbfb0)", boxShadow: "0 4px 16px rgba(42,157,143,0.35)" }}>
              🏨
            </div>
            <span className="font-serif text-[22px] font-medium text-white tracking-tight">HotelBookings</span>
          </div>
          <div className="text-[10px] text-white/35 tracking-[0.2em] uppercase ml-[52px]">Admin Portal</div>
        </div>

        {/* Hero + role cards */}
        <div className="relative z-10 flex-1 flex flex-col justify-center py-10">
          <div className="flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-teal-300 mb-4">
            <div className="w-7 h-px bg-teal-300" />
            Secure Access
          </div>

          <h1 className="font-serif text-[38px] font-medium text-white leading-[1.15] tracking-tight mb-5">
            Sign in to<br />
            your <em className="italic text-teal-300">hotel</em><br />
            portal
          </h1>

          <p className="text-[13px] text-white/45 leading-relaxed max-w-[290px] mb-9">
            Select your role. All accounts are created by authorised administrators — no open registration.
          </p>

          <div className="flex flex-col gap-2.5">
            {ROLES.map(r => (
              <RoleCard
                key={r.id}
                role={r}
                selected={role === r.id}
                onClick={() => setRole(r.id)}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-[10px] text-white/20 tracking-[0.06em]">
          © 2026 HotelBookings. All rights reserved.
        </div>
      </div>

      {/* ── RIGHT: Login Form ── */}
      <div className="flex-1 bg-[#f4f6fb] flex items-center justify-center p-10 relative overflow-y-auto"
        style={{ backgroundImage: "radial-gradient(circle, rgba(26,39,68,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px" }}>

        <div className="relative z-10 w-full max-w-[420px]">
          <div
            key={role}
            className="bg-white rounded-[20px] border border-slate-200 overflow-hidden animate-[slideUp_0.4s_cubic-bezier(0.22,1,0.36,1)_both]"
            style={{ boxShadow: "0 20px 60px rgba(26,39,68,0.16)" }}
          >
            <div className="px-9 pt-8 pb-7">
              {formMap[role]}
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .font-serif { font-family: 'Georgia', 'Times New Roman', serif; }
        .font-mono  { font-family: 'Courier New', 'Lucida Console', monospace; }
      `}</style>
    </div>
  );
}
