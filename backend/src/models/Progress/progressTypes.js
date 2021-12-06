import {gql} from 'apollo-server-express'

const tiposProgress = gql`
    type Progress{
        _id:ID!
        fecha:Date!
        descripcion:String!
        observaciones: [String]
        proyecto: Product!
        creadoPor: User!
    }

    type Query{
        Progresses: [Progress]
        filtrarProgresses(_id: String!): [Progress] 
    }
    type Mutation{
        crearProgress(fecha: Date!, descripcion: String!, product: String!, creadoPor: String!): Progress
    }
`;

export {tiposProgress};