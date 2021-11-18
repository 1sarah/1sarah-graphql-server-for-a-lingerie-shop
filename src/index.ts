
import { createConnection } from "typeorm";
import expressJwt from 'express-jwt';
import { AuthenticationError } from 'apollo-server-express';
import * as jwt from 'jsonwebtoken';
import * as dotenv from "dotenv";
import { jwt_secret } from './constants';
import { createServer } from "http";
import { makeExecutableSchema } from '@graphql-tools/schema'
import { typeDefs } from "./Schema/typeDef";
import { resolvers } from "./Schema/resolver";
//const {ApolloServer} = require('apollo-server');
const { ApolloServer } = require("apollo-server-express");
const express = require("express");

dotenv.config();
const main = async () => {
  await createConnection({
    type: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    port: parseInt(process.env.DB_PORT as string),
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: true,
    synchronize: true,
    entities: ["src/Entities/*.ts"
    ]
  })

   const getUser = (bearer_token: string) => {
    try {
      if (bearer_token) {
        
        return jwt.verify(bearer_token,jwt_secret);
      }
    } catch (error) {
      console.log(error)
      return null
    }
  }

  const app = express()
  const httpServer = createServer(app);
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const server = new ApolloServer({
    schema,
    context: ({ req }: { req: any }) => {
      const bearer_token = req.headers.authorization || '';
      //console.log("-------------",getUser(bearer_token));
      const user = getUser(bearer_token);
      return { user};
    },
    introspection: true
  });
  await server.start();
  server.applyMiddleware({ app });

  const auth = expressJwt({
    secret: jwt_secret,
    algorithms: ["HS256"],
    credentialsRequired: false,
  }).unless({path:["/login",]})

  app.use(auth)
  //unless({ path: ["/login", "/playground"] });


  app.listen(4001, () => {
    console.log("SERVER RUNNING ON PORT 4001")
  })
};
main().catch((err) => {
  console.log(err)
})


