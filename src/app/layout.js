import { Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const karla = Karla({ subsets: ["latin"], weights: [200, 300, 400, 500, 800] });

export const metadata = {
  title: "Sign Bridge",
  description: "A full fledged application to bridge the gap of communication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en ">
      <body className={`${karla.className} overflow-x-hidden`}>
        <div className="absolute top-[5%] left-[27%]">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
