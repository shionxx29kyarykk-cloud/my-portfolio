import React from "react";
import { Link } from "react-router-dom";

interface MainButtonProps {
  children: React.ReactNode;
  className?: string;
  to?: string; // ← optional にする
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function MainButton({
  children,
  className = "text-[1rem] py-3 px-6",
  to,
  onClick,
  type = "button",
}: MainButtonProps) {
  const baseClass = `w-full md:w-72 bg-blue-400 hover:opacity-90 text-white font-bold rounded transition text-center ${className}`;

  return to ? (
    <Link to={to} className={baseClass} onClick={onClick}>
      {children}
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}
