import { ClientType } from "../enums";
import { Address } from "./address";

export type Client = {
    id: number;
    name: string;
    cell: string;
    phone: string;
    email: string;
    cpf: string;
    cnpj: string;
    clientType: ClientType;
    addressId: number;
    createdAt: Date;
    updatedAt: Date;
    address: Address;
}