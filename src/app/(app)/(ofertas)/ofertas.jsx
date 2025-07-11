"use client";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ArticleVehiculo from "../../../components/article-vehiculo"; // Asegurate que esta ruta es correcta

export default function CarrouselAutos() {
  const [autos, setAutos] = useState([]);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  useEffect(() => {
    fetch("https://localhost:7288/api/cars")
      .then((res) => res.json())
      .then((data) => {
        setAutos(data.slice(0, 6)); // Solo los primeros 6 autos
      })
      .catch((err) => console.error("Error al traer autos:", err));
  }, []);

  if (autos.length === 0) return <p className="text-center">Cargando autos...</p>;

  return (
    <section className="w-full max-w-5xl mx-auto mt-10 relative">
      <h2 className="text-2xl font-bold mb-5 text-center text-[var(--secondary-color)]">
        Autos destacados
      </h2>

      <div ref={sliderRef} className="keen-slider">
        {autos.map((auto) => (
          <div key={auto.id_Autos} className="keen-slider__slide flex justify-center">
            <ArticleVehiculo
              id={auto.id_Autos}
              marca={auto.marca}
              modelo={auto.modelo || "Modelo desconocido"}
              año={auto.año_Modelo}
              imagen={auto.imagen}
            />
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full shadow hover:bg-gray-200"
      >
        ◀
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full shadow hover:bg-gray-200"
      >
        ▶
      </button>
    </section>
  );
}
