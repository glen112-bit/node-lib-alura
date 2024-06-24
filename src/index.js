// const fs = require('fs')
export function wordsCount(texto){
  const paragrafos = extraiParagrafos(texto)
  const contagem = paragrafos.flatMap((paragrafo) => {
    if(!paragrafo) return [];
    return verificaPalavrasDuplicadas(paragrafo)    
  })
  console.log(contagem);
} 
function extraiParagrafos(texto){
  return texto.toLowerCase().split('\n')
}

function cleanWords(palavra){
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}

function verificaPalavrasDuplicadas(texto){
  const listaPalavras = texto.split(' ')
  const resultado = {};
  
  listaPalavras.forEach((palavra) => {
    if(palavra.length >= 3){
    const cleanedWord = cleanWords(palavra)
    resultado[cleanedWord] = (resultado[cleanedWord] || 0) + 1
      }
  })
  return resultado;

}
