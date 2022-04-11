import { Router } from 'express'
import { PingController } from '../../presentation/controllers'
import { routerAdapter } from '../adapters'

export const pingRouter = (router: Router) => {
    router.get("/ping", routerAdapter(new PingController()))
}