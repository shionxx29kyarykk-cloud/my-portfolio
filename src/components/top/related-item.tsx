import { Link } from "react-router-dom";
import { itemLists } from "../../assets/data/items";

export default function RelatedItem({
  title = "RELATED ITEM",
  subTitle = " 関連",
  padding = "pt-7",
}: {
  title?: string;
  subTitle?: string;
  padding?: string;
}) {
  return (
    <div className={padding + "p-5 pb-20 w-[80%] mx-auto"}>
      <div className="border-b border-gray-300 mt-12" />
      <ul className="flex flex-wrap justify-center gap-4 mt-10 relative">
        {itemLists
          .filter((item) => item.id >= 1 && item.id <= 4)
          .map((itemList) => (
            <li key={itemList.id} className="flex flex-col items-start">
              <Link
                to={`/item-detail/${itemList.id}`}
                className="hover:opacity-90"
              >
                {itemList.id === 1 ? (
                  <div className="flex items-center relative gap-16">
                    <p className="font-bold font-onest text-[25px] mb-8">
                      {title}
                    </p>
                    <p className="text-base font-bold ml-4 mb-8 absolute left-52 w-24">
                      {subTitle}商品
                    </p>
                  </div>
                ) : (
                  <div className="h-[34px] mb-9" />
                )}
                <img
                  src={itemList.src}
                  alt={`pick-up ${itemList.id + 1}`}
                  className="w-52 mb-4"
                />
                <p className="text-sm font-bold">{itemList.label}</p>
                <p className="text-sm mt-1.5 text-gray-500">
                  ¥{itemList.price.toLocaleString()}（税込）
                </p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
