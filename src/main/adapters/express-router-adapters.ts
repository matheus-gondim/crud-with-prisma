import { Request, Response } from "express";
import { Controller } from "../../presentation/protocols";

export const routerAdapter = (controller: Controller) => {
    return async (req: Request, resp: Response) => {
        const request = {
            ...(req.body || {}),
            ...(req.params || {})
        }

        const httpResponse = await controller.handle(request);
        
        resp.status(httpResponse.statusCode).send(JSON.stringify(httpResponse));
    }
}