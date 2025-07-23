export default function InputField({
  icon,
  placeholder,
  onClick,
  value,
  readOnly = false,
  className = "",
}: {
  icon: React.ReactNode;
  placeholder: string;
  onClick?: () => void;
  value?: string;
  readOnly?: boolean;
  className?: string;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center border-r-2 border-gray-300 px-3 py-2 bg-white ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      <span className="text-pink-600 mr-2">{icon}</span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        className="outline-none w-full text-sm placeholder-gray-500 bg-white"
      />
    </div>
  );
}
