import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        <main className="w-full flex-1 max-w-7xl mx-auto px-6 py-8">{children}</main>
        <Footer />
      </div>
    </>
  );
}
