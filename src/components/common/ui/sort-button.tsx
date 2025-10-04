import React from 'react';

type SortKey = 'price' | 'name';
type SortOrder = 'asc' | 'desc';

interface SortControlsProps {
  sortKey: SortKey;
  sortOrder: SortOrder;
  onSortKeyChange: (key: SortKey) => void;
  onSortOrderChange: (order: SortOrder) => void;
}

export default function SortControls({
  sortKey,
  sortOrder,
  onSortKeyChange,
  onSortOrderChange,
}: SortControlsProps) {
  return (
    <div className="flex gap-4 items-center mb-4">
      <select
        value={sortKey}
        onChange={(e) => onSortKeyChange(e.target.value as SortKey)}
 className="appearance-none bg-white border-1.5 border-gray-300 px-8 py-2 "
       >
        <option hidden value="price">並び替え</option>
        <option value="name">名前</option>
        <option value="name">名前</option>
        <option value="name">名前</option>
      </select>
    </div>
  );
}