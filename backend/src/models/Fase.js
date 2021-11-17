import {Schema, model} from 'mongoose'

export const FASES = ["Inicio", "Desarrollo", "Terminado"]
const fases = new Schema({
    nombre: String
}, {
    versionKey: false,
    
})

export default model('Fases', fases);