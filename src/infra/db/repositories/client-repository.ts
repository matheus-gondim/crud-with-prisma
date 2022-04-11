import { ClientType } from "@prisma/client";
import { IFindAllClientRepository, IFindClientByIdRepository, ISaveClientRepository } from "../../../data/repository";
import { Client } from "../../../domain/models";
import { SaveClientParams } from "../../../domain/usecases";
import { PrismaHelper } from "../prisma-helper";

export class ClientRepository implements ISaveClientRepository, IFindClientByIdRepository, IFindAllClientRepository {
    async save(data: SaveClientParams): Promise<Client> {
        const clientSchema = PrismaHelper.getConnetion().client;
        
        const { address, clientType } = data;
        
        const client = await clientSchema.create({
            data: { 
                ...data,
                clientType: (ClientType as any)[clientType],
                address: { create: { ...address } },
            },
            include: { address: true }
        })
        
        return client as any;
    }

    async findById(id: number): Promise<Client> {
        const clientSchema = PrismaHelper.getConnetion().client;

        const client = clientSchema.findFirst({
            where: { id },
            include: { address: true }
        })

        return client as any;
    }

    async findAll(): Promise<Client[]> {
        const clientSchema = PrismaHelper.getConnetion().client;

        const client = await clientSchema.findMany({orderBy: { id: "asc" }})

        return client as any[]
    }
}