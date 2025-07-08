import Marcas from "./(marcas)/marcas";
import Ofertas from "./(ofertas)/ofertas";
import Servicios from "./(servicios)/servicios";

export default function Home() {
  return (
    <>
      <div className="h-90 border-b-1">
        <img src="/assets/images/inicio.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      <Ofertas />
      <Servicios />
      <Marcas />
    </>
  );
}
