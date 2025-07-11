"use client";
import { useEffect, useState } from "react";

export default function Vender() {
  const [modelos, setModelos] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [condiciones, setCondiciones] = useState([]);
  const [loading, setLoading] = useState(true); // Para controlar carga
  const [auto, setAuto] = useState({
    marca: "",
    motor: "",
    descripcion: "",
    año_Modelo: "",
    id_Modelo: "",
    id_Tipo_Auto: "",
    id_condicion: "",
    precio: "",
    disponible: true,
  });

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const [resModelos, resTipos, resCondiciones] = await Promise.all([
          fetch("https://localhost:7247/api/modelos"),
          fetch("https://localhost:7247/api/tiposAutos"),
          fetch("https://localhost:7247/api/condiciones"),
        ]);

         console.log("Status modelos:", resModelos.status);
         console.log("Status tipos:", resTipos.status);
        console.log("Status condiciones:", resCondiciones.status);

        if (!resModelos.ok || !resTipos.ok || !resCondiciones.ok) {
          throw new Error("Error al cargar datos");
        }

        setModelos(await resModelos.json());
        setTipos(await resTipos.json());
        setCondiciones(await resCondiciones.json());
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAuto((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const autoParaEnviar = {
      marca: auto.marca,
      motor: auto.motor,
      descripcion: auto.descripcion,
      año_Modelo: parseInt(auto.año_Modelo),
      id_Modelo: parseInt(auto.id_Modelo),
      id_Tipo_Auto: parseInt(auto.id_Tipo_Auto),
      id_condicion: parseInt(auto.id_condicion),
      precio: parseFloat(auto.precio),
      disponible: auto.disponible,
    };

    try {
      const res = await fetch("https://localhost:7247/api/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(autoParaEnviar),
      });

      if (!res.ok) throw new Error("Error al enviar auto");

      const data = await res.json();
      console.log("Auto publicado", data);
      alert("¡Auto publicado con éxito!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error al publicar el auto");
    }
  };

  // Mostrar loader o mensaje simple mientras cargan datos (evita mismatch)
  if (loading) {
    return (
      <section className="flex items-center justify-center p-8">
        <p>Cargando datos...</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center justify-between p-8 gap-10">
      <section className="bg-[var(--secondary-color)] max-w-2xl w-full p-10 rounded-2xl flex flex-col gap-5 items-center text-[var(--thirty-color)] text-center">
        <div>
          <h2>Vender</h2>
          <p className="text-sm">
            Publicá tu vehiculo y conectalo con miles de compradores interesados!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5 bg-[var(--secondary-color)] p-5 rounded w-full"
        >
          <div className="w-full flex flex-wrap gap-5 justify-between">
            <input
              type="text"
              placeholder="Marca"
              name="marca"
              value={auto.marca}
              onChange={handleChange}
              className="w-[48%]"
            />
            <input
              type="text"
              placeholder="Motor"
              name="motor"
              value={auto.motor}
              onChange={handleChange}
              className="w-[48%]"
            />
            <input
              type="number"
              placeholder="Precio"
              name="precio"
              value={auto.precio}
              onChange={handleChange}
              className="w-[48%]"
            />
            <input
              type="number"
              placeholder="Año"
              name="año_Modelo"
              value={auto.año_Modelo}
              onChange={handleChange}
              className="w-[48%]"
            />
            <textarea
              placeholder="Descripción"
              name="descripcion"
              value={auto.descripcion}
              onChange={handleChange}
              className="w-full"
            />
            {/* Selects dinámicos */}
            <select
              name="id_Modelo"
              value={auto.id_Modelo}
              onChange={handleChange}
              className="w-[48%]"
            >
              <option value="">Seleccioná modelo</option>
              {modelos.map((m) => (
                <option key={m.id_Modelo} value={m.id_Modelo}>
                  {m.nombre_Modelo}
                </option>
              ))}
            </select>

            <select
              name="id_Tipo_Auto"
              value={auto.id_Tipo_Auto}
              onChange={handleChange}
              className="w-[48%]"
            >
              <option value="">Seleccioná tipo de auto</option>
              {tipos.map((t) => (
                <option key={t.id_Tipo_Auto} value={t.id_Tipo_Auto}>
                  {t.tipo_autos}
                </option>
              ))}
            </select>

            <select
              name="id_condicion"
              value={auto.id_condicion}
              onChange={handleChange}
              className="w-[48%]"
            >
              <option value="">Seleccioná condición</option>
              {condiciones.map((c) => (
                <option key={c.id_condicion} value={c.id_condicion}>
                  {c.condicionName}
                </option>
              ))}
            </select>
          </div>

          <label className="flex gap-2 font-bold">
            Disponible:
            <input
              type="checkbox"
              name="disponible"
              checked={auto.disponible}
              onChange={handleChange}
            />
          </label>

          <button
            type="submit"
            className="bg-[var(--secondary-color)] rounded-lg py-2 px-10 cursor-pointer text-[var(--thirty-color)]"
          >
            Publicar
          </button>
        </form>
      </section>
    </section>
  );
}
