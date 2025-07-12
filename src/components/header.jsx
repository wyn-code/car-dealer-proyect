import Link from "next/link";

export default function Header() {
  return (
    <header
      className="
      w-full px-8 py-2
      border-b
      sticky top-0
      flex flex-wrap justify-between items-center
      gap-2
      shadow-2xl shadow-black/50 z-10
    "
    >
      <a href="/" className="text-2xl font-bold hover:text-blue-500 transition-colors duration-200">
        Vehicle Store
      </a>

      <nav>
        <ul className="flex flex-wrap justify-center items-center gap-4 font-semibold">
          <li className="p-3 cursor-pointer hover:text-blue-500 transition-colors duration-200">
            <Link href="/vehiculos">Autos</Link>
          </li>
          <li className="p-3 cursor-pointer hover:text-blue-500 transition-colors duration-200">
            <a href="#footer">Nosotros</a>
          </li>
          <li className="p-3 cursor-pointer hover:text-blue-500 transition-colors duration-200">
            <Link href="#servicios">Servicios</Link>
          </li>
          <li className="p-3 cursor-pointer hover:text-blue-500 transition-colors duration-200">
            <Link href="/vender">Vender</Link>
          </li>
        </ul>
      </nav>

      <div className="flex justify-center items-center gap-4">
        <button className="p-1.75 border-2 rounded-sm">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/shopping-cart--v1.png"
            alt="shopping-cart--v1"
          />
        </button>
        <button className="p-1.75 border-2 rounded-sm">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/fluency-systems-filled/48/user.png"
            alt="user"
          />
        </button>
      </div>
    </header>
  );
}