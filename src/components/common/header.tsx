import {
  IconHeart,
  IconSearch,
  IconShoppingCart,
  IconUserCircle,
} from "@tabler/icons-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isTopPage = location.pathname === "/";
  return (
    <header className="w-full z-10 relative">
      {!isTopPage && (
        <img
          src="/my-portfolio/components/header/header.png"
          alt="ヘッダー画像"
          className="w-full h-auto object-cover"
        />
      )}
      <div className={`${isTopPage && "pt-12 md:pt-12 lg:pt-14"} absolute inset-0 max-w-[1244px] mx-auto flex items-center justify-between px-20 lg:px-0`}>
        <Link to="/" className="hover:opacity-90">
          <div className="text-4xl font-onest font-bold">Lumière</div>
        </Link>
        <nav className="hidden md:flex gap-20 lg:gap-24 text-base font-bold">
          <button
            onClick={() => navigate("/", { state: { scrollTo: "category" } })}
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px]
                       after:w-0 after:h-[1.5px] after:bg-black after:transition-all after:duration-300
                       hover:after:w-full"
          >
            商品を探す
          </button>

          <button
            onClick={() => navigate("/", { state: { scrollTo: "pickup" } })}
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px]
                       after:w-0 after:h-[1.5px] after:bg-black after:transition-all after:duration-300
                       hover:after:w-full"
          >
            おすすめコンテンツ
          </button>
        </nav>

        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="商品を探す"
              className="w-72 md:w-64 text-base px-3 py-1.5 rounded-full bg-transparent placeholder:font-medium placeholder-white font-bold border-2.5 border-white focus:outline-none focus:ring-1"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white">
              <IconSearch />
            </span>
          </div>

          <div className="flex gap-4 text-lg text-white">
            <Link to="/cart" className="hover:opacity-80">
              <IconShoppingCart size={28} />
            </Link>
            <Link to="/" className="hover:opacity-80">
              <IconHeart size={28} />
            </Link>
            <Link to="/" className="hover:opacity-80">
              <IconUserCircle size={28} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
