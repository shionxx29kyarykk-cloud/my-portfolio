import Layout from "../components/Layout";

export default function Top() {
  return (
    <div className="pt-3 min-h-screen">
        <img src="public/componets/top.png" alt="トップ画像" />
      <h1 className="text-3xl font-bold text-blue-700">トップページ</h1>
      <p className="text-gray-600 mt-4">ようこそ！これはポートフォリオのトップページです。</p>
    </div>
  );
}