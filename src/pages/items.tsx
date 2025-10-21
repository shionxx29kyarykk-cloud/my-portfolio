import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PaginatedList from "../components/common/ui/pagination";
import SortControls from "../components/common/ui/sort-button";
import Pagination from "../components/common/ui/pagination";
import LikeButton from "../components/common/ui/like-button";
import { itemLists, ItemList } from "../assets/data/items";
import NewBadge from "../components/common/ui/new-badge";

export default function Items() {
  const [likedItems, setLikedItems] = useState<{ [id: number]: boolean }>({});
  const toggleLike = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const [sortKey, setSortKey] = useState<"price" | "name" | "none">("none");

  const items = [...Array(65)].map((_, i) => ({ name: "" }));
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 0 });

  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  return (
    <div className="p-5 pt-7 pb-20 w-[80%] mx-auto">
      <h1 className="font-bold text-[26px] mb-6 text-center mt-5">
        {selectedCategory ? (
          <p className="text-center text-gray-500 mb-4">{selectedCategory}</p>
        ) : (
          <p className="text-center text-gray-500 mb-4">新商品</p>
        )}
      </h1>
      <div className="flex items-center justify-between w-[90%] mx-auto">
        <p className="text-center my-4 fon text-sm text-gray-450">
          {items.length} 件中
          {visibleRange.start + 1}〜{visibleRange.end} 件目 表示
        </p>
        <SortControls sortKey={sortKey} onSortKeyChange={setSortKey} />
      </div>
      <ul className="flex flex-wrap justify-center gap-4 relative">
        {itemLists.map((itemList) => (
          <li key={itemList.id} className="flex flex-col items-start mt-8 mb-6">
            <Link to={`/item-detail/${itemList.id}`}>
              <div className="relative w-52 mb-4">
                <img src={itemList.src} alt={`pick-up ${itemList.id + 1}`} />
                {itemList.isNew && (
                  <NewBadge
                    text="NEW"
                    color="red"
                    className="absolute top-2 left-2"
                  />
                )}
              </div>
              <p className="text-sm font-bold w-52">{itemList.label}</p>
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
      <div className="p-8">
        <Pagination items={items} onRangeChange={setVisibleRange} />
      </div>
    </div>
  );
}
