import Ofertas from "./(ofertas)/ofertas";

export default function Home() {
  return (
    <>
      <div className="h-90 border-b-1">
        <img src="/assets/images/inicio.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      <Ofertas />
    </>
  );
}
