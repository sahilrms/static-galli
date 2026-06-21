import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Galli Cafe",
  description: "Coffee. Conversations. Chill Scenes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bebas.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}