import { conexao } from "../database/connection";
import { VeiculoResposta, Veiculo } from "../models/VeiculoModels";

export class VeiculoService {
  // Cadastrar
  static async CadastrarVeiculo(veiculo: Veiculo): Promise<void> {
    const placaExistente = await conexao.query(
      "SELECT * FROM veiculos WHERE placa = $1",
      [veiculo.placa]
    );

    if ((placaExistente.rowCount ?? 0) > 0) {
      throw new Error("Veículo já está cadastrado");
    }

    await conexao.query(
      "INSERT INTO veiculos (nome_veiculo, placa, status, id_usuario) VALUES ($1, $2, $3, $4)",
      [veiculo.nome, veiculo.placa, true, veiculo.id_usuario] // status como boolean
    );
  }

  // Listar (filtrando por status)
  static async ListarVeiculos(
    idUsuario: number,
    statusVeiculo?: boolean
  ): Promise<VeiculoResposta[]> {
    const resultado = await conexao.query(
      "SELECT id, nome_veiculo AS nome, placa, status FROM veiculos WHERE id_usuario = $1 AND status = $2",
      [idUsuario, statusVeiculo]
    );
    return resultado.rows;
  }

  // Editar dados de um veículo
  static async EditarVeiculo(
    id: number,
    idUsuario: number,
    dados: Partial<Veiculo>
  ): Promise<void> {
    const resultado = await conexao.query(
      "UPDATE veiculos SET nome_veiculo = $1, placa = $2 WHERE id = $3 AND id_usuario = $4",
      [dados.nome, dados.placa, id, idUsuario]
    );

    if (resultado.rowCount === 0) {
      throw new Error("Veículo não encontrado ou não pertence ao usuário");
    }
  }

  // Arquivar (inativar)
  static async ArquivarVeiculo(id: number, idUsuario: number): Promise<void> {
    const resultado = await conexao.query(
      "UPDATE veiculos SET status = false WHERE id = $1 AND id_usuario = $2",
      [id, idUsuario]
    );
    if (resultado.rowCount === 0) {
      throw new Error("Veículo não encontrado ou não pertence ao usuário");
    }
  }

  // Desarquivar (ativar)
  static async DesarquivarVeiculo(
    id: number,
    idUsuario: number
  ): Promise<void> {
    const resultado = await conexao.query(
      "UPDATE veiculos SET status = true WHERE id = $1 AND id_usuario = $2",
      [id, idUsuario]
    );
    if (resultado.rowCount === 0) {
      throw new Error("Veículo não encontrado ou não pertence ao usuário");
    }
  }

  // Remover
  static async RemoverVeiculo(id: number, idUsuario: number): Promise<void> {
    const resultado = await conexao.query(
      "DELETE FROM veiculos WHERE id = $1 AND id_usuario = $2",
      [id, idUsuario]
    );
    if (resultado.rowCount === 0) {
      throw new Error("Veículo não encontrado ou não pertence ao usuário");
    }
  }
}
