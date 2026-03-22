import { useState } from "react";
import "./app.css";
import { Cards } from "./components/Cards";
import { Pagination } from "./components/Pagination";
import { url } from "./constants.js";
import { useFetch } from "./hooks/useFetch.jsx";
export const App = () => {
  const [pages, setPages] = useState(1);
  const API_URL = `${url}/characters?page=${pages}`;
  const { data } = useFetch(API_URL);
  const [inputSearch, setInputSearch] = useState("");

  const handleSubmit = () => {
    event.preventDefault();
  };

  const handleInputChange = () => {
    setInputSearch(event.target.value);
  };

  console.log(data);
  return (
    <div className="container">
      <h1>LOS SIMPSONS</h1>
      <h2>APP - SPRINGFIELD DATABASE</h2>
      <ul>
        {/* pasar informacion del fetch con un contexto  de total personajes y paginas */}

        <li>
          <span>{data.count}</span>Personajes{" "}
        </li>
        <li>
          <span>{data.pages}</span>Páginas{" "}
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
      <h3 id="title-pagination">PERSONAJES - PÁGINA {pages}</h3>
      <Cards data={data} inputSearch={inputSearch} />

      <div className="pagination">
        <button
          onClick={() => pages > 1 && setPages(pages - 1)}
          className={pages == 1 ? "hidde" : "buttonPage"}
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
            fill="#1b3a6b"
            transform="rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.384"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>chevron-left-circle</title>{" "}
              <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                sketch:type="MSPage"
              >
                {" "}
                <g
                  id="Icon-Set-Filled"
                  sketch:type="MSLayerGroup"
                  transform="translate(-570.000000, -1037.000000)"
                  fill="#000000"
                >
                  {" "}
                  <path
                    d="M590.535,1060.12 C590.926,1060.51 590.926,1061.14 590.535,1061.54 C590.145,1061.93 589.512,1061.93 589.121,1061.54 L581.465,1053.88 C581.225,1053.64 581.15,1053.31 581.205,1053 C581.15,1052.69 581.225,1052.36 581.465,1052.12 L589.121,1044.46 C589.512,1044.07 590.145,1044.07 590.535,1044.46 C590.926,1044.86 590.926,1045.49 590.535,1045.88 L583.414,1053 L590.535,1060.12 L590.535,1060.12 Z M586,1037 C577.163,1037 570,1044.16 570,1053 C570,1061.84 577.163,1069 586,1069 C594.837,1069 602,1061.84 602,1053 C602,1044.16 594.837,1037 586,1037 L586,1037 Z"
                    id="chevron-left-circle"
                    sketch:type="MSShapeGroup"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
        <span>
          {" "}
          {pages} de {data.pages}
        </span>{" "}
        <button onClick={() => setPages(pages + 1)} className="buttonPage">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
            fill="#1b3a6b"
            transform="rotate(180)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.384"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>chevron-left-circle</title>{" "}
              <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                sketch:type="MSPage"
              >
                {" "}
                <g
                  id="Icon-Set-Filled"
                  sketch:type="MSLayerGroup"
                  transform="translate(-570.000000, -1037.000000)"
                  fill="#000000"
                >
                  {" "}
                  <path
                    d="M590.535,1060.12 C590.926,1060.51 590.926,1061.14 590.535,1061.54 C590.145,1061.93 589.512,1061.93 589.121,1061.54 L581.465,1053.88 C581.225,1053.64 581.15,1053.31 581.205,1053 C581.15,1052.69 581.225,1052.36 581.465,1052.12 L589.121,1044.46 C589.512,1044.07 590.145,1044.07 590.535,1044.46 C590.926,1044.86 590.926,1045.49 590.535,1045.88 L583.414,1053 L590.535,1060.12 L590.535,1060.12 Z M586,1037 C577.163,1037 570,1044.16 570,1053 C570,1061.84 577.163,1069 586,1069 C594.837,1069 602,1061.84 602,1053 C602,1044.16 594.837,1037 586,1037 L586,1037 Z"
                    id="chevron-left-circle"
                    sketch:type="MSShapeGroup"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>{" "}
        </button>
      </div>

      <footer>LOS SIMPSON APP - SPRINGFIELD DATABASE</footer>
    </div>
  );
};
