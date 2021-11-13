import {Schema, model} from 'mongoose'

const projectSchema = new Schema({
    nombre: String,
    ObjGenerales: String,
    ObjEspecificos: String,
    presupuesto: Number,
    fechaInicio: Date,
    fechaTerminacion: Date,
    crea: {
        ref:"User",
        type: Schema.Types.ObjectId
    },
    estado: Boolean,
    fase:{
        ref:"Fases",
        type: Schema.Types.ObjectId
    }
}, {
    timestamps: true,
    versionKey: false,

})

export default model('Product', projectSchema);