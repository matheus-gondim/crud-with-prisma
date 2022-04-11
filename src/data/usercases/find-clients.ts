import { inject, injectable } from "tsyringe";
import { Client } from "../../domain/models";
import { IFindClients } from "../../domain/usecases";
import { IFindAllClientRepository } from "../repository";

@injectable()
export class FindClients implements IFindClients {
    constructor(@inject("ClientRepository") private readonly findAllClientRepository: IFindAllClientRepository) {}

    async find(): Promise<Client[]> {
        return this.findAllClientRepository.findAll();
    }
}