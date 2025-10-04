import { Link } from "react-router-dom";

export default function Category() {
  const categories = [
    {
      src: "public/componets/common/category/カテゴリ1.png",
      label: "ソファ・チェア",
    },
    {
      src: "public/componets/common/category/カテゴリ2.png",
      label: "テーブル",
    },
    {
      src: "public/componets/common/category/カテゴリ3.png",
      label: "収納家具",
    },
    { src: "public/componets/common/category/カテゴリ4.png", label: "ベッド" },
    {
      src: "public/componets/common/category/カテゴリ5.png",
      label: "ラグ・カーペット",
    },
    { src: "public/componets/common/category/カテゴリ6.png", label: "照明" },
    {
      src: "public/componets/common/category/カテゴリ7.png",
      label: "カーテン",
    },
    {
      src: "public/componets/common/category/カテゴリ8.png",
      label: "インテリア雑貨",
    },
  ];

  return (
    <div className="mt-10 mb-16">
      <p className="font-bold font-onest text-[26px] text-center">Category</p>
      <ul className="flex flex-wrap justify-center gap-5 mt-8">
        {categories.map((category, index) => (
          <li key={index} className="items-start justify-center">
            <a href="#" className="hover:opacity-90 text-center">
              <div className="flex justify-center mb-2">
                <img
                  src={category.src}
                  alt={`カテゴリ ${index + 1}`}
                  className="w-16"
                />
              </div>
              <p className="text-xs w-[5.3rem]">{category.label}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
