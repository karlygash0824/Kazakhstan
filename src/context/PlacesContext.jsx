import { createContext, useState, useEffect } from "react";

export const PlacesContext = createContext();

export const PlacesProvider = ({ children }) => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("places");
    if (stored) {
      setPlaces(JSON.parse(stored));
    }
  }, []);

  return (
    <PlacesContext.Provider value={{ places, setPlaces }}>
      {children}
    </PlacesContext.Provider>
  );
};



