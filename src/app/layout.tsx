import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://mufteem.dev"),
  title: {
    default: "Muhammad Bello Ibrahim | Frontend Developer & Tech Founder",
    template: "%s | Mufteem Dev",
  },
  description:
    "Portfolio of Muhammad Bello Ibrahim (Mufteem Dev), a frontend developer, Computer Science graduate, and CEO of Orao Technologies in Gombe, Nigeria.",
  keywords: [
    "Muhammad Bello Ibrahim",
    "Mufteem Dev",
    "Frontend Developer",
    "Next.js",
    "React",
    "Fintech",
    "Orao Technologies",
  ],
  openGraph: {
    title: "Muhammad Bello Ibrahim | Think Bold, Build Smart.",
    description: "Frontend development, product work, and technology leadership from Gombe, Nigeria.",
    url: "https://mufteem.dev",
    siteName: "Mufteem Dev Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Bello Ibrahim | Think Bold, Build Smart.",
    description: "Frontend development, product work, and technology leadership from Gombe, Nigeria.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-100 font-sans text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
