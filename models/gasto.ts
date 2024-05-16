import { Model, model, Schema } from "mongoose";

export interface IGasto {
    nombre: string,
    importe: string,
    fecha: string
};

const GastoSchema = new Schema<IGasto>({
    nombre: {
        type: String,
        unique: true
    },
    importe: {
        type: String
    },
    fecha: {
        type:String
    }
});


const Gasto: Model<IGasto> = model<IGasto>("Gasto",GastoSchema);

export default Gasto;
