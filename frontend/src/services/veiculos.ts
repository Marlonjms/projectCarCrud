import api from "./api";

export interface Veiculo {
  id?: number;
  nome: string;
  placa: string;
  status?: string;
}

export async function listarVeiculos(statusVeiculo?: boolean): Promise<Veiculo[]> {
  const token = localStorage.getItem("token");

  const response = await api.get("/listar-veiculos", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: statusVeiculo !== undefined ? { statusVeiculo } : {},
  });

  // A resposta vem no formato { veiculos: Veiculo[], mensagem: string }
  if (response.data && response.data.veiculos) {
    return response.data.veiculos;
  }

  return [];
}

export async function cadastrarVeiculo(dados: { nome: string; placa: string; status: string }) {
  const token = localStorage.getItem("token");
  return await api.post("/cadastrar-veiculo", dados, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function editarVeiculo(dados: any) {
  const token = localStorage.getItem("token");
  return await api.put("/editar-veiculo", dados, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function arquivarVeiculo(id: string) {
  const token = localStorage.getItem("token");
  return await api.patch("/arquivar-veiculo", { id }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function desarquivarVeiculo(id: string) {
  const token = localStorage.getItem("token");
  return await api.patch("/desarquivar-veiculo", { id }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function removerVeiculo(id: string) {
  const token = localStorage.getItem("token");
  return await api.delete("/remover-veiculo", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { id },
  });
}
