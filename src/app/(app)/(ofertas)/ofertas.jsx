import CardOfertas from "./card-ofertas";

export default function Ofertas() {
  return (
    <div className="px-10 py-20 flex flex-col justify-center items-center gap-10">
      <h2 className="font-bold text-4xl">OFERTAS</h2>
      <div className="h-50 w-full flex justify-between items-center max-w-3xl">
        <button className="w-8 h-8 border rounded-full"></button>
        <CardOfertas />
        <button className="w-8 h-8 border rounded-full"></button>
      </div>
    </div>
  );
}
