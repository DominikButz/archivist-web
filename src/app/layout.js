import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./themeProvider";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Archivist",
  description: "Archive and manage your documents",
};



export default function RootLayout({ children }) {
  // bg-slate-50 dark:bg-[#0d1117]
  return (
    
    <html lang="en" suppressHydrationWarning> 
    <head>
    <link rel="manifest" href="/manifest.json" />

    </head>
      <body className={`${inter.className} text-stone-950 dark:text-stone-50` }>
    
      <Toaster position='top-center' />
       <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
       
        {children}
        </ThemeProvider>
    
      </body>
    </html>
  
  );
}
