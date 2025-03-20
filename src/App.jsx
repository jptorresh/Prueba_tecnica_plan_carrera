import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioSesion from "./componentes/inicioSesion";
import SeguimientoGuia from "./componentes/seguimientoGuia";

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
