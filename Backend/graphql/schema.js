import { makeExecutableSchema } from 'graphql-tools'
import {
    resolvers
} from './resolvers/resolvers'


const typeDefs = `
    type Query {
        _: String
        hello: String,
        greet(name: String): String
        Tasks: [Task]
        getTasks(_id: ID): Task
    } 
    
    type Mutation {
        createTask( input: TaskInput): Task
        updateTask(_id: ID!, input: TaskInput): Task
        deleteTask(_id: ID!): Task
    }

    type Task {
        _id: ID
        title: String
        description: String
    }


    input TaskInput{
        title: String!
        description: String
    }

`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})
