// src/Login.tsx
import React from "react";
import logo from "../img/image 3.png";

export function Login() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.leftSide}>
          <div style={styles.formWrapper}>
            <img src={logo} alt="Logo EPTA" style={styles.logo} />
            <p style={styles.welcomeText}>Bem-vindo de volta! Insira seus dados.</p>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Digite sua senha"
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Entrar
            </button>
            <p style={styles.registerText}>
              Não tem uma conta?{" "}
              <a href="/register" style={{ color: "#1976d2" }}>
                Cadastre-se gratuitamente!
              </a>
            </p>
          </div>
        </div>
        <div style={styles.rightSide}>
          <div style={styles.imagePlaceholder}>
            <span role="img" aria-label="img">🖼️</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    backgroundColor: "#f2f6ff",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: "1000px",
    minHeight: "500px",
    backgroundColor: "#fff",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 0 20px rgba(0,0,0,0.05)",
  },
  leftSide: {
    width: "50%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formWrapper: {
    width: "80%",
    maxWidth: "320px",
    display: "flex",
    flexDirection: "column",
  },
  rightSide: {
    width: "50%",
    backgroundColor: "#cde2fd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 157,
    height: 44,
    marginBottom: "20px",
  },
  welcomeText: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "20px",
  },
  input: {
    marginBottom: "12px",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    width: "100%", // <-- agora segue o botão
    boxSizing: "border-box",
  },
  button: {
    width: "100%", // <-- mesmo tamanho dos inputs
    backgroundColor: "#007aff",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    fontSize: "14px",
    cursor: "pointer",
    marginTop: "10px",
  },
  registerText: {
    fontSize: "12px",
    marginTop: "20px",
    color: "#666",
    textAlign: "center",
  },
  imagePlaceholder: {
    fontSize: "48px",
    color: "#666",
    opacity: 0.4,
  },
};
