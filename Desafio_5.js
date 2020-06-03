function escada ( altura ) {
    var cont = 0;
    var umArray= [ ];

    for ( let i = 0 ; i < altura ; i++ ) {
        
        cont += 1;
        umArray.push( '#'.repeat( cont ) );

    }
    return umArray;
}
console.log(escada(5));
