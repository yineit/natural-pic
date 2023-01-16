import { useContext } from "react";
import MyContext from "../context/my_context";
import "../assets/css/galeria.css";
import Heart from "./Heart";


export default function Home() {
  const { fotos, setFotos } = useContext(MyContext);

  const setLike = (id) => {
    const fotoIndex = fotos.findIndex((f) => f.id === id);
    fotos[fotoIndex].favorito = !fotos[fotoIndex].favorito;
    setFotos([...fotos])
  };

  return (
    <div className="galeria grid-columns-4 p-3">
      {
        fotos.map((foto, i) => (
          <div
            onClick={() => setLike(foto.id)}
            className="foto"
            style={{ backgroundImage: `url(${foto.src})` }}
            key={i}
          >
            <Heart filled={foto.favorito} />
            <p>{foto.desc}</p>
          </div>
        ))
      }
    </div>
  );
}