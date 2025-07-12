import { Request, Response, NextFunction } from "express";
import { decodificarToken } from "../utils/decodificarToken"; 

export function autenticarToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ mensagem: "Token não enviado" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const usuario = decodificarToken(token);
    // @ts-ignore
    req.usuario = usuario;
    next();
  } catch (erro: any) {
    return res.status(403).json({ mensagem: erro.message });
  }
}
