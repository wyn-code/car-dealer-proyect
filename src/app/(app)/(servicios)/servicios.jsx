import ArticleServicio from "./article-servicio";



export default async function Servicios() {

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
    </>
  );
}
