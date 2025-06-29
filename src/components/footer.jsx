export default function Footer() {
  return (
    <footer className="px-15 pt-5 flex flex-col items-center justify-center bg-transparent border-t-1">
      <div className="w-full flex justify-between items-center">
        <div>
          <div>I F T W</div>
          <div>Políticas</div>
          <div>Contacto</div>
          <div>Home</div>
        </div>
        <div className="flex flex-col gap-2">
          <span>San Nicolás de los Arroyos</span>
          <span>3364-000000</span>
          <span>@gmail.com</span>
        </div>
      </div>
      <div className="p-5">
        <span>@Copyright T.U.P 2025</span>
      </div>
    </footer>
  )
}
