import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/assets/Icon.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
        <title>Vehicle Store</title>
      </head>
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
