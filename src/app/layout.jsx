import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/features/theme/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nosotras",
  description: "Curso EAD Inglês / Espanhol",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="pt-br" suppressHydrationWarning className="scroll-smooth">
       <head>
        <link rel="icon" href="/logo/logo-sem-fundo.png" sizes="any" />
      </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
