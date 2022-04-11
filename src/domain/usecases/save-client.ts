import { Address, Client } from "../models";

export interface ISaveClient {
    save: (data: SaveClientParams) => Promise<Client>
}

export type SaveClientParams = Omit<Client, "id"|"createdAt"|"updatedAt"|"address"|"addressId"> & {  address: SaveAddressParams };

type SaveAddressParams = Omit<Address, "id"|"createdAt"|"updatedAt">