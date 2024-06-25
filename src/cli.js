import fs from 'fs'
import trataError from './errors/errorFunction.js'
import { wordsCount } from './index.js'
import { montaSaidaArquivo } from './helpers.js'
// import { trataError } from './errors/errorFunction.js'

const caminhoArquivo = process.argv 
const link = caminhoArquivo[2]
const endereco = caminhoArquivo[3]

fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
      if(erro) throw erro;
      const resultado = wordsCount(texto)
      createAndSaveFile(resultado, endereco)
    } catch (erro) {
      trataError(erro)
    }
})
//
// async function createAndSaveFile(listaPalavras, endereco){
  // const newFile = `${endereco}/resultado.txt`
  // const textoPalavras = JSON.stringify(listaPalavras)
    // try {
      // await fs.promises.writeFile(newFile, textoPalavras)
      // console.log('archivo creado');
    // } catch (erro) {
      // throw erro
    // }
// }


function createAndSaveFile(listaPalavras, endereco){
  const newFile = `${endereco}/resultado.txt`
  const textoPalavras = montaSaidaArquivo(listaPalavras)  
  fs.promises.writeFile(newFile, textoPalavras)
    .then(() => {
      console.log('archivo creado');
    })
    .catch((erro) => {
      throw erro
    })
    .finally(() => {
      console.log('operacion finalizada');
    })
}



