import { Request, Response } from "express";
import { VeiculoService } from "../services/VeiculosService";

export class VeiculoController {
  static async cadastro(req: Request, res: Response) {
    const { nome, placa } = req.body;
    // @ts-ignore
    const { id } = req.usuario;

    if (!nome || !placa) {
      return res.status(400).json({ mensagem: "Nome e placa são obrigatórios" });
    }

    try {
      await VeiculoService.CadastrarVeiculo({
        nome,
        placa,
        id_usuario: id,
      });

      return res.status(201).json({ mensagem: "Veículo cadastrado com sucesso" });
    } catch (error: any) {
      console.error(error);
      return res.status(400).json({ mensagem: error.message || "Erro desconhecido" });
    }
  }

  static async Listar(req: Request, res: Response) {
    // @ts-ignore
    const { id } = req.usuario;
    const statusVeiculoQuery = req.query.statusVeiculo;

    let statusVeiculo: boolean;
    if (statusVeiculoQuery === undefined) {
      statusVeiculo = true;
    } else if (typeof statusVeiculoQuery === "string") {
      statusVeiculo = statusVeiculoQuery.toLowerCase() === "true";
    } else {
      statusVeiculo = true;
    }

    try {
      const veiculos = await VeiculoService.ListarVeiculos(id, statusVeiculo);
      return res.status(200).json({
        veiculos,
        mensagem: "Veículos listados com sucesso",
      });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ mensagem: "Erro ao listar veículos" });
    }
  }

  static async Editar(req: Request, res: Response) {
    
    const { id, nome, placa } = req.body;
    // @ts-ignore
    const { id: idUsuario } = req.usuario;

    if (!id) {
      return res.status(400).json({ mensagem: "ID do veículo é obrigatório" });
    }

    try {
      await VeiculoService.EditarVeiculo(Number(id), idUsuario, { nome, placa });
      return res.status(200).json({ mensagem: "Veículo atualizado com sucesso" });
    } catch (error: any) {
      console.error(error);
      return res.status(400).json({ mensagem: error.message || "Erro ao editar veículo" });
    }
  }

  static async Arquivar(req: Request, res: Response) {
    
    const { id } = req.body;
    // @ts-ignore
    const { id: idUsuario } = req.usuario;

    if (!id) {
      return res.status(400).json({ mensagem: "ID do veículo é obrigatório" });
    }

    try {
      await VeiculoService.ArquivarVeiculo(Number(id), idUsuario);
      return res.status(200).json({ mensagem: "Veículo arquivado com sucesso" });
    } catch (error: any) {
      console.error(error);
      return res.status(400).json({ mensagem: error.message || "Erro ao arquivar veículo" });
    }
  }

  static async Desarquivar(req: Request, res: Response) {
    
    const { id } = req.body;
    // @ts-ignore
    const { id: idUsuario } = req.usuario;

    if (!id) {
      return res.status(400).json({ mensagem: "ID do veículo é obrigatório" });
    }

    try {
      await VeiculoService.DesarquivarVeiculo(Number(id), idUsuario);
      return res.status(200).json({ mensagem: "Veículo desarquivado com sucesso" });
    } catch (error: any) {
      console.error(error);
      return res.status(400).json({ mensagem: error.message || "Erro ao desarquivar veículo" });
    }
  }

  static async Remover(req: Request, res: Response) {
    
    const { id } = req.body;
    // @ts-ignore
    const { id: idUsuario } = req.usuario;

    if (!id) {
      return res.status(400).json({ mensagem: "ID do veículo é obrigatório" });
    }

    try {
      await VeiculoService.RemoverVeiculo(Number(id), idUsuario);
      return res.status(200).json({ mensagem: "Veículo removido com sucesso" });
    } catch (error: any) {
      console.error(error);
      return res.status(400).json({ mensagem: error.message || "Erro ao remover veículo" });
    }
  }
}
