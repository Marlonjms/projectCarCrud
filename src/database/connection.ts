import { Pool } from 'pg';

export const conexao = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'veiculos_db',
    password: 'admin',
    port: 5432,
});