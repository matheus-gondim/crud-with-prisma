import { Express, Router } from 'express'
import { clientRouter, pingRouter } from '../routes';
import { DependencyContainer } from "tsyringe";

export const setupRouter = (app: Express, container: DependencyContainer) => {
    const router = Router();
    
    pingRouter(router);
    clientRouter(router, container);

    app.use(router);
}