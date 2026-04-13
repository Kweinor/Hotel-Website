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
export default NoticeBox;