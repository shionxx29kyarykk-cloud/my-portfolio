export interface Orderer {
  email: string;
  name: string;
  nameKana: string;
  postCode: string;
  address1: string;
  address2: string;
  address3?: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
  image: string;
}
