// src/Dashboard.tsx
import React from "react";
import { FaUserCircle, FaCheckCircle, FaUserSlash, FaCar, FaPlus, FaPen, FaEye, FaTrash } from "react-icons/fa";

export function Dashboard() {
  const vehicles = [
    { name: "Fiat Strada", plate: "BRA2D19", status: "Ativo" },
    { name: "Volkswagen Polo", plate: "XYZ4A72", status: "Ativo" },
    { name: "Chevrolet Onix", plate: "JQL7C03", status: "Ativo" },
    { name: "Chevrolet Tracker", plate: "MRN9F85", status: "Ativo" },
    { name: "Volkswagen T-Cross", plate: "LHV3E66", status: "Ativo" },
    { name: "Fiat Argo", plate: "TPW6B10", status: "Ativo" },
    { name: "Nissan Kicks", plate: "KZX1D44", status: "Ativo" },
  ];

  return (
    <div style={styles.dashboard}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <img src="/logo192.png" alt="Logo" style={{ width: 120, marginBottom: 40 }} />
        <nav>
          <p style={styles.navItemActive}>Dashboard</p>
          <p style={styles.navItem}>Relatórios</p>
        </nav>
      </aside>

      {/* Main content */}
      <main style={styles.main}>
        {/* Header */}
        <div style={styles.header}>
          <div>
            <h2 style={styles.title}>Olá Ewerton,</h2>
            <p style={styles.subtitle}>Cadastre e gerencie seus veículos</p>
          </div>
          <FaUserCircle size={28} color="#888" />
        </div>

        {/* Summary Cards */}
        <div style={styles.cardsContainer}>
          <div style={styles.card}>
            <FaCar size={28} color="#3f51b5" />
            <p style={styles.cardLabel}>Total</p>
            <h3 style={styles.cardValue}>350</h3>
          </div>
          <div style={styles.card}>
            <FaCheckCircle size={28} color="#4caf50" />
            <p style={styles.cardLabel}>Ativos</p>
            <h3 style={styles.cardValue}>324</h3>
          </div>
          <div style={styles.card}>
            <FaUserSlash size={28} color="#ffb400" />
            <p style={styles.cardLabel}>Inativos</p>
            <h3 style={styles.cardValue}>26</h3>
          </div>
        </div>

        {/* Register Button */}
        <button style={styles.registerButton}>
          <FaPlus /> Cadastrar Veículo
        </button>

        {/* Vehicle Table */}
        <table style={styles.table}>
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
                <td>{v.name}</td>
                <td>{v.plate}</td>
                <td><span style={styles.statusDot}></span> {v.status}</td>
                <td>
                  <button style={styles.iconButton}><FaPen /></button>
                  <button style={styles.iconButton}><FaEye /></button>
                  <button style={styles.iconButton}><FaTrash color="#e53935" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  dashboard: {
    display: "flex",
    fontFamily: "sans-serif",
    backgroundColor: "#f9fafe",
    minHeight: "100vh",
  },
  sidebar: {
    width: 220,
    backgroundColor: "#fff",
    padding: "40px 20px",
    borderRight: "1px solid #eee",
  },
  navItem: {
    padding: "10px 0",
    color: "#777",
    cursor: "pointer",
  },
  navItemActive: {
    padding: "10px 0",
    color: "#1976d2",
    fontWeight: "bold",
    cursor: "pointer",
  },
  main: {
    flex: 1,
    padding: "40px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "5px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#888",
  },
  cardsContainer: {
    display: "flex",
    gap: "20px",
    marginBottom: "30px",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    textAlign: "center",
  },
  cardLabel: {
    fontSize: "14px",
    color: "#888",
    marginTop: "10px",
  },
  cardValue: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "5px",
  },
  registerButton: {
    backgroundColor: "#1976d2",
    color: "#fff",
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    borderCollapse: "collapse",
  },
  statusDot: {
    display: "inline-block",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "#4caf50",
    marginRight: "6px",
  },
  iconButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    marginRight: "10px",
    fontSize: "16px",
  },
};
