import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./themeProvider";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Archivist",
  description: "Archive and manage your documents",
};



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 dark:bg-[#0d1117] duration-500` }>
       <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
