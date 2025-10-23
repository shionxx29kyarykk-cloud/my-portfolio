import { useEffect, useRef } from "react";
import Category from "../components/top/category";
import NewItem from "../components/top/new-item";
import PickUp from "../components/top/pick-up";
import Ranking from "../components/top/rannking";
import { useLocation } from "react-router-dom";

export default function Top() {
  const categoryRef = useRef<HTMLDivElement | null>(null);
  const pickUpRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

   useEffect(() => {
    if (location.state?.scrollTo === "category") {
      categoryRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (location.state?.scrollTo === "pickup") {
      pickUpRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);


  return (
    <>
      <div className="pt-3 relative w-[95%] mx-auto">
        <img src="public/componets/top.png" alt="トップ画像" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-white text-2xl mb-2">
            光と余白を楽しむ、心地よい暮らしを。
          </p>
          <div className="border-b-3 border-white w-[80%] mx-auto" />
        </div>
      </div>
      <div ref={categoryRef}>
        <Category />
      </div>
      <div ref={pickUpRef}>
        <PickUp />
      </div>
      <NewItem />
      <Ranking />
    </>
  );
}
