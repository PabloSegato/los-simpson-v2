import { useEffect, useState } from "react";

export const useFetch = (API_URL, page) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch(API_URL);
        const res = await respuesta.json();
        setData(res);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    obtenerDatos();
  }, [API_URL, page]);

  return { data };
};
