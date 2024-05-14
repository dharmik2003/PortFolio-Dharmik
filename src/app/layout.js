import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./Components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dharmik Portfolio",
  description: "The Best Animated Portfolio Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
