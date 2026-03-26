import { useState } from "react";
import "./cards.css";

export const Cards = ({ data, input, gender, status }) => {
  const [activeId, setActiveId] = useState(null);

  const handlePhrase = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const handleClose = () => {
    setActiveId(null);
  };

  const personajesFiltrados =
    data.results?.filter((personaje) => {
      const matchNombre = personaje.name
        .toLowerCase()
        .includes(input.toLowerCase());

      const matchGenero = gender ? personaje.gender === gender : true;

      const isAlive = status ? personaje.status === status : true;

      return matchNombre && matchGenero && isAlive;
    }) ?? [];

  return (
    <div className="container-cards">
      {personajesFiltrados.map((personaje) => (
        <div key={personaje.id} className="card">
          <div className="card-header">
            <img
              src={`https://cdn.thesimpsonsapi.com/200${personaje.portrait_path}`}
              alt="Imagen del personaje"
            />
            <span
              className={
                personaje.status === "Alive"
                  ? "status-alive"
                  : "status-deceased"
              }
            >
              {personaje.status}
            </span>
          </div>

          <div className="card-body">
            <h3>{personaje.name}</h3>
            <span>
              {personaje.gender} ~ AGE {personaje.age}
            </span>
            <div className="ocupation-text">{personaje.occupation}</div>

            <button
              className="phrases-toggle"
              onClick={() => handlePhrase(personaje.id)}
            >
              VER FRASES
            </button>

            {activeId === personaje.id && (
              <div className="phrases">
                {personaje.phrases.map((frase, index) => (
                  <div className="container-phrases" key={index}>
                    <p>{frase}</p>
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
