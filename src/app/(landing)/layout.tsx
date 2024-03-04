import type { Metadata } from "next";
import { Poppins, Raleway, Nunito } from "next/font/google";
import "../globals.css";
import Header from "@/components/landing/header/externalHeader";
import { ThemeProvider } from "../themeProvider";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ekagratha",
  description: "Team Management Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased  bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                background: "#000",
                color: "#fff",
                borderRadius: "10px",
              },
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
