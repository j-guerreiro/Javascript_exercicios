function buscarDivisivelPor(array, num) {

  for ( let i = 0 ; i < array.length ; i++ ) {
    if ( ( array[i] != 0 ) && ( (array[i] % num ) == 0 ) ) {
      let encontrado = array[i];
      return "Número encontrado! O número: " + encontrado + " é divisível por " + num + " !";
      break;
    } 
  }
  return "Nenhum número encontrado";
}

vetor = [0, 9, 4, 7, 128, 42, -1, 301, -5];
numero = 8;

console.log(buscarDivisivelPor(vetor,numero)); 
