import { Router } from "express";
import { VeiculoController } from "../controllers/VeiculoController";
import { autenticarToken } from "../middlewares/autenticarToken";

const router = Router();

router.post("/cadastrar-veiculo", autenticarToken, VeiculoController.cadastro);
router.get("/listar-veiculos", autenticarToken, VeiculoController.Listar);
router.put("/editar-veiculo", autenticarToken, VeiculoController.Editar);           
router.patch("/arquivar-veiculo", autenticarToken, VeiculoController.Arquivar);     
router.patch("/desarquivar-veiculo", autenticarToken, VeiculoController.Desarquivar);
router.delete("/remover-veiculo", autenticarToken, VeiculoController.Remover);   

export default router;
