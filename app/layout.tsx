import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/footer";
import { UserLocationProvider } from "./hooks/useLocation";

const inter = Inter({ subsets: ["latin"],weight:["400","700"]});

export const metadata: Metadata = {
  title: "Bienvenue a notre site",
  description: "Generated by create next app",
};

export default function RootLayout({children}:any) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <UserLocationProvider>
    
      
        <main className="Container">{children}</main>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      <link href="./output.css" rel="stylesheet"/>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"></link>
      <br />
      <br />
      <br />

      <Footer />
      </UserLocationProvider>
      </body>
    </html>
  );
  
}