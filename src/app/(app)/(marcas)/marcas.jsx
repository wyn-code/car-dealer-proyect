import ArticleMarcas from "./article-marcas";

export default function Marcas() {
  return (
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
  )
}
