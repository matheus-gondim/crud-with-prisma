import { Router } from 'express'
import { DependencyContainer } from "tsyringe";
import { SaveClientController, FindClientController, FindClientsController } from '../../presentation/controllers'
import { routerAdapter } from '../adapters'

export const clientRouter = (router: Router, container: DependencyContainer): void => {
    router.post("/client", routerAdapter(container.resolve(SaveClientController)))
    router.get("/client", routerAdapter(container.resolve(FindClientsController)))
    router.get("/client/:id", routerAdapter(container.resolve(FindClientController)))
}