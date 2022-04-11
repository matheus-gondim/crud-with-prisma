import express, { Express, json } from 'express'
import { contentType } from '../middlewares';
import cors from 'cors'
import { setupRouter } from './setup-routes';
import { registerInjectables } from './register-injectables';

export const setupApp = (): Express => {
    const app = express();
 
    //middlewares
    app.use(json(), cors(), contentType)

    setupRouter(app, registerInjectables());
    
    return app;
}