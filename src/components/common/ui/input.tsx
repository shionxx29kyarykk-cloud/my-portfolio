interface InputProps {
  label: string;
  isRequired?: boolean;
  width?: string;
  idName: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function Input({
  label,
  isRequired,
  width = "w-[40%]",
  idName,
  placeholder,
  value,
  onChange,
  error,
}: InputProps) {
  return (
    <div className={`${width} flex flex-col text-[16.5px] gap-2 pt-2`}>
      <label htmlFor={idName}>
        {label}
        {isRequired && <span className="text-red-500 pl-1">*</span>}
      </label>
      <input
        type="text"
        id={idName}
        name={idName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="placeholder-gray-300 px-2 border py-1 border-gray-320 rounded-[5px]"
      />
      {error && <p className="text-sm text-red-450 mt-1">{error}</p>}
    </div>
  );
}
