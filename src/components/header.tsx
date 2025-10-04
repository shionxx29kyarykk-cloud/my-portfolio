export default function Header() {
  return (
    <header className="absolute  w-full bg-white shadow-md">
      <div className="max-w-[1244px] h-[51px] mx-auto flex items-center justify-between px-4">
        {/* ロゴ */}
        <div className="text-6xl p-24 font-bold">Lumière</div>

        {/* ナビゲーションメニュー */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-black">
            商品を探す
          </a>
          <a href="#" className="hover:text-black">
            おすすめコンテンツ
          </a>
        </nav>

        {/* 検索 & アイコン */}
        <div className="flex items-center gap-4">
          {/* 検索バー */}
          <div className="relative">
            <input
              type="text"
              placeholder="検索"
              className="w-40 md:w-64 px-3 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
              🔍
            </span>
          </div>

          {/* アイコン（仮） */}
          <div className="flex gap-2 text-xl">
            <button>🛒</button>
            <button>🤍</button>
            <button>👤</button>
          </div>
        </div>
      </div>
    </header>
  );
}
