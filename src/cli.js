import fs from 'fs'
import trataError from './errors/errorFunction.js'
import { wordsCount } from './index.js'
// import { trataError } from './errors/errorFunction.js'

const caminhoArquivo = process.argv 
const link = caminhoArquivo[2]

fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
      if(erro) throw erro;
      wordsCount(texto)
    } catch (erro) {
      trataError(erro)
    }
})





