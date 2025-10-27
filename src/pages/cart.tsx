import { IconTrash } from "@tabler/icons-react";
import SpinButton from "../components/common/ui/spin-button";
import MainButton from "../components/common/ui/main-butto";
import SubButton from "../components/common/ui/sub-button";
import RelatedItem from "../components/top/related-item";
import { Link } from "react-router-dom";
import { itemLists } from "../assets/data/items";


interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
  image: string;
}

interface CartProps {
  cartItems: CartItem[];
  onQuantityChange: (id: number, newQuantity: number) => void;
  onRemove: (id: number) => void;
}

export default function Cart({
  cartItems,
  onQuantityChange,
  onRemove,
}: CartProps) {
  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div className="pt-7 w-[70%] lg:w-[50%] mx-auto">
        <h1 className="font-bold text-[26px] mb-9 text-center mt-5">カート</h1>
        {cartItems.length > 0 ? (
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="text-[17px]">
                <th className="p-3">商品</th>
                <th className="p-3 w-96 lg:w-[35rem]"></th>
                <th className="p-3 w-48">数量</th>
                <th className="p-3 w-26 lg:w-20">小計</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-t border-gray-300 border-b">
                  <td className="w-40">
                    <Link to={`/item-detail/${item.id}`} className="hover:opacity-90">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-28 h-28 object-cover"
                      />
                    </Link>
                  </td>
                  <td className="flex gap-1 flex-col my-2.5">
                    <Link
                      to={`/item-detail/${item.id}`} 
                      className="hover:underline font-bold text-[17.5px]"
                    >
                      {item.name}
                    </Link>
                    <div className="text-gray-500">{item.color}</div>
                    <div className="text-gray-500">{item.size}</div>
                    <div className="font text-[18px]">
                      ¥{item.price.toLocaleString()}（税込）
                    </div>
                  </td>
                  <td className="pb-5 align-bottom">
                    <div className="flex items-end h-full">
                      <SpinButton
                        min={1}
                        max={10}
                        initial={item.quantity}
                        onChange={(val) => onQuantityChange(item.id, val)}
                        inputSize="text-[17.5px] h-9 px-6"
                        buttonSize="w-9 h-9 text-[17.5px]"
                      />
                    </div>
                  </td>
                  <td className="pb-5 align-bottom font-bold">
                    <div className="flex items-end text-[20px] h-full">
                      ¥{(item.price * item.quantity).toLocaleString()}
                    </div>
                  </td>
                  <td className="pb-5 align-bottom">
                    <div className="flex items-end h-full">
                      <button
                        onClick={() => onRemove(item.id)}
                        className="text-gray-400 pl-1 hover:text-gray-500"
                      >
                        <IconTrash size={25} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center mt-12">カートに商品はありません</p>
        )}
        <div className="text-right mt-12 gap-12 flex flex-col items-end">
          {cartItems.length > 0 && (
            <div className="flex justify-end gap-4 font-bold items-baseline">
              <p className="text-xl">合計：</p>
              <p className="text-[22.5px]">¥{getTotal().toLocaleString()}</p>
            </div>
          )}
          <div className="flex flex-col gap-3">
            {cartItems.length > 0 && (
              <MainButton to="/order" className="text-[17px] py-3.5 px-6">
                購入手続きへ進む
              </MainButton>
            )}
            <SubButton to="/items" className="text-[17px] py-3.5 px-6">
              ショッピングを続ける
            </SubButton>
          </div>
        </div>
      </div>
      <RelatedItem title="RECOMMEND" subTitle="おすすめ" />
    </>
  );
}
