import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { PingResolver } from './resolvers/ping'
import { UserResolver } from './resolvers/UserResolver'
import { buildSchema } from 'type-graphql'

export async function start() {
  const app = express()

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        PingResolver,
        UserResolver
      ]
    }),
    context: ({ req, res }) => ({ req, res })
  })

  server.applyMiddleware({
    app,
    path: '/api'
  })

  return app
}

start()