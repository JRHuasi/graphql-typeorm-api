/**
 * Typescript & GraphQL | TypeORM, Type-GraphQL y ApolloServer
 * https://www.youtube.com/channel/UCMn28O1sQGochG94HdlthbA
 * https://youtu.be/mNsvOon1L_c?t=2465
 */
import 'reflect-metadata'
import {connect} from './config/typeorm'
import {startServer} from './app'

async function main(){
  connect();
  const app = await startServer();
  app.listen(3000);
  console.log('Server on Port',3000)
}

main()