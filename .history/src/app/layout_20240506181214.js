import { Inter } from "next/font/google";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
