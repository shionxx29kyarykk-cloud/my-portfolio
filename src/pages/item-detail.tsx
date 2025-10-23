import { useEffect, useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import SpinButton from "../components/common/ui/spin-button";
import LikeButton from "../components/common/ui/like-button";
import RelatedItem from "../components/top/related-item";
import PickUp from "../components/top/pick-up";
import MainButton from "../components/common/ui/main-butto";
import { useNavigate, useParams } from "react-router-dom";
import { itemLists } from "../assets/data/items";
import NewBadge from "../components/common/ui/new-badge";

const colors = [
  { name: "ブルー", value: "#5CAEC7" },
  { name: "イエロー", value: "#F7BA41" },
];

const sizes = [
  { name: "120×180cm", value: "1" },
  { name: "140×200cm", value: "2" },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
  image: string;
}

interface ItemDetailProps {
  onAddToCart: (item: CartItem) => void;
}
export default function ItemDetail({ onAddToCart }: ItemDetailProps) {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const newIndex = itemLists.findIndex((item) => item.id === Number(id));
    if (newIndex !== -1) {
      setCurrentIndex(newIndex);
    }
  }, [id]);

  const product = itemLists.find((p) => p.id === Number(id));
  if (!product) {
    return <p>商品が見つかりません</p>;
  }
  const [imageIndex, setImageIndex] = useState(0);

  const [likedItems, setLikedItems] = useState<{ [id: number]: boolean }>({});
  const [selectedColor, setSelectedColor] = useState(colors[0].value);
  const [selectedSize, setSelectedSize] = useState(sizes[0].value);

  const toggleLike = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const initialIndex = itemLists.findIndex((item) => item.id === Number(id));

  const [currentIndex, setCurrentIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0,
  );

  const prev = () => {
    setImageIndex((idx) =>
      idx === 0 ? (itemList.images?.length || 1) - 1 : idx - 1,
    );
  };

  const next = () => {
    setImageIndex((idx) =>
      idx === (itemList.images?.length || 1) - 1 ? 0 : idx + 1,
    );
  };

  const [quantity, setQuantity] = useState(1);

  const itemList = itemLists[currentIndex];

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: itemList.id,
      name: itemList.label,
      price: itemList.price,
      quantity: quantity,
      color: colors.find((c) => c.value === selectedColor)?.name || "ー",
      size: sizes.find((s) => s.value === selectedSize)?.name || "ー",
      image: itemList.src,
    };

    onAddToCart(cartItem);
    navigate("/cart");
  };

  const mainImage = itemList.images?.[imageIndex] || itemList.src;

  return (
    <div className="pt-14 w-full mx-auto">
      <ul className="flex flex-wrap justify-center gap-12 relative">
        <li>
          <div className="relative w-[340px] mx-auto mb-4">
            <button
              onClick={prev}
              className="absolute left-[-2.5rem] top-1/2 transform -translate-y-1/2 z-10 p-1"
            >
              <IconChevronLeft size={28} />
            </button>

            <img
              src={mainImage}
              alt="商品詳細"
              className="w-[500px] object-cover"
            />

            <button
              onClick={next}
              className="absolute right-[-2.5rem] top-1/2 transform -translate-y-1/2 z-10 p-1"
            >
              <IconChevronRight size={28} />
            </button>
          </div>
          <div className="flex w-[24.5rem] mx-auto gap-2 justify-center">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`サムネイル${index + 1}`}
                className={`w-1/5 object-cover cursor-pointer transition hover:opacity-90 
        ${imageIndex === index ? "border-2 border-blue-400" : "border"}`}
                onClick={() => setImageIndex(index)}
              />
            ))}
          </div>
        </li>
        <div className="flex justify-between flex-col mb-3 mt-2">
          <li className="w-80 flex flex-col gap-6">
            <div className="flex gap-2 flex-col">
              {itemList.isNew && <NewBadge text={"NEW"} color="red" />}
              <h1 className="font-bold text-xl">{itemList.label}</h1>
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
                initial={1}
                onChange={(val) => setQuantity(val)}
              />
              <div className="flex items-end gap-1.5">
                <p className="text-[1.4rem] font-bold">¥68,000</p>
                <p className="text-sm font-bold pb-1">(税込)</p>
              </div>
            </div>
            <div className="gap-3 flex items-center">
              <MainButton to="/cart" onClick={handleAddToCart}>
                カートに入れる
              </MainButton>
              <LikeButton
                likedItems={likedItems}
                toggleLike={toggleLike}
                itemId={itemList.id}
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
