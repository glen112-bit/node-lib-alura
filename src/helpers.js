function filtraOcorrencias(paragrafo){
  return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1)
}

function montaSaidaArquivo(listaPalabras){
  let textoFinal = '';
  listaPalabras.forEach((paragrafo, indice) => {
    const duplicadas = filtraOcorrencias(paragrafo).join(', ');
    textoFinal += `palabras duplicadas ${indice + 1}: ${duplicadas} \n`
  })
  return textoFinal
}

export { montaSaidaArquivo }
