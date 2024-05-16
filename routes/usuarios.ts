import { Router } from "express";
import { getUsuarios, getUsuariosByID, crearUsuario } from "../controllers/usuarios";

const usuariosRoutes = Router();

usuariosRoutes.get("/",getUsuarios);

usuariosRoutes.get("/:id", getUsuariosByID);

usuariosRoutes.post("/", crearUsuario);


export default usuariosRoutes;