import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PaginatedList from "../components/common/ui/pagination";
import SortControls from "../components/common/ui/sort-button";

const dummyItems = Array.from({ length: 20 }, (_, i) => ({
  name: ``,
}));

export default function NewItem() {
  const [likedItems, setLikedItems] = useState<{ [id: number]: boolean }>({});
  const toggleLike = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // 現在の状態を反転
    }));
  };

  const categories = [
    {
      id: 1,
      src: "public/componets/common/new-item/NEW.png",
      label: "Mysa（ミーサ）ウールラグ",
      price: "¥68,000（税込）",
    },
    {
      id: 2,
      src: "public/componets/common/new-item/NEW2.png",
      label: "Sova（ソーヴァ）ベッド",
      price: "¥124,800（税込）",
    },
    {
      id: 3,
      src: "public/componets/common/new-item/NEW3.png",
      label: "Bordet（ボルデット）テーブル",
      price: "¥22,900（税込）",
    },
    {
      id: 4,
      src: "public/componets/common/new-item/NEW4.png",
      label: "Lumo（ルモ）チェア",
      price: "¥19,800（税込）",
    },
    {
      id: 5,
      src: "public/componets/common/new-item/NEW.png",
      label: "Mysa（ミーサ）ウールラグ",
      price: "¥68,000（税込）",
    },
    {
      id: 6,
      src: "public/componets/common/new-item/NEW2.png",
      label: "Sova（ソーヴァ）ベッド",
      price: "¥124,800（税込）",
    },
    {
      id: 7,
      src: "public/componets/common/new-item/NEW3.png",
      label: "Bordet（ボルデット）テーブル",
      price: "¥22,900（税込）",
    },
    {
      id: 8,
      src: "public/componets/common/new-item/NEW4.png",
      label: "Lumo（ルモ）チェア",
      price: "¥19,800（税込）",
    },
    {
      id: 9,
      src: "public/componets/common/new-item/NEW.png",
      label: "Mysa（ミーサ）ウールラグ",
      price: "¥68,000（税込）",
    },
    {
      id: 10,
      src: "public/componets/common/new-item/NEW2.png",
      label: "Sova（ソーヴァ）ベッド",
      price: "¥124,800（税込）",
    },
    {
      id: 11,
      src: "public/componets/common/new-item/NEW3.png",
      label: "Bordet（ボルデット）テーブル",
      price: "¥22,900（税込）",
    },
    {
      id: 12,
      src: "public/componets/common/new-item/NEW4.png",
      label: "Lumo（ルモ）チェア",
      price: "¥19,800（税込）",
    },
  ];

 const [sortKey, setSortKey] = useState<'price' | 'name'>('price');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  return (
    <div className="p-5 pt-7 pb-20 w-[80%] mx-auto ">
      <h1 className="font-bold text-[26px] mb-6 text-center mt-5">
        ラグ・カーペット
      </h1>
      <div>
      <SortControls
        sortKey={sortKey}
        sortOrder={sortOrder}
        onSortKeyChange={setSortKey}
        onSortOrderChange={setSortOrder}
      />
    </div>
      <ul className="flex flex-wrap justify-center gap-4 relative">
        {categories.map((category) => (
          <li key={category.id} className="flex flex-col items-start mt-14">
            <a href="#" className="hover:opacity-90">
              <img
                src={category.src}
                alt={`pick-up ${category.id + 1}`}
                className="w-52 mb-4"
              />
              <p className="text-sm font-bold">{category.label}</p>
              <div className="flex items-center mt-1.5 justify-between ">
                <p className="text-sm text-gray-500">{category.price}</p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleLike(e, category.id);
                  }}
                >
                  {likedItems[category.id] ? (
                    <IconHeartFilled
                      size={26}
                      stroke={1.5}
                      className="text-red-500"
                    />
                  ) : (
                    <IconHeart
                      size={26}
                      stroke={1.5}
                      className="text-gray-400"
                    />
                  )}
                </button>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <div className="p-8">
        <PaginatedList items={dummyItems} />
      </div>
    </div>
  );
}
