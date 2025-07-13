import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cadastro.css";
import logo from "../img/image 3.png";
import api from "../services/api";

export function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/register", {
        email,
        senha,
        nomeUsuario,
      });

      const mensagem = response.data.mensagem;
      console.log("Cadastro:", mensagem);

      
      navigate("/login");
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.mensagem) {
        setError(err.response.data.mensagem);
      } else {
        setError("Erro ao cadastrar. Tente novamente.");
      }
      console.error("Erro no cadastro:", err);
    }
  };

  return (
    <div className="cadastro-wrapper">
      <form className="cadastro-form" onSubmit={handleRegister}>
        <img src={logo} alt="Logo EPTA" className="cadastro-logo" />
        <p className="cadastro-welcome">Crie sua conta gratuita!</p>
        <input
          type="text"
          placeholder="Digite seu nome"
          className="cadastro-input"
          value={nomeUsuario}
          onChange={(e) => setNomeUsuario(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Digite seu e-mail"
          className="cadastro-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          className="cadastro-input"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit" className="cadastro-button">
          Cadastrar
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p className="cadastro-login-text">
          Já tem uma conta?{" "}
          <a href="/login" style={{ color: "#1976d2" }}>
            Faça login
          </a>
        </p>
      </form>
    </div>
  );
}
