export default function CardOfertas() {
  const vOfertas = [
    {
      id: 1,
      marca: "Volkswagen",
      modelo: "Gol",
      precio: 12000000,
      img: "/assets/images/fotosPrueba/golTrend.jpeg",
    },
    {
      id: 2,
      marca: "Chevrolet",
      modelo: "Onix",
      precio: 15000000,
      img: "/assets/images/fotosPrueba/Onix.jpg",
    },
    // {
    //   id: 3,
    //   marca: "Fiat",
    //   modelo: "Uno",
    //   precio: 9000000,
    //   img: "/assets/images/fotosPrueba/Uno.jpg",
    // },
    // {
    //   id: 4,
    //   marca: "Ford",
    //   modelo: "Fiesta",
    //   precio: 18000000,
    //   img: "/assets/images/fotosPrueba/Fiesta.jpg",
    // },
  ];

  return (
    <div className="flex px-5 gap-5">
      {vOfertas.map((oferta) => (
        <article
          key={oferta.id}
          className="!border-none flex flex-col justify-center relative"
        >
          <img
            src={oferta.img}
            alt={`${oferta.marca} ${oferta.modelo}`}
            className="w-full h-40 object-cover rounded-md"
          />
          <div className="p-2 absolute top-0 bg-black/50">
            <h3 className="text-lg font-semibold text-gray-800">
              {oferta.marca} {oferta.modelo}
            </h3>
            <p className="text-2xl font-bold text-blue-600 mt-2">
              ${oferta.precio.toLocaleString()}
            </p>
          </div>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Ver Detalles
          </button>
        </article>
      ))}
    </div>
  );
}
