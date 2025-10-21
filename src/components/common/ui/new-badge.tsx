import React from "react";

interface BadgeProps {
  text: string;
  color?: string;
  className?: string;
}

export default function NewBadge({
  text,
  color = "gray",
  className,
}: BadgeProps) {
  const bgColor = {
    red: "bg-red-100 text-red-700",
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    gray: "bg-gray-100 text-gray-700",
  }[color];

  return (
    <span
      className={`${className} text-[0.82rem] font-semibold rounded-full w-14 text-center px-2 py-0.5 ${bgColor}`}
    >
      {text}
    </span>
  );
}
