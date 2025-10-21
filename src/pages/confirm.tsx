import { useLocation, useNavigate } from "react-router-dom";
import MainButton from "../components/common/ui/main-butto";
import SubButton from "../components/common/ui/sub-button";
import { Orderer, CartItem } from "../assets/data/order";

export default function Confirm() {
  const navigate = useNavigate();
  const location = useLocation();

  if (!location.state) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold mb-4 text-red-500">
          エラー：注文情報が見つかりません
        </h2>
        <p>もう一度最初からご注文をやり直してください。</p>
        <MainButton to="/" className="mt-6 text-[17px] py-3.5 px-6">
          トップページへ戻る
        </MainButton>
      </div>
    );
  }

  const { orderer, recipient, cartItems } = location.state as {
    orderer: Orderer;
    recipient: Orderer | null;
    cartItems: CartItem[];
  };

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  return (
    <div className="pt-7 w-[65%] mx-auto">
      <h1 className="font-bold text-[26px] mb-9 text-center mt-5">
        注文情報確認
      </h1>
      <h3 className="p-3 font-bold border-b text-[17.5px] border-gray-300">
        ご注文情報
      </h3>
      <div className="flex gap-8 flex-col mt-2 text-[16.5px] p-3">
        <div className="flex flex-col gap-2">
          <p>メールアドレス</p> <p className="text-gray-500">{orderer.email}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>氏名</p> <p className="text-gray-500">{orderer.name}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>フリガナ</p> <p className="text-gray-500">{orderer.nameKana}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>郵便番号</p> <p className="text-gray-500">{orderer.postCode}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>住所1</p> <p className="text-gray-500">{orderer.address1}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>住所2</p> <p className="text-gray-500">{orderer.address2}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>住所3</p> <p className="text-gray-500">{orderer.address3}</p>
        </div>

        {recipient && (
          <>
            <h3 className="py-3 font-bold border-b text-[17.5px] border-gray-300">
              お届け先情報
            </h3>
            <div className="flex flex-col gap-2">
              <p>メールアドレス</p>
              <p className="text-gray-500">{recipient.email}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>お届け先氏名</p>
              <p className="text-gray-500">{recipient.name}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>フリガナ</p>
              <p className="text-gray-500">{recipient.nameKana}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>郵便番号</p>
              <p className="text-gray-500">{recipient.postCode}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>住所1</p> <p className="text-gray-500">{recipient.address1}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>住所2</p> <p className="text-gray-500">{recipient.address2}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>住所3</p> <p className="text-gray-500">{recipient.address3}</p>
            </div>
          </>
        )}
      </div>

      <table className="w-full border-collapse mt-10 text-left">
        <thead>
          <tr className="text-[17.5px]">
            <th className="p-3">ご注文内容</th>
            <th className="p-3 w-96"></th>
            <th className="p-3 w-48"></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="border-t border-gray-300 border-b">
              <td className="w-40">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover"
                />
              </td>
              <td className="flex gap-1 flex-col my-2.5">
                <p className="font-bold text-[17.5px]">{item.name}</p>
                <div className="text-gray-500">{item.color}</div>
                <div className="text-gray-500">{item.size}</div>
                <div className="font text-[18px]">
                  ¥{item.price.toLocaleString()}（税込）
                </div>
              </td>
              <td className="pb-5 align-bottom">
                <div className="flex items-end h-full text-[18px] font-medium pl-3">
                  {item.quantity} 点
                </div>
              </td>
              <td className="pb-5 align-bottom font-bold">
                <div className="flex items-end text-[20px] h-full">
                  ¥{(item.price * item.quantity).toLocaleString()}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-right mt-14 mb-16 gap-12 flex flex-col">
        <div className="flex justify-end gap-4 font-bold items-end">
          <p className="text-xl">合計：</p>
          <p className="text-[22.5px]">¥{getTotal().toLocaleString()}</p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <MainButton to="/complete" className="text-[17px] py-3.5 px-6">
            注文を確定する
          </MainButton>
          <SubButton
            to={{
              pathname: "/order",
              state: {
                info: orderer,
                recipientInfo: recipient,
                isChecked: recipient === null,
              },
            }}
            className="text-[17px] py-3.5 px-6"
          >
            注文情報を修正する
          </SubButton>
        </div>
      </div>
    </div>
  );
}
