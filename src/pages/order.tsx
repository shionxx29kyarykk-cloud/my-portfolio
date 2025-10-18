import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import OrderInput from "../components/common/ui/order-input";

interface Orderer {
  email: string;
  name: string;
  nameKana: string;
  postCode: string;
  address1: string;
  address2: string;
  address3?: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
  image: string;
}

export default function Order({
  cartItems,
  info,
  setInfo,
}: {
  info: Orderer;
  setInfo: (val: Orderer) => void;
  cartItems: CartItem[];
}) {
  const [isChecked, setIsChecked] = useState(true);
  const navigate = useNavigate();

  const [recipientInfo, setRecipientInfo] = useState<Orderer>({
    email: "",
    name: "",
    nameKana: "",
    postCode: "",
    address1: "",
    address2: "",
    address3: "",
  });

  const handleConfirm = () => {
    navigate("/confirm", {
      state: {
        orderer: info,
        recipient: isChecked ? null : recipientInfo,
        cartItems: cartItems,
      },
    });
  };

  return (
    <>
      <div className="pt-7 w-[65%] mx-auto">
        <h1 className="font-bold text-[26px] mb-9 text-center mt-5">
          注文情報入力
        </h1>
        <h3 className="p-3 font-bold border-b text-[17.5px] border-gray-300">
          ご注文情報
        </h3>
        <div className="border-b border-gray-300 pb-10">
          <OrderInput info={info} setInfo={setInfo} isAddressSame />
        </div>
        <p className="font-bold p-3 mt-3">お届け先</p>
        <div className="flex items-center gap-1.5 pl-3">
          <label className="flex items-center gap-2 text-[16px] cursor-pointer select-none hover:cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="w-5 h-5 border border-gray-300 rounded checked:bg-blue-400 checked:border-blue-400"
            />
            <span>ご注文者情報の住所と同じ</span>
          </label>
        </div>
        {isChecked === false && (
          <div className="border-b mt-2 border-gray-300 pb-10">
            <OrderInput info={recipientInfo} setInfo={setRecipientInfo} />
          </div>
        )}

        <div className="text-right mt-14 mb-16 gap-12 flex flex-col">
          <div className="flex flex-col items-center">
            <button
              onClick={handleConfirm}
              className={`w-full md:w-72 text-[17px] py-3.5 px-6  bg-blue-400 hover:opacity-90 text-white font-bold rounded transition text-center`}
            >
              確認画面へ進む
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
