import "./globals.css";
import { ThemeProvider } from "@/components/features/theme/theme-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Quicksand, Outfit, Lora, Fira_Code } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata = {
  title: "Nosotras",
  description: "Curso EAD Inglês / Espanhol",
};

export default function RootLayout({ children }) {
  return (
    <html
      className={`${quicksand.variable} ${outfit.variable} ${lora.variable} ${firaCode.variable}`}
      lang="pt-br"
      suppressHydrationWarning
    >
      <head>
        <link href="/logo/logo-sem-fundo.png" rel="icon" sizes="any" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}