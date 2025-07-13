import express from 'express';
import cors from 'cors';       // <-- importe o cors
import userRoutes from './routes/userRoutes';
import VeiculosRoutes from './routes/VeiculosRoutes'; 
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));  

app.use(express.json());

// Rotas
app.use('/api', userRoutes);       
app.use('/api', VeiculosRoutes);   

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
