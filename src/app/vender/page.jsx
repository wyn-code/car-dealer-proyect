"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Label } from "@/components/ui/label" // Solo importamos Label

export default function Vender() {
  const [tipos, setTipos] = useState([])
  const [condiciones, setCondiciones] = useState([])
  const [loading, setLoading] = useState(true) // Para controlar carga
  const [auto, setAuto] = useState({
    marca: "",
    motor: "",
    descripcion: "",
    año_Modelo: "",
    id_Tipo_Auto: "",
    id_condicion: "",
    precio: "",
    disponible: true,
    imageUrl: "",
  })
  const [previewImage, setPreviewImage] = useState(null)

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const [resTipos, resCondiciones] = await Promise.all([
          fetch("https://localhost:7288/api/tiposAutos"),
          fetch("https://localhost:7288/api/condiciones"),
        ])

        console.log("Status tipos:", resTipos.status)
        console.log("Status condiciones:", resCondiciones.status)

        if (!resTipos.ok || !resCondiciones.ok) {
          throw new Error("Error al cargar datos")
        }

        setTipos(await resTipos.json())
        setCondiciones(await resCondiciones.json())
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    cargarDatos()
  }, [])

  const handleChange = (e) => {
    const { name, value, type } = e.target
    const target = e.target

    if (type === "file" && target.files) {
      const file = target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setPreviewImage(reader.result)
          setAuto((prev) => ({
            ...prev,
            imageUrl: "", // Clear imageUrl if a file is selected
          }))
        }
        reader.readAsDataURL(file)
      } else {
        setPreviewImage(null)
      }
    } else {
      setAuto((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? target.checked : value,
      }))
      if (name === "imageUrl") {
        setPreviewImage(null)
      }
    }
  }

  const handleSelectChange = (e) => {
    // Cambiado para manejar el evento directamente
    const { name, value } = e.target
    setAuto((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let finalImageUrl = auto.imageUrl
    if (previewImage && !auto.imageUrl) {
      finalImageUrl = previewImage
    }

    const autoParaEnviar = {
  marca: auto.marca,
  motor: auto.motor,
  descripcion: auto.descripcion,
  año_Modelo: Number.parseInt(auto.año_Modelo),
  id_Tipo_Auto: Number.parseInt(auto.id_Tipo_Auto),
  id_condicion: Number.parseInt(auto.id_condicion),
  precio: Number.parseFloat(auto.precio),
  disponible: auto.disponible,
  imageUrl: finalImageUrl,
};

    try {
      const res = await fetch("https://localhost:7288/api/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(autoParaEnviar),
      })
      if (!res.ok) throw new Error("Error al enviar auto")
      const data = await res.json()
      console.log("Auto publicado", data)
      alert("¡Auto publicado con éxito!")
      setAuto({
        marca: "",
        motor: "",
        descripcion: "",
        año_Modelo: "",
        id_Tipo_Auto: "",
        id_condicion: "",
        precio: "",
        disponible: true,
        imageUrl: "",
      })
      setPreviewImage(null)
    } catch (error) {
      console.error("Error:", error)
      alert("Error al publicar el auto")
    }
  }

  if (loading) {
    return (
      <section className="flex items-center justify-center p-8">
        <p>Cargando datos...</p>
      </section>
    )
  }

  return (
    <section className="flex flex-col items-center justify-between p-8 gap-10">
      {/* Usando un div simple en lugar de Card */}
      <div className="bg-[var(--secondary-color)] max-w-2xl w-full p-10 rounded-2xl flex flex-col gap-5 items-center text-[var(--thirty-color)] text-center">
        <div>
          <h2>Vender</h2>
          <p className="text-sm">Publicá tu vehiculo y conectalo con miles de compradores interesados!</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5 bg-[var(--secondary-color)] p-5 rounded w-full"
        >
          <div className="w-full flex flex-wrap gap-5 justify-between">
            {/* Usando input HTML nativo */}
            <input
              type="text"
              placeholder="Marca"
              name="marca"
              value={auto.marca}
              onChange={handleChange}
              className="w-[48%] p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Motor"
              name="motor"
              value={auto.motor}
              onChange={handleChange}
              className="w-[48%] p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Precio"
              name="precio"
              value={auto.precio}
              onChange={handleChange}
              className="w-[48%] p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Año"
              name="año_Modelo"
              value={auto.año_Modelo}
              onChange={handleChange}
              className="w-[48%] p-2 border rounded"
            />
            {/* Usando textarea HTML nativo */}
            <textarea
              placeholder="Descripción"
              name="descripcion"
              value={auto.descripcion}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {/* Usando select HTML nativo */}
            <select
              name="id_Tipo_Auto"
              value={auto.id_Tipo_Auto}
              onChange={handleSelectChange}
              className="w-[48%] p-2 border rounded"
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
              onChange={handleSelectChange}
              className="w-[48%] p-2 border rounded"
            >
              <option value="">Seleccioná condición</option>
              {condiciones.map((c) => (
                <option key={c.id_condicion} value={c.id_condicion}>
                  {c.condicionName}
                </option>
              ))}
            </select>
            <div className="md:col-span-2 grid gap-2">
              <Label htmlFor="imageUrl">URL de la Imagen</Label> {/* Aquí sí usamos Label de shadcn/ui */}
              <input
                id="imageUrl"
                type="text"
                placeholder="Pega la URL de la imagen aquí"
                name="imageUrl"
                value={auto.imageUrl}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="md:col-span-2 grid gap-2">
              <Label htmlFor="imageUpload">O sube una imagen</Label> {/* Aquí sí usamos Label de shadcn/ui */}
              <input
                id="imageUpload"
                type="file"
                name="imageUpload"
                accept="image/*"
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            {(previewImage || auto.imageUrl) && (
              <div className="md:col-span-2 flex justify-center mt-4">
                <Image
                  src={previewImage || auto.imageUrl}
                  alt="Vista previa de la imagen"
                  width={300}
                  height={200}
                  className="object-cover rounded-md border"
                />
              </div>
            )}
          </div>
          <label className="flex gap-2 font-bold">
            Disponible:
            {/* Usando input type="checkbox" HTML nativo */}
            <input type="checkbox" name="disponible" checked={auto.disponible} onChange={handleChange} />
          </label>
          {/* Usando button HTML nativo */}
          <button
            type="submit"
            className="bg-[var(--secondary-color)] rounded-lg py-2 px-10 cursor-pointer text-[var(--thirty-color)]"
          >
            Publicar
          </button>
        </form>
      </div>
    </section>

  )
});
}

