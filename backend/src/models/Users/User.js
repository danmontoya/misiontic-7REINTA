import {Schema, model} from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema= new Schema({
    username: {
        type: 'string',
        unique: true,

    },
    identificacion:{
        type: 'string',
        unique: true
    },
    email: {
        type: 'string',
        unique: true,
    },
    password: {
        type: 'string',
        required: true,
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId 
        //Aca se puede hacer cambio por un tipo enum
        //que tenga de una vez las 3 opciones
    }],
    estado:{
        type: String,
        enum: ['PENDIENTE', 'AUTORIZADO', 'NO_AUTORIZADO'],
        default: 'PENDIENTE'
    }
},
{
    timestamps: true,
    versionKey:false
})

//Revisar con mas detenimiento, poner de acuerdo
// userSchema.virtual('proyectosLiderados', {
//     ref: 'Product',
//     localField: '_id',
//     foreignField: 'lider',
//   });
  
  userSchema.virtual('progressCreados', {
    ref: 'Progress',
    localField: '_id',
    foreignField: 'creadoPor',
  });

userSchema.statics.encryptPassword =  async(password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

userSchema.statics.comparePassword = async(password, receivePassword) => {
    return await bcrypt.compare(password, receivePassword);
}

export default model('User',userSchema)