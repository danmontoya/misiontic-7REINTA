import User from '../models/Users/User'
import jwt from 'jsonwebtoken'
import config from '../config'
import Role from '../models/Rol'


export const signUp = async (req, res) => {
    const { username, identificacion, email, password, roles } = req.body;
    const newUser = new User({
        username,
        email,
        identificacion,
        password: await User.encryptPassword(password),
        roles
    })

    if (roles) {
        const foundRoles = await Role.find({ nombre: { $in: roles } })
        newUser.roles = foundRoles.map(role => role._id)
    } else {
        const role = await Role.findOne({ nombre: "user" })
        newUser.roles = [role._id];
    }

    const userSaved = await newUser.save();
    console.log(userSaved);
    const token = jwt.sign({ id: userSaved._id }, config.SECRET, { expiresIn: 84600 })
    res.status(200).json(token);
}

export const login = async (req, res) => {
    try {
        const userFound = await User.findOne({ email: req.body.email }).populate("roles")

        if (!userFound) {
            res.status(400).json({ message: "User not found" })
        }
        //console.log(userFound.roles);
        const matchPsswrd = await User.comparePassword(
            req.body.password,
            userFound.password
        );

        if (!matchPsswrd) {
            return res.status(401).json({
                token: null,
                message: 'Invalid password'
            })
        }
        const token = jwt.sign({id: userFound._id}, config.SECRET, {expiresIn: 86400})
        res.json({ token })
    } catch (error) {
        console.log(error);
    }
}