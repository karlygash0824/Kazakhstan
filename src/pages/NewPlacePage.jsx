import React, { useState, useContext } from "react";
import { PlacesContext } from "../context/PlacesContext";

const NewPlacePage = () => {
  const { places, setPlaces } = useContext(PlacesContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlace = {
      title,
      description,
      imageUrl,
      latitude,
      longitude,
    };

    const updatedPlaces = [...places, newPlace]; // 1. жаңа массив
    setPlaces(updatedPlaces);                    // 2. Context жаңарту
    localStorage.setItem("places", JSON.stringify(updatedPlaces)); // 3. LocalStorage жаңарту

    // 4. Форманы тазалау
    setTitle("");
    setDescription("");
    setImageUrl("");
    setLatitude("");
    setLongitude("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-green-700">Жаңа орын қосу</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Орын атауы"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <textarea
          placeholder="Сипаттама"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Сурет URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Ені (latitude)"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Бойы (longitude)"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Қосу ✅
        </button>
      </form>
    </div>
  );
};

export default NewPlacePage;

    
