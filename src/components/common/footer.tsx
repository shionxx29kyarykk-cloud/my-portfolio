export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-8 pb-4 ">
      <div className="container flex mx-auto px-4 w-[70%] gap-52">
        <div>
          <div className="text-3xl font-onest font-bold pl-2">Lumière</div>
          <ul className="flex gap-1 mt-16 text-sm">
            <li>
              <a href="/about" className="hover:underline">
                <img src="/my-portfolio/components/footer/Icon.png" />
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                <img src="/my-portfolio/components/footer/Icon-2.png" />
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                <img src="/my-portfolio/components/footer/Icon-3.png" />
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex justify-center gap-10 mt-2 text-sm">
          <li className="flex flex-col gap-4">
            <p className="font-semibold">ショッピングガイド</p>
            <a href="/about" className="hover:underline">
              ご利用ガイド
            </a>
            <a href="/about" className="hover:underline">
              お支払い方法
            </a>
            <a href="/about" className="hover:underline">
              ご注文の流れ
            </a>
          </li>
          <li className="flex flex-col gap-4">
            <p className="font-semibold">カスタマーサポート</p>
            <a href="/about" className="hover:underline">
              お問い合わせ
            </a>
            <a href="/about" className="hover:underline">
              メールアドレス
            </a>
            <a href="/about" className="hover:underline">
              ご注文の流れ
            </a>
          </li>
          <li className="flex flex-col gap-4">
            <p className="font-semibold">会社情報</p>
            <a href="/about" className="hover:underline">
              会社概要
            </a>
            <a href="/about" className="hover:underline">
              プライバシーポリシー
            </a>
            <a href="/about" className="hover:underline">
              利用規約
            </a>
          </li>
        </ul>
      </div>
      <p className="text-xs mt-6 text-center">
        &copy; {new Date().getFullYear()} Lumière. All rights reserved.
      </p>
    </footer>
  );
}
