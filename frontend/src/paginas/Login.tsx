import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../img/image 3.png";
import api from "../services/api";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/login", { email, senha });

      const token = response.data.token;
      if (token) {
        localStorage.setItem("token", token);
        setError("");
        navigate("/dashboard");
      } else {
        setError("Token não recebido do servidor.");
      }
    } catch (err: any) {
     
      if (err.response && err.response.data && err.response.data.mensagem) {
        setError(err.response.data.mensagem);
      } else {
        setError("Erro no login. Verifique seu e-mail e senha.");
      }
      console.error("Erro no login:", err);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-left">
          <form className="login-form" onSubmit={handleLogin}>
            <img src={logo} alt="Logo EPTA" className="login-logo" />
            <p className="login-welcome">
              Bem-vindo de volta! Insira seus dados.
            </p>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Digite sua senha"
              className="login-input"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <button type="submit" className="login-button">
              Entrar
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <p className="login-register">
              Não tem uma conta?{" "}
              <a href="/register" style={{ color: "#1976d2" }}>
                Cadastre-se gratuitamente!
              </a>
            </p>
          </form>
        </div>
        <div className="login-right">
          <div className="login-image-placeholder">
            <span role="img" aria-label="img">
              🖼️
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
