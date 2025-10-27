import { Link } from "react-router-dom";

export default function Category() {
  const categories = [
    {
      src: "/my-portfolio/components/common/category/カテゴリ1.png",
      label: "ソファ・チェア",
    },
    {
      src: "/my-portfolio/components/common/category/カテゴリ2.png",
      label: "テーブル",
    },
    {
      src: "/my-portfolio/components/common/category/カテゴリ3.png",
      label: "収納家具",
    },
    {
      src: "/my-portfolio/components/common/category/カテゴリ4.png",
      label: "ベッド",
    },
    {
      src: "/my-portfolio/components/common/category/カテゴリ5.png",
      label: "ラグ・カーペット",
    },
    {
      src: "/my-portfolio/components/common/category/カテゴリ6.png",
      label: "照明",
    },
    {
      src: "/my-portfolio/components/common/category/カテゴリ7.png",
      label: "カーテン",
    },
    {
      src: "/my-portfolio/components/common/category/カテゴリ8.png",
      label: "インテリア雑貨",
    },
  ];

  return (
    <div className="mt-10 mb-16">
      <p className="font-bold font-onest text-[26px] text-center">Category</p>
      <ul className="flex flex-wrap justify-center gap-5 mt-8">
        {categories.map((category, index) => (
          <li key={index} className="items-start justify-center">
            <Link
              to={`/items?category=${encodeURIComponent(category.label)}`}
              className="hover:opacity-90 text-center"
            >
              <div className="flex justify-center mb-2">
                <img
                  src={category.src}
                  alt={`カテゴリ ${index + 1}`}
                  className="w-16"
                />
              </div>
              <p className="text-xs w-[5.3rem]">{category.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
