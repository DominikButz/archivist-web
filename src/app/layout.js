import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./themeProvider";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Archivist",
  description: "Archive and manage your documents",
};



export default function RootLayout({ children }) {
  // bg-slate-50 dark:bg-[#0d1117]
  return (
    <html lang="en" suppressHydrationWarning> 
      <body className={`${inter.className} text-stone-950 dark:text-stone-50` }>
       <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
