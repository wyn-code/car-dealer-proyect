import ArticleMarcas from "./article-marcas";
//import { fetchDesdeBackend } from "../../../lib/api"; // ajustá según tu alias o ruta

export default async function Marcas() {
//  const marcas = await fetchDesdeBackend("marcas");

  return (
    <>
    {/*}
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Marcas</h2>
      <ul>
        {marcas.map((m) => (
          <li key={m.id}>{m.nombre}</li>
        ))}
      </ul>
    </div>*/}
  
    <section id="marcas" className="flex flex-col justify-center items-center">
      <h2>MARCAS</h2>
      <div className="flex flex-col items-center gap-10 w-full">
        <div className="flex gap-10">
          <ArticleMarcas />
          <ArticleMarcas />
          <ArticleMarcas />
          <ArticleMarcas />
        </div>
      </div>
    </section>
  </>
  );
}
