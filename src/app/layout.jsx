import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-[#A9B2AC]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
