import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import usersRoutes from './routes/user.routes'
import { createRoles } from './libs/initialSetup'
import bodyParser from 'body-parser'
import cors from 'cors'


const app = express()
createRoles();

app.set('pkg', pkg)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors({origin: '*'}))
app.use(express.json())
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        decripcion: app.get('pkg').description,
        version: app.get('pkg').version
    });
})

app.use('/products', productsRoutes)
app.use('/auth', authRoutes)
app.use('/users', usersRoutes)

export default app;


