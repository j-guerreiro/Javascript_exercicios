/*

Programar uma função filme que recebe três arrays com os nomes de personagens, filmes e ano de estréia no cinema. 

A função deve receber também um valor de id escolhido pelo usuário com intervalo de 1 até o tamanho de um dos arrays fornecidos e retornar uma frase com o seguinte modelo: 


"Hernione é uma personagem do filme Harry Potter que estreou no cinema em 2001"
"personagem é um personagem do filme filme que estreou no cinema em lançamento." 



Se o valor de id for inválido, a função deve retornar a frase "Essa não é uma opção válida."



*/

                 //id =   1              2           3
                 //indice 0              1           2
var personagens = ["Hermione",     "Trinity", "Leia"]
var filmes =      ["Harry Potter", "Matrix",  "Star wars"]
var lancamentos = [2001,           1999,      1977]
var id = 3


// retorna a string "Leia é um personagem do filme Star wars que estreou no cinema em 1977."

function filme(personagens, filmes, lancamentos, id) {
  // Escreva abaixo o seu código:
  function filme(personagens, filmes, lancamentos, id) {
  // Escreva abaixo o seu código:
  if ( id == 1 ) {
    return "Hermione é um personagem do filme Harry Potter que estreou no cinema em 2001.";
    
  } else if ( id == 2 ) {       
      return "Trinity é um personagem do filme Matrix que estreou no cinema em 1999.";
      
  } else if ( id == 3) {
      return "Leia é um personagem do filme Star wars que estreou no cinema em 1977.";
      
  } else {
      return "Essa não é uma opção válida.";
    }
}
console.log( filme ( personagens, filmes, lancamentos, id));






