import { Request, Response } from "express";
import Usuario, { IUsuario } from "../models/usuarios";
import Gasto from "../models/gasto"; 


export const getUsuarios = async ({},res:Response)=>{
    
    const condicion = {estado:true};

    const usuarios = await Usuario.find(condicion)
    .populate("gasto","nombre");

    res.json({usuarios})

    console.log("Estos son los usuarios")
}

export const getUsuariosByID = async (req: Request, res: Response) => {
    const { id } = req.params;

    const usuario: IUsuario | null = await Usuario.findOne({ usuarioId: id });

    res.json({ usuario });
}


export const crearUsuario = async (req: Request, res: Response) =>{

    const usuarioData: IUsuario =req.body;

    const {usuarioId,nombre,gasto, email} = usuarioData;

    const gastoData= await Gasto.findOne({nombre: gasto});

    if (!usuarioId || !nombre || !gasto || !email) {
        res.json({
            msg:"Faltan datos solicitados"
        })
        return
    }

    const usuarioEnDb = await Usuario.findOne({ usuarioId: usuarioId });


    if(usuarioEnDb) {
        res.json({
            msg:"El usuario ya se encuentra registrado"
        }) 
        return;
    }

    const usuario = new Usuario({
        usuarioId,
        nombre,
        gasto: gastoData?._id,
        email
    });
    

    await usuario.save();

    res.json({
        msg: "Realizado correctamente",
        usuario
    })

    console.log("Usuario creado exitosamente")

}

