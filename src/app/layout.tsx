import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lloyd Pilapil - Digital Designer & Developer",
  description: "Personal website and portfolio of Lloyd Pilapil",
  viewport: {
    width: 'device-width',
    initialScale: 1
  },
  other: {
    'grammarly-extension': 'false'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="grammarly-extension" content="false" />
      </head>
      <body 
        className={`${inter.className} bg-light dark:bg-gray-900 text-gray-900 dark:text-dark-100`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
