import "./globals.css";
import { ThemeProvider } from "@/components/features/theme/theme-provider";
import { Quicksand, Outfit, Lora, Fira_Code } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand', 
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});

export const metadata = {
  title: "Nosotras",
  description: "Curso EAD Inglês / Espanhol",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html 
        lang="pt-br" 
        suppressHydrationWarning 
        className={`scroll-smooth ${quicksand.variable} ${outfit.variable} ${lora.variable} ${firaCode.variable}`}
      >
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