import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-8 pb-4 ">
      <div className="container flex mx-auto px-4 md:w-[70%] gap-52 lg:gap-[24rem] lg:pl-48">
        <div>
          <div className="text-3xl font-onest font-bold pl-2">Lumière</div>
          <ul className="flex gap-1 mt-16 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                <img src="/my-portfolio/components/footer/Icon.png" />
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                <img src="/my-portfolio/components/footer/Icon-2.png" />
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                <img src="/my-portfolio/components/footer/Icon-3.png" />
              </Link>
            </li>
          </ul>
        </div>
        <ul className="flex justify-center gap-10 mt-2 text-sm">
          <li className="flex flex-col gap-4">
            <p className="font-semibold">ショッピングガイド</p>
            <Link to="/" className="hover:underline">
              ご利用ガイド
            </Link>
            <Link to="/" className="hover:underline">
              お支払い方法
            </Link>
            <Link to="/" className="hover:underline">
              ご注文の流れ
            </Link>
          </li>
          <li className="flex flex-col gap-4">
            <p className="font-semibold">カスタマーサポート</p>
            <Link to="/" className="hover:underline">
              お問い合わせ
            </Link>
            <Link to="/" className="hover:underline">
              メールアドレス
            </Link>
            <Link to="/" className="hover:underline">
              ご注文の流れ
            </Link>
          </li>
          <li className="flex flex-col gap-4">
            <p className="font-semibold">会社情報</p>
            <Link to="/" className="hover:underline">
              会社概要
            </Link>
            <Link to="/" className="hover:underline">
              プライバシーポリシー
            </Link>
            <Link to="/" className="hover:underline">
              利用規約
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-xs mt-6 text-center">
        &copy; {new Date().getFullYear()} Lumière. All rights reserved.
      </p>
    </footer>
  );
}
