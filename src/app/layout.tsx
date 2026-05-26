import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "That Justice Enforcer — AI Assistant for Discord",
  description:
    "AI assistant for your Discord server. Ask questions, generate images, create documents, search the web, and more — in 50+ languages. Just @mention to interact.",
  keywords: [
    "Discord bot",
    "AI assistant",
    "image generation",
    "web search",
    "document creation",
    "chatbot",
    "productivity",
  ],
  authors: [{ name: "ComPicfy" }],
  icons: {
    icon: "/bot-logo.png",
  },
  openGraph: {
    title: "That Justice Enforcer — AI Assistant for Discord",
    description:
      "AI assistant for your Discord server. Ask questions, generate images, create documents, search the web, and more — in 50+ languages.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
