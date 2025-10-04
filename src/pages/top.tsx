import Category from "../components/top/category";
import NewItem from "../components/top/new-item";
import PickUp from "../components/top/pick-up";
import Ranking from "../components/top/rannking";

export default function Top() {
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
      <Category />
      <PickUp />
      <NewItem />
      <Ranking />
    </>
  );
}
