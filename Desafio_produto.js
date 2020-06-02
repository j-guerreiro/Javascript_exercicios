function produto( numeros) {

    let prod = 1;

    for ( let i = 0 ; i < numeros.length ; i++) {
        indice = numeros[ i ];

        prod *= indice;
    }
    return prod;
}
