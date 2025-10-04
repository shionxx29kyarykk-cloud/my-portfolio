import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 w-[95%] mx-auto">{children}</main>

      <footer className="py-4 text-center text-gray-500">フッター</footer>
    </div>
  );
}
