import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mufteem.dev"),
  title: {
    default: "Muhammad Bello Ibrahim | AIoT Engineer & Tech Founder",
    template: "%s | Mufteem Dev",
  },
  description:
    "Modern portfolio of Muhammad Bello Ibrahim (Mufteem Dev), CEO of Orao Technologies, focused on AI, IoT, fintech, EdTech, and HealthTech systems.",
  keywords: [
    "Muhammad Bello Ibrahim",
    "Mufteem Dev",
    "Frontend Developer",
    "Next.js",
    "AIoT",
    "Fintech",
    "Orao Technologies",
  ],
  openGraph: {
    title: "Muhammad Bello Ibrahim | Think Bold, Build Smart.",
    description: "Portfolio showcasing product engineering, AIoT innovation, and founder-led technology direction.",
    url: "https://mufteem.dev",
    siteName: "Mufteem Dev Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Bello Ibrahim | Think Bold, Build Smart.",
    description: "Portfolio showcasing product engineering, AIoT innovation, and founder-led technology direction.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} bg-slate-100 font-sans text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
