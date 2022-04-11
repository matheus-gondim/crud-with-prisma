import { Client } from "../models";

export interface IFindClient {
    find: (id: number) => Promise<Client>
}