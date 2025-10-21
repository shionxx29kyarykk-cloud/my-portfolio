import AddressInput from "./address-input";
import Input from "./input";
import { Orderer } from "../../../assets/data/order";

interface OrderInputProps {
  info: Orderer;
  setInfo: (info: Orderer) => void;
  isAddressSame?: boolean;
  errors?: { [key: string]: string };
}

export default function OrderInput({
  info,
  setInfo,
  isAddressSame = false,
  errors = {},
}: OrderInputProps) {
  return (
    <div className="flex flex-col gap-3 p-3">
      <Input
        label="メールアドレス"
        idName="email"
        value={info.email}
        placeholder="sample1234@lumiere.com"
        onChange={(e) => setInfo({ ...info, email: e.target.value })}
        isRequired
        error={errors.email}
      />
      <Input
        label={`${!isAddressSame ? "お届け先" : ""}氏名`}
        idName="name"
        value={info.name}
        placeholder="田中　太郎"
        onChange={(e) => setInfo({ ...info, name: e.target.value })}
        isRequired
        error={errors.name}
      />
      <Input
        label="フリガナ"
        idName="nameKana"
        value={info.nameKana}
        placeholder="タナカ　タロウ"
        onChange={(e) => setInfo({ ...info, nameKana: e.target.value })}
        isRequired
        error={errors.nameKana}
      />
      <AddressInput
        info={info}
        setInfo={setInfo}
        errors={{
          postCode: errors.postCode,
          address1: errors.address1,
        }}
      />
      <Input
        label="丁目・番地"
        idName="address2"
        isRequired
        error={errors.address2}
        value={info.address2}
        width="w-[60%]"
        onChange={(e) => setInfo({ ...info, address2: e.target.value })}
        placeholder={"1丁目5番1号"}
      />
      <Input
        label="ビル・マンション・部屋番号"
        idName="address3"
        width="w-[60%]"
        value={info.address3}
        onChange={(e) => setInfo({ ...info, address3: e.target.value })}
        placeholder={"〇〇マンション1234号室"}
        error={errors.address3}
      />
    </div>
  );
}
