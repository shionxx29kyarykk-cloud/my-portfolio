import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Top from "./pages/top";
import Items from "./pages/items"; // 例：Aboutページ

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </Layout>
    </Router>
  );
}
