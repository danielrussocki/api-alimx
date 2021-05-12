import "reflect-metadata"
import { connection } from './config/typeorm'
import { start } from './app'

async function main() {
  connection()

  const app = await start()
  app.set('port', process.env.PORT || 5000)
  app.listen(app.get('port'))

  console.log('server on port', app.get('port'))
}

main()