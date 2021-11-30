import {Schema, model} from 'mongoose'

const user = new Schema({
    usuario: String,
    email: String,
    roles: [{
        ref:"Role",
        type: Schema.Types.ObjectId
    }]
})

const projectSchema = new Schema({
    nombre: String,
    ObjGenerales: String,
    ObjEspecificos: String,
    presupuesto: Number,
    fechaInicio: String,
    fechaTerminacion: String,
    crea: {
        type: user
    },
    estado: Boolean,
    fase:{
        nombre: String
        
    }
}, {
    timestamps: true,
    versionKey: false,

})



export default model('Product', projectSchema);