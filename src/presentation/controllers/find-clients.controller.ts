import { inject, injectable } from "tsyringe";
import { Client } from "../../domain/models";
import { IFindClients } from "../../domain/usecases";
import { internalServerError, ok } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

@injectable()
export class FindClientsController implements Controller {
    constructor(@inject("FindClients") private readonly findClients: IFindClients){}

    async handle(): Promise<HttpResponse<Client[]>> {
        try {
            const clients = await this.findClients.find()
            return ok(clients, "Clientes listados com sucesso")
        } catch (error: any) {
            return internalServerError(error)
        }
    }
}