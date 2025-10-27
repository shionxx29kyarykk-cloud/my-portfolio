import { Link } from "react-router-dom";
import { itemLists } from "../../assets/data/items";

export default function Ranking() {
  const categories = [
    {
      id: 1,
      itemId: 5,
      src: "/my-portfolio/components/common/ranking/ランキング.png",
      label: "Fika（フィーカ）アームチェア",
      price: "¥24,800（税込）",
    },
    {
      id: 2,
      itemId: 6,
      src: "/my-portfolio/components/common/ranking/ランキング2.png",
      label: "Arco（アルコ）フロアランプ",
      price: "¥16,000円（税込）",
    },
    {
      id: 3,
      itemId: 7,
      src: "/my-portfolio/components/common/ranking/ランキング3.png",
      label: "Ligno（リグノ）オープンシェルフ",
      price: "¥15,800（税込）",
    },
    {
      id: 4,
      itemId: 8,
      src: "/my-portfolio/components/common/ranking/ランキング4.png",
      label: "Natura（ナチュラ）ウッドアームチェア",
      price: "¥25,300（税込）",
    },
  ];

  return (
    <div className="p-5 pt-7 pb-20 bg-gray-100">
      <ul className="flex flex-wrap justify-center gap-4 mt-8 relative">
        {categories.map((category) => {
          itemLists.find((i) => i.id === category.itemId);
          return (
            <li key={category.id} className="flex flex-col items-start">
              <Link
                to={`/item-detail/${category.itemId}`}
                className="hover:opacity-90"
              >
                {category.id === 1 ? (
                  <div className="flex items-center relative gap-16">
                    <p className="font-bold font-onest text-[26px] mb-8">
                      RANKING
                    </p>
                    <p className="text-base font-bold mb-8 absolute left-52 w-12">
                      人気順
                    </p>
                  </div>
                ) : (
                  <div className="h-[34px] mb-9" />
                )}
                <img
                  src={category.src}
                  alt={`pick-up ${category.id + 1}`}
                  className="w-52 mb-4 relative"
                />
                <p
                  className={`w-10 h-10 rounded-full flex absolute top-20 mt-2 font-bold text-lg text-center items-center justify-center bg-gray-100 ${
                    category.id === 1
                      ? "text-yellow-400"
                      : category.id === 2
                        ? "text-gray-600"
                        : category.id === 3
                          ? "text-brown-500"
                          : category.id === 4
                            ? "text-gray-550"
                            : "text-black"
                  }`}
                >
                  {category.id}
                </p>
                <p className="text-sm font-bold w-52">{category.label}</p>
                <div className="flex items-center mt-1.5 justify-between">
                  <p className="text-sm text-gray-500">{category.price}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
