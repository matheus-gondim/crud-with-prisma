import { inject, injectable } from "tsyringe";
import { FindClientRequestDto } from "./dtos";

import { Controller, HttpResponse } from "../protocols";
import { badRequest, internalServerError, ok } from "../helpers";

import { Client } from "../../domain/models";
import { IFindClient } from "../../domain/usecases";
import { validator } from "../../validation";

@injectable()
export class FindClientController implements Controller {
    constructor(@inject("FindClient") private readonly findClient: IFindClient) {}

    async handle(request: FindClientController.Request): Promise<HttpResponse<Client>> {
        try {
            const error = await validator(FindClientRequestDto, request)
        
            if(error) return badRequest(new Error(error))
    
            const client = await this.findClient.find(parseInt(request.id))
    
            return ok(client, "Cliente criado com sucesso.");
        } catch (error: any) {
            return internalServerError(error)
        }
    };
}

namespace FindClientController {
    export type Request = {
        id: string
    }
}