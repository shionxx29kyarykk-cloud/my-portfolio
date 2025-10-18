import { useState } from "react";

export default function SpinButton({
  min = 1,
  max = 10,
  initial = 1,
  inputSize = "h-8 px-5",
  buttonSize = "w-8 h-8",
  onChange,
}: {
  min?: number;
  max?: number;
  initial?: number;
  inputSize?: string;
  buttonSize?: string;
  onChange?: (value: number) => void;
}) {
  const [quantity, setQuantity] = useState(initial);

  const updateQuantity = (newValue: number) => {
    const clamped = Math.max(min, Math.min(max, newValue));
    setQuantity(clamped);
    onChange?.(clamped);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => updateQuantity(quantity - 1)}
        className={`${buttonSize} rounded font-bold text-md text-gray-700 bg-gray-150 hover:opacity-80`}
      >
        −
      </button>

      <span
        className={`${inputSize} min-w-[24px] font-bold rounded text-center border flex items-center  border-gray-470`}
      >
        {quantity}
      </span>

      <button
        onClick={() => updateQuantity(quantity + 1)}
        className={`${buttonSize} rounded font-bold bg-gray-470 text-gray-700 hover:opacity-80`}
      >
        ＋
      </button>
    </div>
  );
}
