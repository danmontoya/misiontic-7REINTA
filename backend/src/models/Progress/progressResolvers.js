import Progress from './Progress'

const progressResolvers = {
    Query: {
        Progress: async (parent, args) => {
            const Progresses = await Progress.find().populate('projects').populate('creadoPor');
            return Progresses; 
        },
        filtrarProgress: async (parent, args) => {
            const progressFiltrado = await Progress.find({projects: args._id})
                .populate('projects')
                .populate('creadoPor');
            return progressFiltrado;
        },
    },
    Mutation:{
        crearProgress: async (parent, args) => {
            const progressCreado = Progress.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            });
            return progressCreado;
        },
    },
};

export {progressResolvers};