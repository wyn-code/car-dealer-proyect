
"use client"
import { useEffect, useState } from "react"

export default function Comprar() {
  const [autos, setAutos] = useState([])
  const [modelos, setModelos] = useState([])
  const [tipos, setTipos] = useState([])
  const [condiciones, setCondiciones] = useState([])
  const [loading, setLoading] = useState(true)
  const [eliminandoGlobal, setEliminandoGlobal] = useState(false)

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const [resAutos, resModelos, resTipos, resCondiciones] = await Promise.all([
          fetch("https://localhost:7288/api/cars"),
          fetch("https://localhost:7288/api/modelos"),
          fetch("https://localhost:7288/api/tiposAutos"),
          fetch("https://localhost:7288/api/condiciones"),
        ])

        if (!resAutos.ok || !resModelos.ok || !resTipos.ok || !resCondiciones.ok)
          throw new Error("Error al traer datos")

        const autosData = await resAutos.json()
        const tiposData = await resTipos.json()
        const condicionesData = await resCondiciones.json()

        setAutos(autosData)
        setTipos(tiposData)
        setCondiciones(condicionesData)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchDatos()
  }, [])

  const handleEliminar = async (carId, marca, ) => {
    if (!confirm(`¿Estás seguro de que quieres eliminar el auto ${marca}?`)) {
      return
    }

    setEliminandoGlobal(true)
    try {
      if (!carId) {
        console.error("Error: El ID del auto es indefinido.")
        alert("No se pudo eliminar el auto: ID no encontrado.")
        return
      }
      const response = await fetch(`https://localhost:7288/api/cars/${carId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setAutos((prevAutos) => prevAutos.filter((auto) => auto.id_Autos !== carId))
        alert("Auto eliminado exitosamente.")
      } else {
        alert("Error al eliminar el auto.")
      }
    } catch (error) {
      console.error("Error al eliminar:", error)
      alert("Error de conexión al intentar eliminar el auto.")
    } finally {
      setEliminandoGlobal(false)
    }
  }

  const getTipoNombre = (id) => {
    const tipo = tipos.find((t) => t.Id_Tipo_Auto === id)
    return tipo ? tipo.tipo_autos : "Desconocido"
  }

  const getCondicionNombre = (id) => {
    const condicion = condiciones.find((c) => c.Id_condicion === id)
    return condicion ? condicion.condicionName : "Desconocido"
  }

  if (loading) {
    return <p className="text-center mt-10">Cargando autos...</p>
  }

  if (autos.length === 0) {
    return <p className="text-center mt-10">No hay autos publicados.</p>
  }

  return (
    <section className="flex flex-col items-center justify-between p-8 gap-10">
      {autos.map((auto) => {
        const autoId = auto.id_Autos

        return (
          <section
            key={autoId} 
            className="bg-[var(--secondary-color)] max-w-5xl w-full p-10 rounded-2xl flex flex-col gap-5 items-center text-[var(--thirty-color)] text-center"
          >
            <h2 className="text-2xl font-bold">Auto publicado</h2>
            <div className="w-full flex gap-10 justify-between">
              <div className="flex items-center justify-center border rounded w-full h-85">
                img 
              </div>
              <div className="w-full flex flex-col font-extrabold items-start text-xl text-[var(--secondary-color)] bg-[var(--thirty-color)] p-5 rounded">
                <span>Marca: {auto.marca}</span>
                <span>Motor: {auto.motor}</span>
                <span>Descripción: {auto.descripcion}</span>
                <span>Tipo: {getTipoNombre(auto.id_Tipo_Auto)}</span>
                <span>Año: {auto.año_Modelo}</span>
                <span>Condición: {getCondicionNombre(auto.condicionName)}</span>
                <span>Precio: ${auto.precio}</span>
                <span>Disponible: {auto.disponible ? "Sí" : "No"}</span>
                <button className="bg-[var(--secondary-color)] rounded-lg py-2 px-10 cursor-pointer text-[var(--thirty-color)] self-end mt-4">
                  Comprar
                </button>
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
      })
}

