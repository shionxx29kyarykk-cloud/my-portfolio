import {
  IconHeart,
  IconSearch,
  IconShoppingCart,
  IconUserCircle,
} from "@tabler/icons-react";

export default function Header() {
  return (
    <header className="absolute w-full z-10">
      <div className="max-w-[1244px] h-[40px] mx-auto flex items-center pt-12 justify-between px-20">
        <a href="/" className="hover:opacity-90">
          <div className="text-4xl font-onest font-bold">Lumière</div>
        </a>

        <nav className="flex gap-16 text-base font-bold ">
          <a href="#" className="hover:underline">
            商品を探す
          </a>
          <a href="#" className="hover:underline">
            おすすめコンテンツ
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="商品を探す"
              className="w-40 md:w-64 text-base px-3 py-1.5 rounded-full bg-transparent placeholder:font-medium  placeholder-white font-bold  border-2.5 border-white focus:outline-none focus:ring-1 "
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white">
              <IconSearch />
            </span>
          </div>
          <div className="flex gap-4 text-lg text-white">
            <a href="/cart" className="hover:opacity-80">
              <IconShoppingCart size={28} />
            </a>
            <a href="/" className="hover:opacity-80">
              <IconHeart size={28} />
            </a>
            <a href="/" className="hover:opacity-80">
              <IconUserCircle size={28} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
