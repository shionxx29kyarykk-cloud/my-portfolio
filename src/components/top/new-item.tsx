import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  ];

  return (
    <div className="p-5 pt-7 pb-20  ">
      <ul className="flex flex-wrap justify-center gap-4 mt-8 relative">
        {categories.map((category) => (
          <li key={category.id} className="flex flex-col items-start">
            <a href="#" className="hover:opacity-90">
              {category.id === 1 ? (
                <div className="flex items-center relative gap-16">
                  <p className="font-bold font-onest text-[26px] mb-8">
                    NEW ITEM
                  </p>
                  <p className="text-base font-bold mb-8 absolute left-52 w-12">
                    新商品
                  </p>
                </div>
              ) : (
                <div className="h-[34px] mb-9" />
              )}
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
    </div>
  );
}
