import { Request, Response } from "express";
import { VeiculoService } from "../services/VeiculosService";

export class VeiculoController {
  static async cadastro(req: Request, res: Response) {
    const { nome, placa } = req.body;
    // @ts-ignore
    const { id } = req.usuario;

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

  static async Listar(req: Request, res: Response) {
    // @ts-ignore
    const { id } = req.usuario;

    try {
      const veiculos = await VeiculoService.ListarVeiculos(id);
      return res.status(200).json(veiculos);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ mensagem: "Erro ao listar veículos" });
    }
  }
}
