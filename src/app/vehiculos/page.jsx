import ArticleVehiculo from "../../components/article-vehiculo";
import FiltrosVehiculos from "./(filtros)/filtrosVehiculos";

export default function Vehiculos() {
  return (
    <section className="flex flex-col items-center justify-between !p-10 gap-10">
      <section className="bg-[var(--secondary-color)] max-w-4xl w-full !p-10 rounded-2xl flex flex-col gap-5 items-center text-[var(--thirty-color)] text-center ">
        <h2>Encuentra tu auto ideal</h2>
        <p className="text-sm">
          Explorá nuestra amplia selección de vehículos nuevos y usados en todas
          las categorias
        </p>
        <FiltrosVehiculos />
      </section>
      <section className="flex flex-wrap justify-between max-w-3xl gap-10">
        <ArticleVehiculo />
        <ArticleVehiculo />
        <ArticleVehiculo />
        <ArticleVehiculo />
        <ArticleVehiculo />
        <ArticleVehiculo />
      </section>
    </section>
  );
}
