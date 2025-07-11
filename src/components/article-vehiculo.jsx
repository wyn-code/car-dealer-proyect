export default function ArticleVehiculo({ marca, modelo, año, imagen }) {
  return (
    <article className="w-[45%] bg-white p-4 rounded-xl shadow">
      <img src={imagen} alt={`${marca} ${modelo}`} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-lg font-bold mt-2">{marca} {modelo}</h3>
      <p className="text-sm text-gray-500">Año: {año}</p>
    </article>
  );
}