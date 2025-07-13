import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./paginas/Login";
import { Dashboard } from "./paginas/Dashboard";
import { Cadastro } from "./paginas/Cadastro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
