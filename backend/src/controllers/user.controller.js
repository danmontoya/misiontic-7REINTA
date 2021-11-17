import User from '../models/User'
import Role from '../models/Rol'


export const createUser = async(req, res) => {
    try {
        const {username, email, password, roles} = req.body;
        const rolesFound = await Role.find({nombre: {$in: roles}});
        console.log(rolesFound);
        console.log('++++');
        console.log(req.body);
        //creating user 
        const user = new User({
            username,
            email,
            password,
            roles: rolesFound.map((role) => role._id)
        })

        //Encrypting password
        user.password = await User.encryptPassword(user.password);

        //saving new user
        const savedUser = await user.save();

        return res.status(200).json({
            _id: savedUser._id,
            username: savedUser.username,
            email: savedUser.email,
            roles: savedUser.roles,
        });
    } catch (error) {
        //res.status(403).json('No fue posible crear el usuario')
        console.error(error);
    }
}