import { useState } from "react";
import "./cards.css";

export const Cards = ({ data, inputSearch }) => {
  const [activeId, setActiveId] = useState(null);

  const handlePhrase = (id) => {
    setActiveId(activeId === id ? null : id);
  };
  const handleClose = () => {
    setActiveId(null);
  };
  // Colocar todas las variables posibles en un archivo de constantes.js para poder hacer mas optimo el codigo
  console.log(inputSearch);
  return (
    <div className="container-cards">
      {data.results?.map((personajes) => (
        <div key={personajes.id} className="card">
          <div className="card-header">
            <img
              src={`https://cdn.thesimpsonsapi.com/200${personajes.portrait_path}`}
              alt="Imagen del personaje"
            />
            {/* tengo que hacer la modificacion de cuando este muerto salga en
            rojo */}

            <span id={personajes.status == "Alive" ? "Alive" : "Deceased"}>
              {personajes.status}
            </span>
          </div>

          <div className="card-body">
            <h3>{personajes.name}</h3>
            <span>
              {personajes.gender} ~ AGE {personajes.age}
            </span>
            <div className="ocupation-text">{personajes.occupation}</div>

            <button
              className="phrases-toggle"
              onClick={() => {
                handlePhrase(personajes.id);
              }}
            >
              VER FRASES{" "}
            </button>
            {activeId == personajes.id && (
              <div className="phrases">
                {personajes.phrases.map((phrases, index) => (
                  <div className="container-phrases" key={index}>
                    {" "}
                    <p key={index}> {phrases}</p>
                  </div>
                ))}
                <button
                  className="phrases-toggle"
                  style={{ marginTop: "5px" }}
                  onClick={handleClose}
                >
                  OCULTAR
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
