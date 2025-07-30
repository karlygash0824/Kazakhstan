// src/components/MapView.jsx
import React, { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { PlacesContext } from "../context/PlacesContext";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Маркер иконкасы түзету
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapView = () => {
  const { places } = useContext(PlacesContext);

  return (
    <div className="h-[400px] rounded overflow-hidden shadow mb-6">
      <MapContainer
        center={[48.0196, 66.9237]} // Қазақстан орталығы
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {places.map((place) => (
          <Marker key={place.id} position={[place.lat, place.lng]}>
            <Popup>
              <strong>{place.name}</strong>
              <br />
              {place.description}
              <br />
              {place.image && (
                <img src={place.image} alt={place.name} className="mt-2 w-32 h-20 object-cover rounded" />
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
