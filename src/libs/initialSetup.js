import Role from '../models/Rol'

export const createRoles = async () => {
try {
    const count = await Role.estimatedDocumentCount()

    if(count>0) return;
 
    const values = await Promise.all([
     new Role({nombre: "admin"}).save(),
     new Role({nombre: "moderator"}).save(),
     new Role({nombre: "user"}).save()
    ])
 
    console.log(values);
} catch (error) {
    console.error(error);
}
}