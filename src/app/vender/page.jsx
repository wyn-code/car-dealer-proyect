export default function Vender() {
  return (
    <section className="flex flex-col items-center justify-between !p-8 gap-10">
      <section className="bg-[var(--secondary-color)] max-w-2xl w-full !p-10 rounded-2xl flex flex-col gap-5 items-center text-[var(--thirty-color)] text-center">
        <div>
          <h2 className="text-[var(--thirty-color)] ">Vender</h2>
          <p className="text-sm">
            Publicá tu vehiculo y conectalo con miles de compradores interesados!
          </p>
        </div>
        <form
          action="post"
          className=" flex flex-col items-center gap-5 bg-[var(--secondary-color)] p-5 rounded"
        >
          <div className="w-full flex justify-between flex-wrap gap-5 items-center">
            <input type="text" placeholder="Modelo" />
            <input type="text" placeholder="Marca" />
            <input type="text" placeholder="Motor" />
            <input type="text" placeholder="Descripcion" />
            <input type="text" placeholder="Localidad" />
            <input type="text" placeholder="Provincia" />
            <input type="text" placeholder="Tipo" />
            <input type="datetime" name="año" id="año" placeholder="Año" />
          </div>
          <label htmlFor="usado" className="flex font-bold">
            Usado:
            <input type="checkbox" name="usado" id="usado" />
          </label>
          <button
            type="sumbit"
            className="bg-[var(--secondary-color)] rounded-lg py-2 px-10 cursor-pointer text-[var(--thirty-color)]"
          >
            Publicar
          </button>
        </form>
      </section>
    </section>
  );
}
