import { conexao } from "../database/connection";
import bcrypt from "bcrypt";
import { Login, User } from "../models/User";
import jwt from "jsonwebtoken";


export class UserService {
  // Cadastrar usuário
  static async Criar(user: User): Promise<string> {
    const hashedPassword = await bcrypt.hash(user.senha, 10);

   
    const usuarioExistente = await conexao.query(
      "SELECT * FROM usuarios WHERE email = $1",
      [user.email]
    );

    if ((usuarioExistente.rowCount ?? 0 ) > 0) {
      throw new Error("Email já está cadastrado");
    }

    await conexao.query(
      "INSERT INTO usuarios (email, senha, nomeUsuario) VALUES ($1, $2, $3)",
      [user.email, hashedPassword, user.nomeUsuario]
    );
     
    return "Usuario Cadastrado com sucesso!"
    
  }

  // Login
  static async FazerLogin(login: Login): Promise<string> {
    const resultado = await conexao.query(
      "SELECT id, senha, nomeUsuario FROM usuarios WHERE email = $1",
      [login.email]
    );

    if (resultado.rowCount === 0) {
      throw new Error("Usuário não encontrado");
    }

    const { id, senha: senhaHash, nomeUsuario } = resultado.rows[0];

    const senhaValida = await bcrypt.compare(login.senha, senhaHash);

    if (!senhaValida) {
      throw new Error("Senha incorreta");
    }

    const token = jwt.sign(
      {
        id: id,
        nome: nomeUsuario,
        email: login.email,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    return token;
  }
}
