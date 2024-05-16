import {Router} from "express";
import { createGasto } from "../controllers/gastos";

const router=Router();

router.post("/",createGasto);

export default router;