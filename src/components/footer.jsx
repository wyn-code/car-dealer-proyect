export default function Footer() {
  return (
    <footer className="px-10 pt-5 flex flex-col items-center justify-center bg-transparent border-t-1">
      <div className="max-w-6xl w-full flex justify-between items-center">
        <div className="min-w-50">
          <div className="border-b flex items-center justify-between p-2">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-outlined/24/instagram-new--v1.png"
              alt="instagram-new--v1"
            />
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-sharp/24/facebook-new.png"
              alt="facebook-new"
            />
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ios-glyphs/30/tiktok.png"
              alt="tiktok"
            />
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-outlined/24/whatsapp--v1.png"
              alt="whatsapp--v1"
            />
          </div>
          <div className="border-b p-2">
            <a href="#">Políticas</a>
          </div>
          <div className="border-b p-2">
            <a href="#">Contacto</a>
          </div>
          <div className="p-2">
            <a href="#">Home</a>
          </div>
        </div>
        <div className="flex flex-col gap-2 font-semibold">
          <div className="flex items-center gap-2">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/marker.png"
              alt="marker"
            />
            <span>San Nicolás de los Arroyos</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/windows/32/phone.png"
              alt="phone"
            />
            <span>3364-000000</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-outlined/24/mail.png"
              alt="mail"
            />
            <span>@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="p-5 font-semibold">
        <span>@Copyright T.U.P 2025</span>
      </div>
    </footer>
  );
}
