import img1 from "../../../../public/assets/images/fotosPrueba/nissan.png";
import img2 from "../../../../public/assets/images/fotosPrueba/ford.png";
import img3 from "../../../../public/assets/images/fotosPrueba/toyota.png";
import img4 from "../../../../public/assets/images/fotosPrueba/honda.png";
import ArticleMarcas from "./article-marcas";

export default function Marcas() {
  const marcas = [
    {
      url: img1,
      alter: "Nissan",
    },
    {
      url: img2,
      alter: "Ford",
    },
    {
      url: img3,
      alter: "Toyota",
    },
    {
      url: img4,
      alter: "Honda",
    },
  ];

  return (
    <section id="marcas" className="flex flex-col justify-center items-center">
      <h2>MARCAS</h2>
      <div className="flex flex-col items-center gap-10 w-full">
        <div className="flex gap-10 flex-wrap justify-center">
          {marcas.map((marca, index) => (
            <ArticleMarcas key={index} url={marca.url} alter={marca.alter} />
          ))}
        </div>
      </div>
    </section>
  );
}

