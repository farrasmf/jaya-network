import { ThemeProvider } from "@mui/material";
import theme from "@/theme";
import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={hankenGrotesk.className}>
      <head>

      </head>
      <body suppressHydrationWarning={true}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
