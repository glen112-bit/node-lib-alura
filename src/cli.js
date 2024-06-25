import fs from 'fs';
import path from 'path';
import trataError from './errors/errorFunction.js';
import { wordsCount } from './index.js';
import { montaSaidaArquivo } from './helpers.js';
import { Command } from 'commander';

const program = new Command()

program
  .version('0.0.1')
  .option('-t, --texto <string>', 'camino del texto a ser procesado')
  .option('-d, --destino <string>', 'camino de carpeta donde guardar archivo de resultados')
  .action((options) => {
    const { texto, destino } = options;

    if(!texto || !destino){
      console.error('error: por favor introducir camino de origen y destino')
      program.help();
      return
    }

    const caminoTexto = path.resolve(texto);
    const caminoDestino = path.resolve(destino)
      try {
        procesaArchivo(caminoTexto, caminoDestino) 
        console.log('texto procesado');
      } catch (erro) {
        console.log('ocurrio un error en el procesamiento', erro)
      }
  })
program.parse()

// const caminhoArquivo = process.argv
// const link = caminhoArquivo[2]
// const endereco = caminhoArquivo[3]

function procesaArchivo(texto, destino){
  fs.readFile(texto, 'utf-8', (erro, texto) => {
      try {
        if(erro) throw erro;
        const resultado = wordsCount(texto)
        createAndSaveFile(resultado, destino)
      } catch (erro) {
        trataError(erro)
      }
  })
}
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



