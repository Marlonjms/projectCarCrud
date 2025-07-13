import React from "react";
import "./Cadastro.css";
import logo from "../img/image 3.png";

export function Cadastro() {
  return (
    <div className="cadastro-wrapper">
      <div className="cadastro-form">
        <img src={logo} alt="Logo EPTA" className="cadastro-logo" />
        <p className="cadastro-welcome">Crie sua conta gratuita!</p>
        <input type="email" placeholder="Digite seu e-mail" className="cadastro-input" />
        <input type="password" placeholder="Digite sua senha" className="cadastro-input" />
        <button type="submit" className="cadastro-button">
          Cadastrar
        </button>
        <p className="cadastro-login-text">
          Já tem uma conta? <a href="/login" style={{ color: "#1976d2" }}>Faça login</a>
        </p>
      </div>
    </div>
  );
}
