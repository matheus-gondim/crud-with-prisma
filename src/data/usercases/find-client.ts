import { inject, injectable } from "tsyringe";
import { Client } from "../../domain/models";
import { IFindClient } from "../../domain/usecases";
import { IFindClientByIdRepository } from "../repository";

@injectable()
export class FindClient implements IFindClient {
    constructor(
        @inject("ClientRepository") private readonly findClientByIdRepository: IFindClientByIdRepository
    ) {}

    async find(id: number): Promise<Client> {
        return this.findClientByIdRepository.findById(id);
    }
}