import { Router } from "express";
import usuariosRoutes from "./usuarios.routes";

const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Vai Corinthians!" });
});

routes.use("/users", usuariosRoutes);

export default routes;