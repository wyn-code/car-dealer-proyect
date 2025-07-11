export default function Header() {
  return (
    <header
      className="
      w-full h-15 px-8
      border-b
      sticky top-0
      flex justify-between items-center
      shadow-2xl z-10
    "
    >
      <a href="/" className="text-2xl font-bold hover:text-blue-500 transition-colors duration-200">
        LOGO
      </a>

      <nav>
        <ul className="flex gap-4 font-semibold">
          <li>
            <a href="/vehiculos">Autos</a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="/vender">Vender</a>
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