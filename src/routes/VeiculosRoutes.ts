import { Router } from 'express';
import { VeiculoController } from "../controllers/VeiculoController";
import { autenticarToken } from "../middlewares/autenticarToken";

const router = Router();

router.post("/cadastro-veiculo", autenticarToken, VeiculoController.cadastro);
router.get("/Listar-veiculos", autenticarToken, VeiculoController.Listar);



export default router;
