import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function RelatedItem() {
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
    <div className="p-5 pt-7 pb-20 w-[80%] mx-auto">
      <div className="border-b border-gray-300 mt-12" />
      <ul className="flex flex-wrap justify-center gap-4 mt-10 relative">
        {categories.map((category) => (
          <li key={category.id} className="flex flex-col items-start">
            <a href="/item-detail" className="hover:opacity-90">
              {category.id === 1 ? (
                <div className="flex items-center relative gap-16">
                  <p className="font-bold font-onest text-[25px] mb-8">
                    RELATED ITEM
                  </p>
                  <p className="text-base font-bold ml-4 mb-8 absolute left-52 w-16">
                    関連商品
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
              <p className="text-sm mt-1.5 text-gray-500">{category.price}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
