import {Schema, model} from 'mongoose'

const productSchema = new Schema({
    nombre: String,
    category: String,
    price: Number,
    imgUrl: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('Product', productSchema);