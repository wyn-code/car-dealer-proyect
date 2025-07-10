import Marcas from "./(app)/(marcas)/marcas";
import Ofertas from "./(app)/(ofertas)/ofertas";
import Servicios from "./(app)/(servicios)/servicios";
import NotFound from "../app/not-found";

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
