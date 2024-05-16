import { Request, Response } from "express";
import Gasto, {IGasto} from "../models/gasto";


export const createGasto = async (req: Request, res: Response) =>{
    const gastoData: IGasto = req.body;

    const {nombre, importe, fecha} = gastoData;
 

    if(!nombre || !importe || !fecha) {
        res.json({
            msg: "Faltan datos para almacenar el gasto"
        })
        return;
    }
    
    const gastoEnDB = await Gasto.findOne({nombre:nombre});
 
    
    if(gastoEnDB){
        res.json({
            msg: "El gasto ya existe"
        })
        return;
    }

    const gasto= new Gasto(gastoData);

    await gasto.save();

    res.json({
        msg: "El gasto fue registrado con éxito"
    })
}