<<<<<<< HEAD
"use client"
import { useEffect, useState } from "react"
=======
"use client";
import { useEffect, useState } from "react";
>>>>>>> a013ec328a2b2aba9cece95b053305aec03a433f

export default function Comprar() {
  const [autos, setAutos] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [condiciones, setCondiciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eliminandoGlobal, setEliminandoGlobal] = useState(false);

  // Estado para edición
  const [modalOpen, setModalOpen] = useState(false);
  const [editAuto, setEditAuto] = useState(null);
  const [formData, setFormData] = useState({
    Marca: "",
    Precio: 0,
    Disponible: false,
    Motor: "",
    Año_Modelo: 0,
    id_Tipo_Auto: "", // string para select, usar minúsculas exactas
  });

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const [resAutos, resTipos, resCondiciones] = await Promise.all([
          fetch("https://localhost:7288/api/cars"),
          fetch("https://localhost:7288/api/tiposAutos"),
          fetch("https://localhost:7288/api/condiciones"),
        ]);

        if (!resAutos.ok || !resTipos.ok || !resCondiciones.ok)
          throw new Error("Error al traer datos");

        const autosData = await resAutos.json();
        const tiposData = await resTipos.json();
        const condicionesData = await resCondiciones.json();

        setAutos(autosData);
        setTipos(tiposData);
        setCondiciones(condicionesData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDatos();
  }, []);

  const handleEliminar = async (carId, marca) => {
    if (!confirm(`¿Estás seguro de que quieres eliminar el auto ${marca}?`)) {
      return;
    }

    setEliminandoGlobal(true);
    try {
      if (!carId) {
        console.error("Error: El ID del auto es indefinido.");
        alert("No se pudo eliminar el auto: ID no encontrado.");
        return;
      }
      const response = await fetch(`https://localhost:7288/api/cars/${carId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setAutos((prevAutos) => prevAutos.filter((auto) => auto.id_Autos !== carId));
        alert("Auto eliminado exitosamente.");
      } else {
        alert("Error al eliminar el auto.");
      }
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("Error de conexión al intentar eliminar el auto.");
    } finally {
      setEliminandoGlobal(false);
    }
  };

  const getTipoNombre = (id) => {
    const tipo = tipos.find((t) => t.id_Tipo_Auto === id);
    return tipo ? tipo.tipo_autos : "Desconocido";
  };

  const getCondicionNombre = (id) => {
    const condicion = condiciones.find((c) => c.Id_condicion === id);
    return condicion ? condicion.condicionName : "Desconocido";
  };

  // Abre modal con datos del auto seleccionado
  const abrirModalEditar = (auto) => {
    setEditAuto(auto);
    setFormData({
      Marca: auto.marca,
      Precio: auto.precio,
      Disponible: auto.disponible,
      Motor: auto.motor,
      Año_Modelo: auto.año_Modelo,
      id_Tipo_Auto: auto.id_Tipo_Auto?.toString() || "",
    });
    setModalOpen(true);
  };

  // Maneja cambios en el formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : name === "id_Tipo_Auto"
          ? value
          : type === "number"
          ? Number(value)
          : value,
    }));
  };

  // Enviar update al backend
  const handleGuardar = async () => {
    if (!editAuto) return;

    if (!formData.id_Tipo_Auto) {
      alert("Por favor, seleccione un tipo de auto válido.");
      return;
    }

    try {
      const response = await fetch(`https://localhost:7288/api/cars/${editAuto.id_Autos}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Marca: formData.Marca,
          Precio: formData.Precio,
          Disponible: formData.Disponible,
          Motor: formData.Motor,
          Año_Modelo: formData.Año_Modelo,
          Id_Tipo_Auto: Number(formData.id_Tipo_Auto), // backend espera número
        }),
      });

      if (response.ok) {
        const updatedAuto = await response.json();
        setAutos((prevAutos) =>
          prevAutos.map((auto) => (auto.id_Autos === editAuto.id_Autos ? updatedAuto : auto))
        );
        alert("Auto actualizado correctamente.");
        setModalOpen(false);
        setEditAuto(null);
      } else {
        const errorData = await response.json();
        alert("Error al actualizar el auto: " + JSON.stringify(errorData));
      }
    } catch (error) {
      console.error("Error al actualizar:", error);
      alert("Error de conexión al actualizar el auto.");
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Cargando autos...</p>;
  }

  if (autos.length === 0) {
    return <p className="text-center mt-10">No hay autos publicados.</p>;
  }

  return (
    <>
      <section className="flex flex-col items-center justify-between p-8 gap-10">
        {autos.map((auto) => {
          const autoId = auto.id_Autos;

          return (
            <section
              key={autoId}
              className="bg-[var(--secondary-color)] max-w-5xl w-full p-10 rounded-2xl flex flex-col gap-5 items-center text-[var(--thirty-color)] text-center"
            >
              <h2 className="text-2xl font-bold">Auto publicado</h2>
              <div className="w-full flex gap-10 justify-between">
                <div className="flex items-center justify-center border rounded w-full h-85 bg-white">
                  <img
                    src={auto.imagen || "https://via.placeholder.com/400x300"}
                    alt={auto.marca}
                    className="object-contain max-h-80"
                  />
                </div>
                <div className="w-full flex flex-col font-extrabold items-start text-xl text-[var(--secondary-color)] bg-[var(--thirty-color)] p-5 rounded gap-2">
                  <span>Marca: {auto.marca}</span>
                  <span>Motor: {auto.motor}</span>
                  <span>Descripción: {auto.descripcion}</span>
                  <span>Tipo: {getTipoNombre(auto.id_Tipo_Auto)}</span>
                  <span>Año: {auto.año_Modelo}</span>
                  <span>Condición: {getCondicionNombre(auto.id_condicion)}</span>
                  <span>Precio: ${auto.precio}</span>
                  <span>Disponible: {auto.disponible ? "Sí" : "No"}</span>
                  <button
                    className="bg-[var(--secondary-color)] rounded-lg py-2 px-10 cursor-pointer text-[var(--thirty-color)] self-end mt-4"
                    onClick={() => abrirModalEditar(auto)}
                  >
                    Editar Auto
                  </button>
                </div>
              </div>
              {autoId && (
                <button
                  onClick={() => handleEliminar(autoId, auto.marca)}
                  disabled={eliminandoGlobal}
                  className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 disabled:opacity-50 mt-4"
                >
                  {eliminandoGlobal ? "Eliminando..." : "Eliminar Auto"}
                </button>
<<<<<<< HEAD
              </div>
            </div>
            {autoId && (
              <button
                onClick={() => handleEliminar(autoId, auto.marca, auto.modelo)} // Pasa 'id_Autos'
                disabled={eliminandoGlobal}
                className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 disabled:opacity-50 mt-4"
              >
                {eliminandoGlobal ? "Eliminando..." : "Eliminar Auto"}
              </button>
            )}
          </section>
        )
      })}
    </section>
  )
=======
              )}
            </section>
          );
        })}
      </section>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-lg w-full relative">
            <h3 className="text-xl font-bold mb-4">Editar Auto</h3>
            <div className="flex flex-col gap-3">
              <label>
                Marca:
                <input
                  type="text"
                  name="Marca"
                  value={formData.Marca}
                  onChange={handleChange}
                  className="border p-1 rounded w-full"
                />
              </label>
              <label>
                Precio:
                <input
                  type="number"
                  name="Precio"
                  value={formData.Precio}
                  onChange={handleChange}
                  className="border p-1 rounded w-full"
                  min={0.01}
                  step="0.01"
                />
              </label>
              <label>
                Disponible:
                <input
                  type="checkbox"
                  name="Disponible"
                  checked={formData.Disponible}
                  onChange={handleChange}
                  className="ml-2"
                />
              </label>
              <label>
                Motor:
                <input
                  type="text"
                  name="Motor"
                  value={formData.Motor}
                  onChange={handleChange}
                  className="border p-1 rounded w-full"
                />
              </label>
              <label>
                Año Modelo:
                <input
                  type="number"
                  name="Año_Modelo"
                  value={formData.Año_Modelo}
                  onChange={handleChange}
                  className="border p-1 rounded w-full"
                  min={1800}
                  max={2025}
                />
              </label>
              <label>
                Tipo de Auto:
                <select
                  name="id_Tipo_Auto"
                  value={formData.id_Tipo_Auto}
                  onChange={handleChange}
                  className="border p-1 rounded w-full"
                >
                  <option value="">Seleccione un tipo</option>
                  {tipos.map((tipo) => (
                    <option key={tipo.id_Tipo_Auto} value={tipo.id_Tipo_Auto.toString()}>
                      {tipo.tipo_autos}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setModalOpen(false);
                  setEditAuto(null);
                }}
                className="bg-gray-300 rounded px-4 py-2 hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleGuardar}
                className="bg-[var(--secondary-color)] text-[var(--thirty-color)] rounded px-4 py-2 hover:bg-blue-600"
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
>>>>>>> a013ec328a2b2aba9cece95b053305aec03a433f
}
