import { Client } from "../../domain/models"
import { SaveClientParams } from "../../domain/usecases"

export interface ISaveClientRepository {
    save: (data: SaveClientRepositoryParams) => Promise<Client>
}

export type SaveClientRepositoryParams = {} & SaveClientParams