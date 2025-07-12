import express from 'express';
import userRoutes from './routes/userRoutes';
import VeiculosRoutes from './routes/VeiculosRoutes'; 
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Rotas
app.use('/api', userRoutes);       
app.use('/api', VeiculosRoutes);   

app.listen(5000, () => {
  console.log('Servidor rodando na porta 3000');
});
