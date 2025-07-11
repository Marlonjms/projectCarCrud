import jwt from "jsonwebtoken";

export function decodificarToken(token: string) {
  try {
    const usuario = jwt.verify(token, process.env.JWT_SECRET as string);
    return usuario; 
  } catch (erro: any) {
    throw new Error(
      erro.name === "TokenExpiredError"
        ? "Token expirado"
        : "Token inválido"
    );
  }
}
