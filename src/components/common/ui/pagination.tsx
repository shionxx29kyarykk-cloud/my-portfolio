import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const itemsPerPage = 20;

type Item = {
  name: string;
};

export default function Pagination({
  items,
  onRangeChange,
}: {
  items: Item[];
  onRangeChange?: (range: { start: number; end: number }) => void;
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    onRangeChange?.({
      start: startIndex,
      end: Math.min(startIndex + itemsPerPage, items.length),
    });
  }, [startIndex, items.length, onRangeChange]);

  return (
    <div>
      <div className="flex justify-center gap-1 mt-4 items-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`w-12 h-12 rounded-full flex items-center font-bold justify-center 
        ${currentPage === 1 ? "text-white" : "text-gray-450"}
        `}
        >
          <IconChevronLeft />
        </button>

        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-12 h-12 rounded-full flex font-bold items-center justify-center 
        ${currentPage === index + 1 ? "bg-gray-100" : "bg-white"}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`w-10 h-10 rounded-full flex items-center justify-center 
      ${currentPage === totalPages ? "text-white" : "text-gray-450"}
    `}
        >
          <IconChevronRight />
        </button>
      </div>
    </div>
  );
}
