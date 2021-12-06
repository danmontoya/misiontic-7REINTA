import User from './User'
import bcrypt from 'bcrypt'
//----Falta importar todo lo ref a inscripcionModel

const resolversUsers = {
    User: {
        //Aca va lo de inscripciones
    },
    Query:{
        Users: async (parent, args, context) => {
            console.log(args);
            const users = await User.find({_id: args._id});
            return users;
        },
        User: async (parent, args) => {
            const user = await User.findOne({_id: args._id});
            return user;
        }
    },
    Mutation:{
        crearUser: async (parent, args) => {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(args.password, salt);
            const userCreated = await User.create({
                username: args.username,
                identificacion: args.identificacion,
                email: args.email,
                rol: args.rol,
                password: hashedPassword,
            });
            if (Object.keys(args).includes('estado')) {
                usuarioCreado.estado = args.estado;
              }
            return userCreated;

        },
        editarUser: async (parent, args) => {
            const usuarioEditado = await UserModel.findByIdAndUpdate(
                args._id,
                {
                  username: args.username,
                  identificacion: args.identificacion,
                  email: args.email,
                  estado: args.estado,
                },
                {new: true}
            );
            return usuarioEditado;
        },
        eliminarUser: async (parent, args) => {
            if (Object.keys(args).includes('_id')) {
                const usuarioEliminado = await UserModel.findOneAndDelete({ _id: args._id });
                return usuarioEliminado;
              } else if (Object.keys(args).includes('correo')) {
                const usuarioEliminado = await UserModel.findOneAndDelete({ correo: args.correo });
                return usuarioEliminado;
              }
            },
          },
    
};

export {resolversUsers};
