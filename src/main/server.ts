import 'reflect-metadata';
import 'dotenv/config';

import { setupApp } from './config/app';
import { env } from './config';
import { PrismaHelper } from '../infra/db';

PrismaHelper.connect().then(async() => {
    const app = setupApp();
    app.listen(env.PORT, () => console.log(`Server running at http://localhost:${env.PORT}`))
}).catch(console.error)