import ArticleServicio from "./article-servicio";
//import { fetchDesdeBackend } from "../../../lib/api"; // ajustá según tu alias o ruta


export default async function Servicios() {
  // const servicios = await fetchDesdeBackend("servicios");
  return (
    <>
    <section id="servicios" className="w-full flex flex-col justify-center items-center">
      <h2>SERVICIOS</h2>
      <div className="flex flex-col items-center gap-10 w-full">
        <div className="flex gap-10">
          <ArticleServicio />
          <ArticleServicio />
        </div>
        <div className="flex gap-10">
          <ArticleServicio />
          <ArticleServicio />
        </div>
      </div>
    </section>

    {/*/<div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Servicios</h2>
      <ul>
        {servicios.map((s) => (
          <li key={s.id}>{s.descripcion}</li>
        ))}
      </ul>
    </div>*/}
    </>
  );
}
