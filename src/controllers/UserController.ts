import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  // cadastro
  static async register(req: Request, res: Response) {
    const { email, senha, nomeUsuario } = req.body;

    if (!email || !senha || !nomeUsuario) {
      return res
        .status(400)
        .json({ mensagem: "Email, senha e Nome são obrigatórios" });
    }

    try {
      const mensagem = await UserService.Criar({ email, senha, nomeUsuario });
      return res.status(200).json({ mensagem });
    } catch (error: any) {
      console.error(error);
      return res
        .status(400)
        .json({ mensagem: error.message || "Erro desconhecido" });
    }
  }

  //login
  static async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res
        .status(400)
        .json({ mensagem: "Email e senha são obrigatórios" });
    }

    try {
      const token = await UserService.FazerLogin({ email, senha });
      return res.status(200).json({ token });
    } catch (error: any) {
      console.error(error);
      return res
        .status(400)
        .json({ mensagem: error.message || "Erro desconhecido" });
    }
  }
}
