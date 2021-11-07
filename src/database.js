import mongoose from 'mongoose'

//Aca establecemos el como  y a que DB se conecte
mongoose.connect("mongodb://localhost/api-mongoAuth",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log('DB is NOT connected'))