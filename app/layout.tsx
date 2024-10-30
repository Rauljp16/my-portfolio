
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
// import { Inter } from 'next/font/google';
import { Poppins, Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "My portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${poppins.variable} ${inter.variable} bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark transition-colors duration-700 ease-in-out min-h-dvh`}>
        <ThemeProvider defaultTheme="dark" attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
