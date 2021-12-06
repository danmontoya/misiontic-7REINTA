import User from '../Users/User'
import mongoose from 'mongoose'
import Product from '../Projects/Projects'

const {Schema, model } = mongoose

const progressSchema = new Schema({
    fecha:{
        type: Date,
        required: true,
    },
    descripcion:{
        type: String,
        required: true,
    },
    observaciones:[
        {
            type: String,
        },
    ],
    proyecto:{
        type: Schema.Types.ObjectId,
        ref: Product,
        required: true,
    },
    creadoPor:{
        type: Schema.Types.ObjectId,
        ref: User,required: true,
    },
});

export default model('Progress', progressSchema)