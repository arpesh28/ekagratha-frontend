import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SideNav from "@/components/dashboard/nav/sideNav";
import "../../globals.css";
import Header from "@/components/dashboard/header/header";
import { ThemeProvider } from "@/app/themeProvider";
import BottomNav from "@/components/dashboard/nav/bottomNav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ekagratha",
  description: "Team Management Platform",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased  bg-background `}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="md:overflow-y-hidden flex h-screen ">
            <SideNav />
            <BottomNav />
            <div className="w-full overflow-y-scroll sticky">
              <Header />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
