export default function trataError(erro) {
  if( erro.code === 'ENOENT' ){
    throw new Error('Archivo no encontrado')
    // return console.log('archivo no encontrado')
  } else {
    return ' Error en la Aplicacion'
  }
};

