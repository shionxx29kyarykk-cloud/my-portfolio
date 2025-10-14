import { useState } from "react";
import {
  IconChevronLeft,
  IconChevronRight,
  IconHeart,
  IconHeartFilled,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Pagination from "../components/common/ui/pagination";
import SortControls from "../components/common/ui/sort-button";
import SpinButton from "../components/common/ui/spin-button";
import LikeButton from "../components/common/ui/like-button";
import Category from "../components/top/category";
import NewItem from "../components/top/new-item";
import Badge from "../components/common/ui/badge";
import RelatedItem from "../components/top/related-item";
import PickUp from "../components/top/pick-up";

const colors = [
  { name: "ブルー", value: "#5CAEC7" },
  { name: "イエロー", value: "#F7BA41" },
];

const sizes = [
  { name: "120×180cm", value: "1" },
  { name: "140×200cm", value: "2" },
];

export default function ItemDetail() {
  const [likedItems, setLikedItems] = useState<{ [id: number]: boolean }>({});
  const [selectedColor, setSelectedColor] = useState(colors[0].value);
  const [selectedSize, setSelectedSize] = useState(sizes[0].value);
  const [quantity, setQuantity] = useState(1);

  const toggleLike = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
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
      label: "Mysa（ミーサ）ウールラグ",
      price: "¥124,800（税込）",
    },
    {
      id: 3,
      src: "public/componets/common/new-item/NEW3.png",
      label: "Mysa（ミーサ）ウールラグ",
      price: "¥22,900（税込）",
    },
    {
      id: 4,
      src: "public/componets/common/new-item/NEW4.png",
      label: "Mysa（ミーサ）ウールラグ",
      price: "¥19,800（税込）",
    },
  ];

  const handleAddToCart = () => {
    const cartItem = {
      productId: product.id,
      name: product.label,
      price: product.price,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
    };
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((idx) => (idx === 0 ? categories.length - 1 : idx - 1));
  };

  const next = () => {
    setCurrentIndex((idx) => (idx === categories.length - 1 ? 0 : idx + 1));
  };

  const product = categories[currentIndex];

  return (
    <div className="pt-14 w-full mx-auto">
      <ul className="flex flex-wrap justify-center gap-10 relative">
        <li>
          <div className="relative w-[340px] mx-auto mb-4">
            <button
              onClick={prev}
              className="absolute left-[-2.5rem] top-1/2 transform -translate-y-1/2 z-10 p-1"
            >
              <IconChevronLeft size={28} />
            </button>

            <img
              src={product.src}
              alt="商品詳細"
              className="w-full object-cover"
            />

            <button
              onClick={next}
              className="absolute right-[-2.5rem] top-1/2 transform -translate-y-1/2 z-10 p-1"
            >
              <IconChevronRight size={28} />
            </button>
          </div>
          <div className="flex w-[24.5rem] mx-auto gap-2 justify-center">
            {categories.slice(0, 4).map((category, index) => (
              <img
                key={index}
                src={category.src}
                alt={`サムネイル${index + 1}`}
                className={`w-1/5 object-cover cursor-pointer transition hover:opacity-90
      ${currentIndex === index ? "border-2 border-blue-400" : "border"}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </li>
        <div className="flex justify-between flex-col mb-3 mt-2">
          <li className="w-72 flex flex-col gap-6">
            <div className="flex gap-2 flex-col">
              <Badge text={"NEW"} color="red" />
              <h1 className="font-bold text-xl">{product.label}</h1>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                商品コード：<p className="text-gray-450">P123457890</p>
              </div>
              <div className="flex">
                カラー：
                <p className="text-gray-450">
                  {colors.find((c) => c.value === selectedColor)?.name}
                </p>
              </div>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-8 h-8 rounded-full transition 
                    ${selectedColor === color.value ? "ring-1 ring-gray-420" : "ring-1 ring-gray-300"}`}
                    style={{ backgroundColor: color.value }}
                    aria-label={color.name}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex gap-2">
                  サイズ：
                  <p className="text-gray-450">
                    {sizes.find((s) => s.value === selectedSize)?.name}
                  </p>
                </div>
                <div className="mb-2 flex gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size.value}
                      onClick={() => setSelectedSize(size.value)}
                      className={`px-4 h-8  transition 
                    ${selectedSize === size.value ? "ring-1 ring-gray-420" : "ring-1 ring-gray-300"}`}
                      style={{ backgroundColor: size.value }}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </li>
          <li className="flex flex-col gap-5">
            <div className="flex items-center mt-6 justify-between">
              <SpinButton
                min={1}
                max={10}
                initial={2}
                onChange={(val) => console.log("数量:", val)}
              />
              <div className="flex items-end gap-1.5">
                <p className="text-[1.4rem] font-bold">¥68,000</p>
                <p className="text-sm font-bold pb-1">(税込)</p>
              </div>
            </div>
            <div className="gap-3 flex items-center">
              <button
                onClick={handleAddToCart}
                className="w-full md:w-60 bg-blue-400 hover:opacity-90 text-white py-2.5 text-[1.1rem] px-6 rounded transition"
              >
                カートに入れる
              </button>
              <LikeButton
                likedItems={likedItems}
                toggleLike={toggleLike}
                itemId={product.id}
                size={"35"}
              />
            </div>
          </li>
        </div>
      </ul>
      <RelatedItem />
      <PickUp />
    </div>
  );
}
