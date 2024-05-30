import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
// Components
import { cn } from "@/lib/utils";
import MainNavBar from "@/components/navbar/MainNavBar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import StoreProvider from "@/redux/StoreProvider";
import { SessionProvider } from "next-auth/react";

// const inter = Inter({ subsets: ["latin"] });
const notoKufiArabic = Noto_Kufi_Arabic({ subsets: ["latin"] });

export const metadata = {
  title: "User's Work space | Tasky",
  description:
    "Tasky is a simple and powerfull project management kanban platform.",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <SessionProvider>
        <html lang="en">
          <head>
            <link
              href="https://fonts.googleapis.com/css2?family=Freeman&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://api.fontshare.com/v2/css?f[]=plein@300,301,400,401,500,501,700,701,900,901,1,2&display=swap"
              rel="stylesheet"
            />
          </head>
          <body className={cn(notoKufiArabic.className, "")}>
            <MaxWidthWrapper>
              <MainNavBar />
              <main className=" h-full">{children}</main>
            </MaxWidthWrapper>
          </body>
        </html>
      </SessionProvider>
    </StoreProvider>
  );
}
