import multer from 'multer'

function crearReceptorDeArchivos({directorio, cantArchivosAPasar, keyInput}){

    //le decimos a multer donde y como guardar nuestros archivos
    const fileStorageEngine =  multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, directorio)
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
      })
    
    let upload;

    if(cantArchivosAPasar > 1){
      upload = multer({ storage: fileStorageEngine }).array(keyInput, cantArchivosAPasar)
    }else{
      upload = multer({ storage: fileStorageEngine }).single(keyInput)
    }

    return upload;
}

export {crearReceptorDeArchivos}