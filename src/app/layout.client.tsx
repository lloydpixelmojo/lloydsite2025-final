'use client';

import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Navigation />
      <div className="pt-16">
        {children}
      </div>
      <Footer />
    </ThemeProvider>
  );
}
