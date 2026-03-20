import "./app.css";
import { Cards } from "./pages/Cards";
import { Pagination } from "./pages/Pagination";

export const App = () => {
  return (
    <div className="container">
      <h1>LOS SIMPSON</h1>
      <h2>APP - SPRINGFIELD DATABASE</h2>
      <ul>
        <li>Personajes </li>
        <li>Páginas </li>
        <li>Springfield, USA</li>
      </ul>

      <div className="search-seccion">
        {" "}
        <form action="">
          <input type="text" />
          <button>TODOS </button>
          <button>MALE</button>
          <button>FEMALE </button>
          <button>ALIVE</button>
        </form>
      </div>
      <span>
        <h3>PERSONAJES - PÁGINA 1</h3>
      </span>
      <Cards />
      <Pagination />

      <footer>LOS SIMPSON APP - SPRINGFIELD DATABASE</footer>
    </div>
  );
};
