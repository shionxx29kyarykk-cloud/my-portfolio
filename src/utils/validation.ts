import { Orderer } from "../assets/data/order";

export const validateOrderer = (data: Orderer): { [key: string]: string } => {
  const newErrors: { [key: string]: string } = {};

  if (!data.email) {
    newErrors.email = "メールアドレスを入力してください。";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    newErrors.email = "正しいメールアドレスを入力してください。";
  }

  if (!data.name) {
    newErrors.name = "氏名を入力してください。";
  }

  if (!data.nameKana) {
    newErrors.nameKana = "フリガナを入力してください。";
  } else if (!/^[ァ-ンヴー\s　]+$/.test(data.nameKana)) {
    newErrors.nameKana = "全角カタカナで入力してください。";
  }

  if (!data.postCode) {
    newErrors.postCode = "郵便番号を入力してください。";
  } else if (!/^\d{3}-?\d{4}$/.test(data.postCode)) {
    newErrors.postCode = "正しい郵便番号を入力してください。";
  }

  if (!data.address1) {
    newErrors.address1 = "都道府県・市区町村を入力してください。";
  }

  if (!data.address2) {
    newErrors.address2 = "丁目・番地を入力してください。";
  }

  return newErrors;
};
