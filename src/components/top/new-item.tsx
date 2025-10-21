import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import LikeButton from "../common/ui/like-button";
import { itemLists } from "../../assets/data/items";

export default function NewItem() {
  const [likedItems, setLikedItems] = useState<{ [id: number]: boolean }>({});
  const toggleLike = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="p-5 pt-7 pb-20  ">
      <ul className="flex flex-wrap justify-center gap-4 mt-8 relative">
        {itemLists
          .filter((item) => item.id >= 1 && item.id <= 4)
          .map((itemList) => (
            <li key={itemList.id} className="flex flex-col items-start">
              <Link
                // to={`/items?new=${encodeURIComponent("新商品")}`}
                to={`/item-detail/${itemList.id}`}
                className="hover:opacity-90"
              >
                {itemList.id === 1 ? (
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
                  src={itemList.src}
                  alt={`pick-up ${itemList.id + 1}`}
                  className="w-52 mb-4"
                />
                <p className="text-sm font-bold">{itemList.label}</p>
                <div className="flex items-center mt-1.5 justify-between ">
                  <p className="text-sm text-gray-500">
                    ¥{itemList.price.toLocaleString()}（税込）
                  </p>
                  <LikeButton
                    likedItems={likedItems}
                    toggleLike={toggleLike}
                    itemId={itemList.id}
                  />
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
