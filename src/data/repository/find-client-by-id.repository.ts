import { Client } from "../../domain/models";

export interface IFindClientByIdRepository {
    findById: (id: number) => Promise<Client>;
}