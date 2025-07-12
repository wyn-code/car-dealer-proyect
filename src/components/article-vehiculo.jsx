export default function ArticleVehiculo({ id, marca, modelo, año, imagen }) {
  return (
    <article className="!border-none flex flex-col justify-center items-center gap-5 max-w-lg">
      <div className="relative shadow-lg shadow-black/60 w-full">
        <img
          src={imagen}
          alt={`${marca} ${modelo}`}
          className="w-full h-40 object-cover rounded-sm"
        />
        <div className="p-3 rounded absolute top-0 bg-black/50 shadow-lg shadow-black/80">
          <h3 className="text-xl font-bold text-[var(--thirty-color)]">
            {marca} {modelo}
          </h3>
        </div>
      </div>
      <p className="text-sm text-gray-500">Año: {año}</p>

      {/* 👇 Pasás el id como query param */}
      <a
        href={`/comprar?id=${id}`}
        className="bg-[var(--thirty-color)] font-extrabold border px-7 py-1.5 rounded-lg shadow-lg shadow-black/20 cursor-pointer"
      >
        Ver
      </a>
    </article>
  );
}
