import { useState } from "react";

interface Orderer {
  email: string;
  name: string;
  nameKana: string;
  address1: string;
  address2: string;
  address3?: string;
  postCode: string;
}

export default function AddressInput({
  info,
  setInfo,
}: {
  info: Orderer;
  setInfo: (info: Orderer) => void;
}) {
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const fetchAddress = async (zip: string) => {
    const cleanedZip = zip.replace("-", "");
    if (cleanedZip.length !== 7) return;

    try {
      const res = await fetch(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${cleanedZip}`,
      );
      const data = await res.json();

      if (data.results) {
        const result = data.results[0];
        const fullAddress = `${result.address1}${result.address2}${result.address3}`;
        setAddress(fullAddress);
        setInfo({ ...info, address1: fullAddress });
        setError("");
      } else {
        setAddress("");
        setError("該当する住所が見つかりませんでした");
      }
    } catch {
      setError("住所の取得に失敗しました");
    }
  };

  const handlePostcodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let zip = e.target.value.replace(/[^\d]/g, "");
    if (zip.length > 3) {
      zip = zip.slice(0, 3) + "-" + zip.slice(3, 7);
    }

    const cleanZip = zip.replace("-", "");

    setInfo({ ...info, postCode: zip });

    if (cleanZip.length === 7) {
      fetchAddress(cleanZip);
    }
  };

  const formattedPostCode = info.postCode.replace(/^(\d{3})(\d{4})$/, "$1-$2");

  return (
    <div className="flex flex-col mt-2 gap-5 w-[300px]">
      <div className="flex flex-col gap-2">
        <label htmlFor="postCode" className="text-[16px]">
          郵便番号 <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center gap-1">
          <p>〒</p>
          <input
            id="postCode"
            type="text"
            value={formattedPostCode}
            onChange={handlePostcodeChange}
            placeholder="123-4567"
            maxLength={8}
            className="border border-gray-300 w-[50%] placeholder-gray-300 rounded px-2 py-1"
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex flex-col gap-2">
        <label htmlFor="address1" className="text-[16px]">
          住所 <span className="text-red-500">*</span>
        </label>
        <input
          id="address1"
          type="text"
          value={info.address1}
          onChange={(e) => setInfo({ ...info, address1: e.target.value })}
          className="border border-gray-300 rounded px-2 py-1 placeholder-gray-300 bg-gray-100"
          placeholder="大阪府大阪市北区"
        />
      </div>
    </div>
  );
}
