"use client";
import ArticleVehiculo from "../../components/article-vehiculo";
import FiltrosVehiculos from "./(filtros)/filtrosVehiculos";
import { useEffect, useState } from 'react';

export default function Vehiculos() {
  const [autos, setAutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://localhost:7247/api/cars") // Ruta del backend
      .then((res) => res.json())
      .then((data) => {
        setAutos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al traer autos:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="flex flex-col items-center justify-between !p-10 gap-10">
      <section className="bg-[var(--secondary-color)] max-w-4xl w-full !p-10 rounded-2xl flex flex-col gap-5 items-center text-[var(--thirty-color)] text-center">
        <h2>Encuentra tu auto ideal</h2>
        <p className="text-sm">
          Explorá nuestra amplia selección de vehículos nuevos y usados en todas
          las categorias
        </p>
        <FiltrosVehiculos />
      </section>

      {loading ? (
        <p>Cargando autos...</p>
      ) : (
        <section className="flex flex-wrap justify-between max-w-3xl gap-10">
          {autos.map((auto) => (
            <ArticleVehiculo
              key={auto.id_Auto}
              marca={auto.marca}
              modelo={auto.modelo}
              año={auto.año}
              imagen={auto.imagen}
            />
          ))}
        </section>
      )}
    </section>
  );
}
