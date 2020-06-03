function maisMenos(vetor) {

    var vetorResultante = [];

    var positivos = 0;
    var percentualPositivos = 0;
    var negativos = 0;
    var percentualNegativos = 0;
    var zeros = 0;
    var percentualZeros = 0;
    var total = 0;

    for ( let i = 0 ; i < vetor.length ; i++) {
        if ( vetor[ i ] > 0 ) {
            positivos += 1;
        } else if ( vetor [ i ] < 0 ) {
            negativos += 1;
        } else  {
            zeros += 1;
        }
    }

    total = positivos + negativos + zeros;

    percentualPositivos = ( ( positivos * 100) / total ) / 100;

    percentualNegativos = ( ( negativos * 100 ) / total ) / 100;

    percentualZeros = ( ( zeros * 100 ) / total ) / 100;

    vetorResultante[0] = percentualPositivos;
    vetorResultante[1] = percentualZeros;
    vetorResultante[2] = percentualNegativos;
    

    return vetorResultante;
}
console.log(maisMenos([1, 2, 0, -1]));
