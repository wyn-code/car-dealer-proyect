import Marcas from "./(app)/(marcas)/marcas";
import Ofertas from "./(app)/(ofertas)/ofertas";
import Servicios from "./(app)/(servicios)/servicios";

export default function Home() {
  return (
    <>
      <div className="relative h-90 border-b flex items-center">
        <img
          src="/assets/images/inicio.jpg"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(163,70,70,0)_0%,rgba(87,199,133,0)_0%,rgba(0,0,0,1)_100%)] z-2"></div>

        <h2 className="absolute right-0 z-2 !text-[var(--thirty-color)] mr-20 text-center !font-extrabold">Tu concesoraría <br /> de confianza</h2>
      </div>

      <Ofertas />
      <Servicios />
      <Marcas />
    </>
  );
}
