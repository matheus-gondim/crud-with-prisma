import { Client } from "../../domain/models";

export interface IFindAllClientRepository {
    findAll: () => Promise<Client[]>
}