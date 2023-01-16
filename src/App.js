import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MyContext from "./context/my_context";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default

  function App() {
  const [fotos, setFotos] = useState([]);
  const [query, setQuery] = useState("nature");
  const access_token = '563492ad6f917000010000016ac4f3161470455e8300a4bbfe396fb4';

  const getFotos = async () => {
    const res = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {

      headers: {
        'Authorization': `${access_token}`,
      },

    }
    )
    let { photos } = await res.json();

    photos = photos.map((photo) => ({
      id: photo.id,
      src: photo.src.tiny,
      desc: photo.alt,
      favorito: false

    }));
    setFotos(photos)
  };

  useEffect(() => {
    getFotos();

  }, []);


  return (
    <div className="App">
      <MyContext.Provider value={{ fotos, setFotos }}>
        <BrowserRouter>

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>


        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

