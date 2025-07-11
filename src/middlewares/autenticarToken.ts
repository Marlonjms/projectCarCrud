import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";


export function autenticarToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ mensagem: "Token não enviado" });
  }

  const token = authHeader.split(" ")[1]; 

  try {
    const usuario = jwt.verify(token, process.env.JWT_SECRET as string);
    req.body.usuario = usuario; 
    next(); 
  } catch (erro: any) {
    if (erro.name === "TokenExpiredError") {
      return res.status(401).json({ mensagem: "Token expirado" });
    }
    return res.status(403).json({ mensagem: "Token inválido" });
  }
}
