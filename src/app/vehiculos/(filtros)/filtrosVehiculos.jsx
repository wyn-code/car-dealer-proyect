export default function FiltrosVehiculos() {
  return (
    <form
      action="sumbit"
      method="post"
      className="flex gap-10 justify-between items-center rounded w-full py-2 px-4 "
    >
      <div className="flex flex-wrap gap-2 items-center justify-center">
        <input
          list="tipo"
          id="tipo"
          name="tipo"
          placeholder="Tipo de Vehiculo"
        />
        <input list="marca" id="marca" name="marca" placeholder="Marca" />
        <div className="flex gap-5 items-center justify-center">
          <label htmlFor="0km" className="flex">
            0km:
            <input type="checkbox" name="0km" id="0km" />
          </label>
          <label htmlFor="usado" className="flex">
            Usado:
            <input type="checkbox" name="usado" id="usado" />
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
