import 'reflect-metadata'
import 'dotenv/config'

import { app } from './server'

const port = process.env.PORT ?? 3333

const config = {
  host: '0.0.0.0',
  port: +port,
}

app.listen(config).then(() => {
  console.log('🚀 HTTP Server Running! ' + port)
})
