import { container, DependencyContainer } from 'tsyringe'
import { FindClient, SaveClient } from '../../data/usercases'
import { FindClients } from '../../data/usercases/find-clients';
import { IFindClient, IFindClients, ISaveClient } from '../../domain/usecases';
import { ClientRepository } from '../../infra/db/repositories';
import { FindClientController, FindClientsController, SaveClientController } from '../../presentation/controllers';

export const registerInjectables = (): DependencyContainer => {
    container.registerSingleton("ClientRepository", ClientRepository)

    container.registerSingleton<ISaveClient>("SaveClient", SaveClient);
    container.registerSingleton<IFindClient>("FindClient", FindClient);
    container.registerSingleton<IFindClients>("FindClients", FindClients);

    container.registerSingleton(SaveClientController)
    container.registerSingleton(FindClientController)
    container.registerSingleton(FindClientsController)

    return container;
}