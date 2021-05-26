import express from 'express'
import {crearReceptorDeArchivos} from './EnvioYRecepcionDeArchivos.js'
import path from 'path'

function createServer(){

    const cantArchivosAPasar = 1
    const keyInput = "image"
    const __dirname = path.resolve(path.dirname(''))
    let port = 8080

    const app = express()

    const upload = crearReceptorDeArchivos({
        directorio: __dirname + '/public',
        cantArchivosAPasar, 
        keyInput
    })

    app.use(express.json())
    app.use('/static', express.static(path.join(__dirname, 'public')))

    app.get('/', (req, res) => {
        res.send("¡Bieenvenidos al Himalaya!")
    })

    app.post('/upload', upload, (req,res) => {
        cantArchivosAPasar > 1 ? console.log(req.files) : console.log(req.file)
        console.log('post con exito')
    })

    const server = app.listen(port, () => {
        console.log(`Conectado en el puerto ${port}`)
    })
    server.on('error', error => { console.log(error.message) })
}

export { createServer }




