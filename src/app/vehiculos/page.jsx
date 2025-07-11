"use client";
import { useEffect, useState } from "react";
import ArticleVehiculo from "../../components/article-vehiculo";
import FiltrosVehiculos from "./(filtros)/filtrosVehiculos";

export default function Vehiculos() {
  const [autos, setAutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [autosFiltrados, setAutosFiltrados] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7288/api/cars")
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos recibidos:", data);
        setAutos(data);
        setAutosFiltrados(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al traer autos:", err);
        setLoading(false);
      });
  }, []);

  const filtrarAutos = ({ marca, tipo, estado }) => {
    console.log("Filtro recibido:", { marca, tipo, estado });

    const resultado = autos.filter((auto) => {
      const marcaAuto = (auto.marca || "").toLowerCase().trim();
      const tipoAuto = (auto.tipo_Auto || "").toLowerCase().trim();
      const condicionAuto = (auto.condicion || "").toLowerCase().trim();

      const coincideMarca = marca ? marcaAuto.includes(marca.toLowerCase().trim()) : true;
      const coincideTipo = tipo ? tipoAuto.includes(tipo.toLowerCase().trim()) : true;

      const coincideEstado =
        estado === "0km" ? condicionAuto === "nuevo" :
        estado === "usado" ? condicionAuto === "usado" :
        true;

      return coincideMarca && coincideTipo && coincideEstado;
    });

    console.log("Resultado filtrado:", resultado);
    setAutosFiltrados(resultado);
  };

  return (
    <section className="flex flex-col items-center justify-between !p-10 gap-10">
      <section className="bg-[var(--secondary-color)] max-w-4xl w-full !p-10 rounded-2xl flex flex-col gap-5 items-center text-[var(--thirty-color)] text-center">
        <h2>Encuentra tu auto ideal</h2>
        <p className="text-sm">
          Explorá nuestra amplia selección de vehículos nuevos y usados en todas las categorías
        </p>
        <FiltrosVehiculos onBuscar={filtrarAutos} />
      </section>

      {loading ? (
        <p>Cargando autos...</p>
      ) : autosFiltrados.length === 0 ? (
        <p>No se encontraron autos con esos filtros.</p>
      ) : (
        <section className="flex flex-wrap justify-between max-w-3xl gap-10">
          {autosFiltrados.map((auto) => (
            <ArticleVehiculo
              key={auto.id_Auto}
              marca={auto.marca}
              modelo={auto.modelo}
              año={auto.año_Modelo}
              imagen={auto.imagen}
              tipoAuto={auto.tipo_Auto}
              condicion={auto.condicion}
            />
          ))}
        </section>
      )}
    </section>
  );
}
