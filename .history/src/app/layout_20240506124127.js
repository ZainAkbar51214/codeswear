import { Inter } from "next/font/google";
import Navbar from "../../Components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  );
}
