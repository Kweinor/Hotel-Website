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
export default SubmitBtn;