import React from "react";
import { Link } from "react-router-dom";

interface SubButtonProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode;
  className?: string;
  to: string | { pathname: string; state?: any };
}

export default function SubButton({
  children,
  className = "text-[1rem] py-3 px-6 ",
  to,
  ...props
}: SubButtonProps) {
  return (
    <Link
      to={to}
      className={`w-full md:w-72 bg-white border-1.5 border-blue-400 hover:opacity-80 text-blue-400 font-bold py-3 px-6 rounded transition text-center ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
