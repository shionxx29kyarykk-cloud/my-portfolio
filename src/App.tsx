import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Top from "./pages/top";
import Items from "./pages/items";
import ItemDetail from "./pages/item-detail";
import Cart from "./pages/cart";
import Order from "./pages/order";
import { useState } from "react";

import Confirm from "./pages/confirm";
import Complete from "./pages/complete";
import ScrollToTop from "./components/scroll-top";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
  image: string;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Mysa（ミーサ）ウールラグ",
    price: 68000,
    quantity: 2,
    color: "ブルー",
    size: "120×180cm",
    image: "public/componets/common/new-item/NEW.png",
  },
  {
    id: 2,
    name: "Sova（ソーヴァ）ベッド",
    price: 124800,
    quantity: 1,
    color: "イエロー",
    size: "140×200cm",
    image: "public/componets/common/new-item/NEW2.png",
  },
  {
    id: 3,
    name: "Bordet（ボルデット）テーブル",
    price: 22900,
    quantity: 1,
    color: "イエロー",
    size: "140×200cm",
    image: "public/componets/common/new-item/NEW3.png",
  },
];

interface Orderer {
  email: string;
  name: string;
  nameKana: string;
  postCode: string;
  address1: string;
  address2: string;
  address3?: string;
}

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const [ordererInfo, setOrdererInfo] = useState<Orderer>({
    email: "",
    name: "",
    nameKana: "",
    postCode: "",
    address1: "",
    address2: "",
    address3: "",
  });

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/items" element={<Items />} />
          <Route path="/item-detail" element={<ItemDetail />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            }
          />
          <Route
            path="/order"
            element={
              <Order
                info={ordererInfo}
                setInfo={setOrdererInfo}
                cartItems={cartItems}
              />
            }
          />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </Layout>
    </Router>
  );
}
