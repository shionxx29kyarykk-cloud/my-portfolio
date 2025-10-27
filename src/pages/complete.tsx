import MainButton from "../components/common/ui/main-butto";

export default function Complete() {
  return (
    <div className="flex flex-col items-center mb-12 w-[50%] mx-auto">
      <h1 className="font-bold text-[26px] text-center mt-12 mb-4">
        THANK YOU!!
      </h1>
      <img
        src="/my-portfolio/components/common/complete/完了.png"
        alt="完了"
        className="w-40 mb-4"
      />
      <h3 className="p-3 font-bold text-[17.5px]">
        注文内容が確定されました！
      </h3>
      <div className="flex flex-col gap-4 mt-2 items-center">
        <p className="text-center">
          ご注文番号は SO123456789 です。
          <br />
          ご注文の確認メールをお送りしましたので、ご確認ください。
        </p>
        <p className="text-[14px] text-gray-500 mb-6">
          ※数分経っても届かない場合はショップにお問い合わせください。
        </p>
      </div>
      <MainButton to="/items">ショッピングを続ける</MainButton>
    </div>
  );
}
