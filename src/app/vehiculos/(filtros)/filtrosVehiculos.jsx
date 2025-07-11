import { useState } from "react";

export default function FiltrosVehiculos({ onBuscar }) {
  const [marca, setMarca] = useState("");
  const [tipo, setTipo] = useState("");
  const [estado, setEstado] = useState(null); // "0km", "usado" o null
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Filtros a buscar:", { marca, tipo, estado });
    onBuscar({ marca, tipo, estado });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-10 justify-between items-center rounded w-full py-2 px-4"
    >
      <div className="flex flex-wrap gap-2 items-center justify-center">
        <input
          list="tipo"
          id="tipo"
          name="tipo"
          placeholder="Tipo de Vehículo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
        <input
          list="marca"
          id="marca"
          name="marca"
          placeholder="Marca"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-[var(--secondary-color)] rounded py-2 px-4 cursor-pointer text-[var(--thirty-color)]"
      >
        Buscar
      </button>
    </form>
  );
}
