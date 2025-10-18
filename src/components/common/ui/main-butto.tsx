import React from "react";
import { Link } from "react-router-dom";

interface SubButtonProps {
  children: React.ReactNode;
  className?: string;
  to: string | { pathname: string; state?: any };
}

export default function MainButton({
  children,
  className = "text-[1rem] py-3 px-6 ",
  to,
  ...props
}: SubButtonProps) {
  return (
    <Link
      to={to}
      className={`w-full md:w-72  bg-blue-400 hover:opacity-90 text-white font-bold rounded transition text-center ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
