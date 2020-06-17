function alturaArvoreUtopica( n ) {
    let vet = [];
    let res = 0;
    let c = false;
    let ultimoElemento;

    for( let i = 0 ; i < n ; i++ ) {
         
       if ( c == false ) {
           res += 1;
           c = true;
       } else {
           res *= 2 ;
           c = false;
        }  
       
       vet.push(res);
   
    }

    for ( let i = 0 ; i < n ; i++ ) {
        console.log(vet[i]);

    }
    ultimoElemento = vet[vet.length - 1];
    return console.log("Resultado: " + ultimoElemento);

}
console.log( alturaArvoreUtopica( 7 ) );
