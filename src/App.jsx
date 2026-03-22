import { useState } from "react";
import "./app.css";
import { Cards } from "./components/Cards";
import { Pagination } from "./components/Pagination";
import { url } from "./constants.js";
import { useFetch } from "./hooks/useFetch.jsx";
export const App = () => {
  const [page, setPage] = useState(1);
  const API_URL = `${url}/characters?page=${page}`;
  const { data } = useFetch(API_URL, page);
  const [inputSearch, setInputSearch] = useState("");

  const handleSubmit = () => {
    event.preventDefault();
  };

  const handleInputChange = () => {
    setInputSearch(event.target.value);
  };

  return (
    <div className="container">
      <h1>LOS SIMPSONS</h1>
      <h2>APP - SPRINGFIELD DATABASE</h2>
      <ul>
        {/* pasar informacion del fetch con un contexto  de total personajes y paginas */}

        <li>
          <span>1182</span>Personajes{" "}
        </li>
        <li>
          <span>68</span>Páginas{" "}
        </li>
        <li>Springfield, USA</li>
      </ul>

      <form className="search-seccion" onClick={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar personaje ..."
          onChange={handleInputChange}
          value={inputSearch}
        />
        <button>TODOS </button>
        <button>MALE</button>
        <button>FEMALE </button>
        <button>ALIVE</button>
      </form>
      <h3 id="title-pagination">PERSONAJES - PÁGINA {page}</h3>
      <Cards data={data} inputSearch={inputSearch} />
      <button onClick={() => page > 1 && setPage(page - 1)}>
        {" "}
        Pagina anterior{" "}
      </button>
      <button onClick={() => setPage(page + 1)}> Siguiente pagina</button>

      <Pagination />

      <footer
        style={{
          height: "80px",
          width: "100vw",
          backgroundColor: "black",
          color: "white",
        }}
      >
        LOS SIMPSON APP - SPRINGFIELD DATABASE
      </footer>
    </div>
  );
};
