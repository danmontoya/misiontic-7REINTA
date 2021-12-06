import {gql} from 'apollo-server-express'
//queda pendiente decidir como traer el ROL
const typesUsers = gql`
    type User{
        _id: ID!
        username: String!
        identificacion: String!
        email: String!
        progressCreador: [Progress]
    }

    input fitroUsers{
        _id: ID
        identificacion: String
        correo: String
        estado: String
    }

    type Query{
        Users(filtro: filtroUsers): [User]
        User(_id: String!): User 

    }
    type Mutation{
        crearUser(
            username: String!
            identificacion: String!
            email: String!
            rol: String!
            estado: default
            password: String!
        ): User

        editarUser(
            _id: String!
            username: String!
            identificacion: String!
            email: String!
            estado: Enum_EstdoUsuario!

        ): User 

        eliminarUser(_id: String, email: String): User
    }

`;

export {typesUsers};