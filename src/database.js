import mongoose from 'mongoose'
import config from './config'

//Aca establecemos el como  y a que DB se conecte
//normal
//"mongodb://localhost/api-mongoAuth"
const mongoAtlas = `mongodb+srv://${config.USERADMI}:${config.PASSWORD}@josedb.o8ohx.mongodb.net/api`
mongoose.connect(mongoAtlas,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log('DB is NOT connected'))