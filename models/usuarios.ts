import { Model,ObjectId, Schema, model } from "mongoose";

export interface IUsuario {
    usuarioId: number;
    nombre: string;
    gasto: ObjectId;
    email:string;
    estado:boolean;
}

const UsuarioSchema = new Schema<IUsuario>({
    usuarioId: {
        type:Number,
        required: true,
        unique: true
    },
    nombre: {
        type:String,
        required: true,
    },
    gasto: {
        type: Schema.Types.ObjectId,
        ref:"Gasto",
        required:true
    },
    email: {
        type:String,
        required:true
    },
    estado: {
        type: Boolean,
        required:true,
        default:true
    }
    
});

const Usuario: Model<IUsuario> = model<IUsuario>("Usuario",UsuarioSchema);

export default Usuario;