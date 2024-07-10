import { app } from './app'
import { env } from './env/index.zod'

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server runing!')
  })
