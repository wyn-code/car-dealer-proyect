import ArticleVehiculo from "../../../components/article-vehiculo";
//import { fetchDesdeBackend } from "../../../lib/api"; // ajustá según tu alias o ruta

export default async function Ofertas() {
//  const ofertas = await fetchDesdeBackend("ofertas");
  return (
    <>
    <section className="m-15 flex flex-col justify-center items-center gap-10">
      <h2>OFERTAS</h2>
      <div className="h-50 w-full flex justify-between items-center max-w-3xl">
        <button className="w-8 h-8 border rounded-full"></button>
        <div className="flex px-5 gap-5">
          <ArticleVehiculo />
          <ArticleVehiculo />
        </div>
        <button className="w-8 h-8 border rounded-full"></button>
      </div>
    </section>

    {/*<div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Ofertas</h2>
      <ul>
        {ofertas.map((o) => (
          <li key={o.id}>{o.nombre}</li>
        ))}
      </ul>
    </div>*/}
  </>
  );
}
