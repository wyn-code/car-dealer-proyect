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
        <div className="flex gap-5 items-center justify-center">
          <label htmlFor="0km" className="flex gap-1 items-center">
            0km:
            <input
              type="checkbox"
              id="0km"
              checked={estado === "0km"}
              onChange={() => setEstado(estado === "0km" ? null : "0km")}
              disabled={estado === "usado"}
            />
          </label>
          <label htmlFor="usado" className="flex gap-1 items-center">
            Usado:
            <input
              type="checkbox"
              id="usado"
              checked={estado === "usado"}
              onChange={() => setEstado(estado === "usado" ? null : "usado")}
              disabled={estado === "0km"}
            />
          </label>
        </div>
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
