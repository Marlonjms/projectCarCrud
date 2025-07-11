import { Request, Response } from "express";
import { VeiculoService } from "../services/VeiculosService";

export class VeiculoController {
  static async cadastro(req: Request, res: Response) {
    const { nome, placa } = req.body;
    const { id } = req.body.usuario; // extraído pelo middleware de token

    if (!nome || !placa) {
      return res
        .status(400)
        .json({ mensagem: "Nome e placa são obrigatórios" });
    }

    try {
      const mensagem = await VeiculoService.CadastrarVeiculo({
        nome,
        placa,
        id_usuario: id,
      });

      return res.status(201).json({ mensagem });
    } catch (error: any) {
      console.error(error);
      return res
        .status(400)
        .json({ mensagem: error.message || "Erro desconhecido" });
    }
  }
}
