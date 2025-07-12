import { conexao } from "../database/connection";
import { VeiculoResposta, Veiculo } from "../models/VeiculoModels";

export class VeiculoService {
  // cadastrar
  static async CadastrarVeiculo(veiculo: Veiculo): Promise<string> {
    const placaExistente = await conexao.query(
      "SELECT * FROM veiculos WHERE placa = $1",
      [veiculo.placa]
    );

    if ((placaExistente.rowCount ?? 0) > 0) {
      throw new Error("Veículo já está cadastrado");
    }
    await conexao.query(
      "INSERT INTO veiculos (nome_veiculo, placa, status, id_usuario) VALUES ($1, $2, $3, $4)",
      [veiculo.nome, veiculo.placa, "TRUE", veiculo.id_usuario]
    );

    return "Veículo Cadastrado com sucesso!";
  }

  // listar
  static async ListarVeiculos(idUsuario: number): Promise<VeiculoResposta[]> {
    const resultado = await conexao.query(
      "SELECT id, nome_veiculo AS nome, placa, status FROM veiculos WHERE id_usuario = $1",
      [idUsuario]
    );

    return resultado.rows;
  }
}
