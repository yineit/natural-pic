
import { useContext } from "react";
import MyContext from "../context/my_context";

export default function Favoritos() {
  const { fotos, setFotos } = useContext(MyContext);
  const num_fotos_favoritas = (fotos.filter((foto) => foto.favorito)).length;
  return (
    <div>
      <h1>Favoritas</h1>
      
        <div className="p-3 galeria grid-columns-4">
         {
num_fotos_favoritas == 0 ?
<p>No hay favoritas</p>:
fotos
.filter((foto) => foto.favorito)
.map((foto, i) => (
<img src={foto.src} alt="" key={i} />
)
)

         } 
        </div>
      
    </div>
  );
}
