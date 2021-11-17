import Role from '../models/Rol'
import Fase from '../models/Fase'

export const createRoles = async () => {
    try {
        const count = await Role.estimatedDocumentCount()

        if (count > 0) return;

        const values = await Promise.all([
            new Role({ nombre: "Administrador" }).save(),
            new Role({ nombre: "Lider" }).save(),
            new Role({ nombre: "Estudiante" }).save()
        ])

        const valuesFase = await Promise.all([
            new Fase({ nombre: "Inicio" }).save(),
            new Fase({ nombre: "Desarrollo" }).save(),
            new Fase({ nombre: "Terminado" }).save()
        ])

        console.log(values);
    } catch (error) {
        console.error(error);
    }
}