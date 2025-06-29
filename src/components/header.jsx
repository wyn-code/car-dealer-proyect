export default function Header() {
  return (
    <header
      className="
      w-full h-14 bg-transparent
      flex justify-between items-center
      px-8 border-b-1
    "
    >
      <h1 className="text-2xl">LOGO</h1>
      <nav>
        <ul className="flex gap-4">
          <li><link rel="stylesheet" href="#" />Autos</li>
          <li>Nosotros</li>
          <li>Servicios</li>
          <li>Vender</li>
        </ul>
      </nav>
      <div className="flex justify-center items-center gap-4">
        <button className="p-2.5 border-2 rounded-sm"></button>
        <button className="p-2.5 border-2 rounded-sm"></button>
      </div>
    </header>
  );
}
