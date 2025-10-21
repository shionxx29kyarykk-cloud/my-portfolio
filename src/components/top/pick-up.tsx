import { Link } from "react-router-dom";

export default function PickUp() {
  const categories = [
    { src: "/componets/common/pick-up/pick-up1.png" },
    { src: "/componets/common/pick-up/pick-up2.png" },
  ];

  return (
    <div className="p-5 pt-7 pb-20 bg-gray-100">
      <ul className="flex flex-wrap justify-center gap-10 mt-8 relative">
        {categories.map((category, index) => (
          <li key={index} className="flex flex-col items-start w-96">
            <a href="/#" className="hover:opacity-90">
              {index === 0 ? (
                <div className="flex items-center gap-16">
                  <p className="font-bold font-onest text-[26px] mb-6">
                    PICK UP
                  </p>
                  <p className="text-base font-bold mb-6">おすすめコンテンツ</p>
                </div>
              ) : (
                <div className="h-[34px] mb-7" />
              )}

              <img
                src={category.src}
                alt={`pick-up ${index + 1}`}
                className="w-auto mb-4"
              />

              <p className="text-sm font-semibold">
                こもりたくなる部屋、できました。
              </p>
              <div className="border mt-2.5 border-black w-[50%]" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
