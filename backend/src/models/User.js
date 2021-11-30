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
    }]
},{
    timestamps: true,
    versionKey:false
})

userSchema.statics.encryptPassword =  async(password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

userSchema.statics.comparePassword = async(password, receivePassword) => {
    return await bcrypt.compare(password, receivePassword);
}

export default model('User',userSchema)