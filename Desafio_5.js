function escada ( altura ) {
    var cont = 0;
    var umArray= [ ];

    for ( let i = 1 ; i <= altura ; i++ ) {
        let vazio = altura - i;
        cont += 1;
        umArray.push( " ".repeat( vazio ) + "#".repeat( cont ));

    }
    return umArray;
}
console.log(escada(5));
