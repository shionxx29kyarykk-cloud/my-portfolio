import Footer from "./common/footer";
import Header from "./common/header";
import { useLocation } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col relative ">
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
