import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { Server } from 'http';





export class App {

    private app: Application;
    private server: Server | null = null;


    // ? constructor app
    constructor() {
        this.app = express();
        this.initMiddlewares();
        this.testServer();
        this.getConexionToDB();
    }



    // ?  middlewares 
    private initMiddlewares(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
    }



    // ? server availability test
    private testServer(): void {
        this.app.get('/test', (req: Request, res: Response) => {
            res.json({
                test: "Ok"
            })
        })
    }



    // ?  listen server on port
    public listenOnPort(port: number) {
        this.server = this.app.listen(port, () => {
            console.log(`[ Server running on port: ${port} ]`);
        });
    }



    //? obtener instancia de la app
    public getApplication() {
        return this.app;
    }



    //? cerrar la instancia del servidor
    public async closeServer(): Promise<void> {
        if (!this.server) return;
        return new Promise((resolve, reject) =>
            this.server!.close(err => err ? reject(err) : resolve())
        );
    }



    //todo: Hacer la funcion de conexion con la db
    private async getConexionToDB(): Promise<void>  {
        try {
            
        } catch (error) {
            
        }
    }
}
