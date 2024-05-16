import express, { Express } from "express";
import gastosRoutes from "../routes/gastos";
import usuarioRoutes from "../routes/usuarios";
import { conectarDB } from "../database/config";

export class Server {

    app:Express;
    
    constructor() {
        this.app=express();
        this.conexionDB();
        this.middlewares();
        this.routes();
       
    }

    async conexionDB():Promise<void> {
        await conectarDB();
    }

    middlewares() :void {
        this.app.use(express.json())
    }

    routes():void {
        this.app.use("/usuarios",usuarioRoutes);
        this.app.use("/gastos", gastosRoutes);
    }

    listen():void {
        this.app.listen(8080, () => {
          console.log("Inicializando puerto 8080")
        })
    }

}


export default Server;