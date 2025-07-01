import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <body className="bg-[#A9B2AC]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
