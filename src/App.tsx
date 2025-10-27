import { HashRouter, Routes, Route } from "react-router-dom";
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

const initialCartItems: CartItem[] = [];

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
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const [ordererInfo, setOrdererInfo] = useState<Orderer>({
    email: "",
    name: "",
    nameKana: "",
    postCode: "",
    address1: "",
    address2: "",
    address3: "",
  });

  const [recipientInfo, setRecipientInfo] = useState<Orderer>({
    email: "",
    name: "",
    nameKana: "",
    postCode: "",
    address1: "",
    address2: "",
    address3: "",
  });

  const [isChecked, setIsChecked] = useState(true);

  const handleAddToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (i) =>
          i.id === item.id && i.color === item.color && i.size === item.size,
      );
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id && i.color === item.color && i.size === item.size
            ? { ...i, quantity: i.quantity + item.quantity }
            : i,
        );
      } else {
        return [...prev, item];
      }
    });
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/items" element={<Items />} />
          <Route
            path="/item-detail/:id"
            element={<ItemDetail onAddToCart={handleAddToCart} />}
          />
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
                isChecked={isChecked}
                setIsChecked={setIsChecked}
                recipientInfo={recipientInfo}
                setRecipientInfo={setRecipientInfo}
              />
            }
          />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
