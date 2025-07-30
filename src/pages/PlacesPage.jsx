import React, { useEffect, useState } from "react";

const PlacesPage = () => {
  const [places, setPlaces] = useState([]);

  // localStorage-тан деректерді алу
  useEffect(() => {
    const storedPlaces = JSON.parse(localStorage.getItem("places")) || [];
    setPlaces(storedPlaces);
  }, []);

  // Жою батырмасы
  const handleDelete = (index) => {
    const updatedPlaces = places.filter((_, i) => i !== index);
    setPlaces(updatedPlaces);
    localStorage.setItem("places", JSON.stringify(updatedPlaces));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">📍 Көрікті орындар</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-4">
            <img
              src={place.imageUrl}
              alt={place.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/300x200?text=Сурет+жоқ";
              }}
            />
            <h3 className="text-xl font-semibold mb-2">{place.title}</h3>
            <p className="text-gray-700 mb-4">{place.description}</p>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Жою
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesPage;
