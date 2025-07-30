import React, { useState } from "react";

const AddPlacePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlace = {
      id: Date.now(),
      title,
      description,
      imageUrl,
    };

    // Жергілікті сақтау (localStorage)
    const existing = JSON.parse(localStorage.getItem("places")) || [];
    const updated = [...existing, newPlace];
    localStorage.setItem("places", JSON.stringify(updated));

    // Форма тазалау
    setTitle("");
    setDescription("");
    setImageUrl("");

    alert("✅ Жаңа орын сәтті қосылды!");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
        🌟 Жаңа орын қосу
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Орынның атауы"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Сипаттамасы"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Сурет URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
        >
          Қосу
        </button>
      </form>
    </div>
  );
};

export default AddPlacePage;

