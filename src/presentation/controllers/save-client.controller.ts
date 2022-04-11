import { injectable, inject } from 'tsyringe';
import { AddClientRequestDto } from "./dtos";

import { Controller, HttpResponse } from "../protocols";
import { badRequest, internalServerError, ok } from "../helpers";

import { Client } from "../../domain/models";
import { ClientType } from "../../domain/enums";
import { ISaveClient } from "../../domain/usecases";
import { validator } from "../../validation";

@injectable()
export class SaveClientController implements Controller {
    constructor(@inject("SaveClient") private readonly saveClient: ISaveClient) {}
    
    async handle(request: SaveClientController.Request): Promise<HttpResponse<Client>> {
        try {
            const error  = await validator(AddClientRequestDto, request)

            if(error) return badRequest(new Error(error))

            const client = await this.saveClient.save({...request})
            return ok(client, "Cliente criado com sucesso.");
        } catch (error: any) {
            console.log("error => ", error)
            return internalServerError(error);
        }
    }
}

namespace SaveClientController {
    export type Request = {
        name: string;
        cell: string;
        cpf: string;
        cnpj: string;
        phone: string;
        email: string;
        clientType: ClientType;
        address: {
            zipecode: string;
            street: string;
            number: number;
            complement?: string;
            city: string;
            district: string;
            state: string;
        }
    }    
}
