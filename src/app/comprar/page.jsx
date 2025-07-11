export default function Comprar() {
  return (
    <section className="flex flex-col items-center justify-between !p-8 gap-10">
      <section className="bg-[var(--secondary-color)] max-w-5xl w-full !p-10 rounded-2xl flex flex-col gap-5 items-center text-[var(--thirty-color)] text-center">
        <h2>Comprar</h2>
        <div className="w-full flex gap-10 justify-between">
          <div className="flex items-center justify-center border rounded w-full h-85">
            img
          </div>
          <div className="w-full flex flex-col font-extrabold items-start text-xl text-[var(--secondary-color)] bg-[var(--thirty-color)] p-5 rounded">
            <span>Modelo:</span>
            <span>Marca:</span>
            <span>Motor:</span>
            <span>Descripcion:</span>
            <span>Localidad:</span>
            <span>Provincia:</span>
            <span>Tipo:</span>
            <span>Año:</span>
            <span>Usado:</span>
            <button
              type="sumbit"
              className="bg-[var(--secondary-color)] rounded-lg py-2 px-10 cursor-pointer text-[var(--thirty-color)] self-end"
            >
              Comprar
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
