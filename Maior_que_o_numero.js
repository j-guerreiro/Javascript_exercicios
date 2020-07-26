/*

Programe uma função maiorQueNum que busca em um dado array apenas os números maiores do que o número fornecido 
no segundo parâmetro da função e retorne um novo array apenas com esses números.

*/

function maiorQueNum(array, num) {
  // Escreva abaixo o seu código:
    vetor = [];
  for ( let i = 0 ; i < array.length ; i++ ) {
    if ( array[i] > num ) {
      vetor.push(array[i]);
    }
  }
  return vetor;
}
