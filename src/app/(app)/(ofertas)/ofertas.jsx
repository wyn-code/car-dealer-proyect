import ArticleVehiculo from "../../../components/article-vehiculo";


export default async function Ofertas() {

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
  </>
  );
}
