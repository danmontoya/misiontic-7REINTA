import {Schema, model} from 'mongoose'

export const ROLES = ["user", "admin", "moderator"]
const roles = new Schema({
    nombre: String
}, {
    versionKey: false
})

export default model('Role', roles);