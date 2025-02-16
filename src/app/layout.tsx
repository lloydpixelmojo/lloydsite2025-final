import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import AssessmentPanel from "@/components/AssessmentPanel";
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lloyd Pilapil - Thought Leadership",
  description: "Insights for Industry Leaders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Navigation />
          <AssessmentPanel />
          <div className="pt-16">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
