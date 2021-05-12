import { createConnection } from 'typeorm'
import path from 'path'

export async function connection() {
  await createConnection({
    type: 'mysql',
    host: 'data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com',
    username: 'testing',
    password: 'Pruebas%ALI%2020',
    database: 'testing_ali_fullstack',
    entities: [
      path.join(__dirname, '../entity/**/**.ts')
    ],
    synchronize: true
  })

  console.log('Database conectada')
}