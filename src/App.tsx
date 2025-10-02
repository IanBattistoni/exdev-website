import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./shared/layouts/header/header";
import Footer from "./shared/layouts/footer/footer";
import Pagina from "./Pagina";
import AboutPage from "./pages/about/AboutPage";
import Apply from "./pages/apply/apply"; // ajusta según tu estructura

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Pagina />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/apply" element={<Apply />} /> {/* <-- ruta agregada */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
