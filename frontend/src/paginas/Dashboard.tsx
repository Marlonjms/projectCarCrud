import React, { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaCheckCircle,
  FaUserSlash,
  FaCar,
  FaPlus,
  FaPen,
  FaEye,
  FaTrash,
} from "react-icons/fa";
import api from "../services/api";
import "./Dashboard.css";


import logo from "../img/image 3.png";

interface Veiculo {
  nome: string;
  placa: string;
  status: string;
}

export function Dashboard() {
  const [vehicles, setVehicles] = useState<Veiculo[]>([]);
  const [error, setError] = useState("");

  return (
    <div className="dashboard">
      <aside className="sidebar">
        {/* Usando a logo importada */}
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <p className="nav-item active">Dashboard</p>
          <p className="nav-item">Relatórios</p>
        </nav>
      </aside>

      <main className="main">
        <div className="header">
          <div>
            <h2 className="title">Olá Ewerton,</h2>
            <p className="subtitle">Cadastre e gerencie seus veículos</p>
          </div>
          <FaUserCircle size={28} color="#888" />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="cards-container">
          <div className="card">
            <FaCar size={28} color="#3f51b5" />
            <p className="card-label">Total</p>
            <h3 className="card-value">{vehicles.length}</h3>
          </div>
          <div className="card">
            <FaCheckCircle size={28} color="#4caf50" />
            <p className="card-label">Ativos</p>
            <h3 className="card-value">
              {vehicles.filter((v) => v.status === "Ativo").length}
            </h3>
          </div>
          <div className="card">
            <FaUserSlash size={28} color="#ffb400" />
            <p className="card-label">Inativos</p>
            <h3 className="card-value">
              {vehicles.filter((v) => v.status !== "Ativo").length}
            </h3>
          </div>
        </div>

        <button className="register-button">
          <FaPlus /> Cadastrar Veículo
        </button>

        <table className="vehicle-table">
          <thead>
            <tr>
              <th>Veículo</th>
              <th>Placa</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((v, index) => (
              <tr key={index}>
                <td>{v.nome}</td>
                <td>{v.placa}</td>
                <td>
                  <span
                    className="status-dot"
                    style={{
                      backgroundColor:
                        v.status === "Ativo" ? "#4caf50" : "#ffb400",
                    }}
                  ></span>{" "}
                  {v.status}
                </td>
                <td>
                  <button className="icon-button">
                    <FaPen />
                  </button>
                  <button className="icon-button">
                    <FaEye />
                  </button>
                  <button className="icon-button">
                    <FaTrash color="#e53935" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
