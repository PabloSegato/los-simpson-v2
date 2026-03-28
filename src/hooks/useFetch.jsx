import { useEffect, useState } from "react";

export const useFetch = (API_URL) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch(API_URL);
        const res = await respuesta.json();
        setData(res);
        setIsLoading(false)
      } catch (error) {
        setIsError(true)
        console.error("Error:", error);
      }
    };

    obtenerDatos();
  }, [API_URL]);

  return { data, isLoading, isError};
};
