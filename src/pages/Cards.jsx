import { useEffect, useState } from "react";

export const Cards = () => {
  const [pages, setPages] = useState(1);
  const url = `https://thesimpsonsapi.com/api`;
  const API_URL = `${url}/characters?page=${pages}`;
  const [data, setData] = useState([]);

  // Colocar todas las variables posibles en un archivo de constantes.js para poder hacer mas optimo el codigo

  // Definimos la función asíncrona
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch(API_URL);
        const res = await respuesta.json();
        setData(res); // Guardamos los datos en el estado
      } catch (error) {
        console.error("Hubo un error al pedir los datos:", error);
      }
    };
    // pasar esto un hook.js para optimizar codigo
    obtenerDatos();
  }, [pages]);

  console.log(data);
  return (
    <article>
      {data.results?.map((personajes) => (
        <div key={personajes.id}>
          <img
            src={`https://cdn.thesimpsonsapi.com/200${personajes.portrait_path}`}
            alt=""
          />
          <h5>{personajes.status}</h5>

          <div className="information-card">
            <h3>{personajes.name}</h3>
            <span>
              {personajes.gender} AGE {personajes.age}
            </span>
            <p>{personajes.occupation}</p>
          </div>
          <button>VER FRASES </button>
          {/* Aca lo que tengo que hacer es que el botton me cambie el display para ver o no las frases */}
          {personajes.phrases.map((phrases, index) => (
            <p key={index}> {phrases}</p>
          ))}
        </div>
      ))}

      <button
        onClick={() => {
          setPages(pages + 1);
        }}
      >
        {" "}
        + 1
      </button>
    </article>
  );
};
