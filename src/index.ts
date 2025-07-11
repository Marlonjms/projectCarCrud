import express from 'express';
import userRoutes from './routes/userRoutes';
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', userRoutes); // todas as rotas de usuário

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
