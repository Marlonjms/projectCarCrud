import { conexao } from "../database/connection";
import { Veiculo} from "../models/VeiculoModels";

export class VeiculoService {

// cadastrar
static async CadastrarVeiculo (veiculo: Veiculo) : Promise <string> {

    const placaExistente = await conexao.query(
      "SELECT * FROM veiculos WHERE placa = $1",
      [veiculo.placa]
    );

    if ((placaExistente.rowCount ?? 0 ) > 0) {
      throw new Error("Veículo já está cadastrado");
    }
     await conexao.query(
      "INSERT INTO veiculos (nome_veiculo, placa, status, id_usuario) VALUES ($1, $2, $3, $4)",
      [veiculo.nome, veiculo.placa, 'TRUE', veiculo.id_usuario ]
    );

    return "Usuario Cadastrado com sucesso!"
}



}