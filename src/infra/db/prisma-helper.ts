import { PrismaClient } from "@prisma/client"

export const PrismaHelper = {
    client: {} as PrismaClient,

    async connect() {
        this.client = new PrismaClient()
        await this.client.$connect()
    },

    async disconnect() {
        await this.client.$disconnect()
    },

    getConnetion() {
        return this.client
    }
}