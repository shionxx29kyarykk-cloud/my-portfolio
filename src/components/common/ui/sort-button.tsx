import { IconMenuDeep } from "@tabler/icons-react";
import React, { useState, useRef, useEffect } from "react";

type SortKey = "price" | "name" | "none";

interface SortControlsProps {
  sortKey: SortKey;
  onSortKeyChange: (key: SortKey) => void;
}

export default function SortControls({
  sortKey,
  onSortKeyChange,
}: SortControlsProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (key: SortKey) => {
    onSortKeyChange(key);
    setOpen(false);
  };

  const selectedLabel =
    sortKey === "price"
      ? "価格順"
      : sortKey === "name"
        ? "名前順"
        : sortKey === "none" && "並び替え";

  return (
    <div className="relative inline-block text-left" ref={wrapperRef}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center w-32 justify-center py-2.5 border border-gray-300 bg-white shadow-sm text-sm font-medium hover:bg-gray-50"
      >
        {sortKey === "none" && (
          <IconMenuDeep size={18} className="mr-1 mt-0.5" />
        )}
        {selectedLabel}
      </button>

      {open && (
        <ul className="absolute mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-10">
          <li
            onClick={() => handleSelect("none")}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
          >
            指定なし
          </li>
          <li
            onClick={() => handleSelect("price")}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
          >
            価格順
          </li>
          <li
            onClick={() => handleSelect("name")}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
          >
            名前順
          </li>
        </ul>
      )}
    </div>
  );
}
