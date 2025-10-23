import { useState, useImperativeHandle, forwardRef } from "react";
import Input from "../components/common/ui/input";

export type PaymentHandle = {
  validatePayment: () => boolean;
  getPaymentData: () => {
    creditName: string;
    creditEmail: string;
    cardNumber: string;
    expiry: string;
    cvv: string;
  };
};

const PaymentPage = forwardRef<PaymentHandle>((props, ref) => {
  const [creditName, setCreditName] = useState("");
  const [creditEmail, setCreditEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const [errors, setErrors] = useState({
    creditName: "",
    creditEmail: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const validatePayment = () => {
    const newErrors = {
      creditName: "",
      creditEmail: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    };

    if (!creditName) newErrors.creditName = "カード名義人を入力してください";
    if (!creditEmail)
      newErrors.creditEmail = "メールアドレスを入力してください";
    if (!cardNumber) newErrors.cardNumber = "カード番号を入力してください";
    else if (!/^\d{16}$/.test(cardNumber.replace(/\s+/g, "")))
      newErrors.cardNumber = "カード番号は16桁の数字で入力してください";

    if (!expiry) newErrors.expiry = "有効期限を入力してください";
    else if (!/^\d{2}\/\d{2}$/.test(expiry))
      newErrors.expiry = "有効期限はMM/YY形式で入力してください";

    if (!cvv) newErrors.cvv = "CVVを入力してください";
    else if (!/^\d{3,4}$/.test(cvv))
      newErrors.cvv = "CVVは3〜4桁の数字で入力してください";

    setErrors(newErrors);

    return !Object.values(newErrors).some((msg) => msg !== "");
  };

  // 🔹 支払い情報を返す関数
  const getPaymentData = () => ({
    creditName,
    creditEmail,
    cardNumber,
    expiry,
    cvv,
  });

  // 🔹 ref経由で親がアクセスできるように公開
  useImperativeHandle(ref, () => ({
    validatePayment,
    getPaymentData,
  }));

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 16);

    const formatted = value.replace(/(.{4})/g, "$1 ").trim();
    setCardNumber(formatted);
  };

  // 🔹 有効期限（MM/YY）自動フォーマット
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }

    if (value.length > 5) {
      value = value.slice(0, 5);
    }

    setExpiry(value);
  };

  return (
    <div>
      <h3 className="p-3 font-bold border-b text-[17.5px] text-left border-gray-300">
        お支払い情報
      </h3>

      <div className="mx-auto text-left flex flex-col gap-5 mt-8 text-[16.5px]">
        <Input
          label="カード名義人"
          idName="creditName"
          value={creditName}
          placeholder="TARO ANAKA"
          onChange={(e) => setCreditName(e.target.value)}
          error={errors.creditName}
        />

        <Input
          label="メールアドレス"
          idName="creditEmail"
          value={creditEmail}
          placeholder="sample1234@lumiere.com"
          onChange={(e) => setCreditEmail(e.target.value)}
          error={errors.creditEmail}
        />

        <Input
          label="カード番号"
          idName="cardNumber"
          value={cardNumber}
          placeholder="1234 5678 9012 3456"
          onChange={handleCardNumberChange}
          error={errors.cardNumber}
        />

        <div className="flex gap-3.5">
          <Input
            label="有効期限 (MM/YY)"
            idName="expiry"
            value={expiry}
            placeholder="MM/YY"
            onChange={handleExpiryChange}
            error={errors.expiry}
            width="w-48"
          />
          <div>
            <Input
              label="CVV"
              idName="cvv"
              value={cvv}
              placeholder="123"
              onChange={(e) => setCvv(e.target.value)}
              width="w-28"
            />
            {errors && (
              <p className="text-sm text-red-450 mt-3">{errors.cvv}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default PaymentPage;
