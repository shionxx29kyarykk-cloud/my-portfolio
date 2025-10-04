import Footer from "./common/footer";
import Header from "./common/header";
import { useLocation } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isTopPage = location.pathname === "/";

  return (
    <div className=" flex flex-col">
      <Header />
      {!isTopPage && (
        <img
          src="public/componets/header/header.png"
          alt="ヘッダー画像"
          className="w-full h-auto object-cover"
        />
      )}

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
