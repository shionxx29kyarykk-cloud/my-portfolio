import Layout from "./components/Layout";

export default function App() {
  return (
    <Layout>
      <img src="/components/top.png" alt="トップ画像" className="w-full" />
      <p className="text-red-600">aaaa</p>
      <p className="text-red-500 font-zen">Hello Tailwind!</p>
      <div className="w-24 h-24 bg-black">aaa</div>
      <p className="text-red-500">これは赤文字のはず</p>
    </Layout>
  );
}