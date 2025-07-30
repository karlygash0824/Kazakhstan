
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Беттер
import HomePage from "./pages/HomePage";
import PlacesPage from "./pages/PlacesPage";
import NewPlacePage from "./pages/NewPlacePage";

// Компоненттер
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Контекст
import { PlacesProvider } from "./context/PlacesContext";

function App() {
  return (
    <PlacesProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/places" element={<PlacesPage />} />
              <Route path="/new" element={<NewPlacePage />} />
            </Routes>
          </main>

           <Footer />
        </div>
        
      </Router>
    </PlacesProvider>
  );
}

export default App;









