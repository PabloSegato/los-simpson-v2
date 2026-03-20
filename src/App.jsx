import "./app.css";
import { Cards } from "./pages/Cards";
import { Pagination } from "./pages/Pagination";
export const App = () => {
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

      <form className="search-seccion">
        <input type="text" placeholder="Buscar personaje ..." />
        <button>TODOS </button>
        <button>MALE</button>
        <button>FEMALE </button>
        <button>ALIVE</button>
      </form>
      <h3 id="title-pagination">PERSONAJES - PÁGINA 1</h3>
      <Cards />
      <Pagination />

      <footer>LOS SIMPSON APP - SPRINGFIELD DATABASE</footer>
    </div>
  );
};
