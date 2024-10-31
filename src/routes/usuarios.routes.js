import { Router } from "express";
import UsersRepositories from "../models/users/UsersRepositories.js";

const usuariosRoutes = Router();
const usersList = new UsersRepositories();

usuariosRoutes.get("/", (req, res) => {
  const usuarios = usersList.getAllUsers();
  return res.status(200).json({
    message: 
    usuarios.length == 0 
    ? "Não há usuários cadastrados"
    : `Total de usuários: ${usuarios.length}`,
  });
});

export default usuariosRoutes;