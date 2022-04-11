import { ISaveClient, SaveClientParams } from "../../domain/usecases";
import { ISaveClientRepository } from "../repository";
import { injectable, inject } from 'tsyringe';
import { Client } from "../../domain/models";

@injectable()
export class SaveClient implements ISaveClient {
    constructor(
        @inject("ClientRepository") private readonly saveClientRepository: ISaveClientRepository,
    ) {}

    async save(data: SaveClientParams): Promise<Client> {
        return await this.saveClientRepository.save(data)
    }
}