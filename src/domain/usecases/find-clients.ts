import { Client } from "../models";

export interface IFindClients {
    find: () => Promise<Client[]>
}