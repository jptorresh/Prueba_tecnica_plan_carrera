import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioSesion from "./componentes/InicioSesion";
import SeguimientoGuia from "./componentes/SeguimientoGuia";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/seguimiento-guia" element={<SeguimientoGuia />} />
      </Routes>
    </Router>
  );
}

export default App;
