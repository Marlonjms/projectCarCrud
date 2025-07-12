export interface Veiculo {
  nome: string;
  placa: string;
  status?: boolean;
  id_usuario: number;
}

export interface VeiculoResposta {
  id: number;
  nome: string;
  placa: string;
  status: boolean;
}
