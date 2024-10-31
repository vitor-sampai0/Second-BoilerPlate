import { Router } from 'express';
import UsersRepository from '../models/users/UsersRepository.js';

const usuariosRoutes = Router();

const usersRepository = new UsersRepository();

let usuarios = [];

usuariosRoutes.get("/", (req, res) => {
  const usuarios = usersRepository.getAllUsers();
  
  return res.status(200).json({
    message : usuarios.length == 0 
    ? "Nenhum usuário cadastrado" 
    : `Total de usúarios: ${usuarios.length}`,
    usuarios,
  });
});
export default usuariosRoutes;