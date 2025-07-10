export default function ArticleVehiculo({ oferta }) {
  // Datos de ejemplo si no se pasan props
  const defaultOferta = {
    id: 1,
    marca: "Ford",
    modelo: "Fiesta",
    precio: 15000000,
    img: "/assets/images/fotosPrueba/Fiesta.jpg",
  };

  const data = oferta || defaultOferta;

  return (
    <article
      key={data.id}
      className="!border-none flex flex-col justify-center items-center gap-5 max-w-lg"
    >
      <div className="relative shadow-lg shadow-black/60">
        <img
          src={data.img}
          alt={`${data.marca} ${data.modelo}`}
          className="w-full object-cover rounded-sm"
        />
        <div className="p-3 rounded absolute top-0 bg-black/50 shadow-lg shadow-black/80">
          <h3 className="text-xl font-bold text-[var(--thirty-color)]">
            {data.marca} {data.modelo}
          </h3>
        </div>
      </div>
      <a href="/comprar" className="bg-[var(--thirty-color)] font-extrabold border px-7 rounded-lg shadow-lg shadow-black/20 cursor-pointer">
        Ver
      </a>
    </article>
  );
}
