import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Waterfall, Inter, Train_One } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const train = Train_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-train",
});
const waterfall = Waterfall({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-waterfall",
});

export const metadata: Metadata = {
  title: "Rauljp",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="es">
      <body
        className={`${waterfall.variable} ${inter.variable} ${train.variable} font-inter bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark transition-colors duration-700 ease-in-out min-h-dvh bg-[url('/svg/bg.svg')]`}
      >
        <ThemeProvider defaultTheme="dark" attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
