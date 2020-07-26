/*

Programe uma função series que recebe dois parâmetros, 
um prefixo com o nome da série e um array com a lista de todos os episódios da série. 
A função deve retornar um novo array com a lista de episódios iniciando com o nome da série.

*/

var harryPotterPrefixo = "Harry Potter";
var harryPotterSeries = [
  "e a Pedra Filosofal",
  "e a Câmara Secreta",
  "e o Prisioneiro de Azkaban",
  "e o Cálice de Fogo",
  "e a Ordem da Fênix",
  "e o Enigma do Príncipe",
  "e as Relíquias da Morte"
];

function series(prefixo, array) {
    // Escreve sua função abaixo:
    var vetor = [];
    for ( let i = 0 ; i < array.length ; i++ ) {
        vetor.push(prefixo + " " +  array[i]);
    }
    return vetor;   
}

console.log(series(harryPotterPrefixo, harryPotterSeries));
