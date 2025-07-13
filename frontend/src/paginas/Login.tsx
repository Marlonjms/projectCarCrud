import React from "react";
import "./Login.css"; // Importa o CSS
import logo from "../img/image 3.png";

export function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-left">
          <div className="login-form">
            <img src={logo} alt="Logo EPTA" className="login-logo" />
            <p className="login-welcome">Bem-vindo de volta! Insira seus dados.</p>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="login-input"
            />
            <input
              type="password"
              placeholder="Digite sua senha"
              className="login-input"
            />
            <button type="submit" className="login-button">
              Entrar
            </button>
            <p className="login-register">
              Não tem uma conta?{" "}
              <a href="/register" style={{ color: "#1976d2" }}>
                Cadastre-se gratuitamente!
              </a>
            </p>
          </div>
        </div>
        <div className="login-right">
          <div className="login-image-placeholder">
            <span role="img" aria-label="img">🖼️</span>
          </div>
        </div>
      </div>
    </div>
  );
}
