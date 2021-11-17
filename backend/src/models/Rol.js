import {Schema, model} from 'mongoose'

export const ROLES = ["Estudiante", "Administrador", "Lider", "Pendiente"]
const roles = new Schema({
    nombre: String
}, {
    versionKey: false,
    
})

export default model('Role', roles);