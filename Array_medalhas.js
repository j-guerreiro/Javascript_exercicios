function medalhaDeAcordoComPosto(numero) {
    var posto = ["nada","ouro", "prata", "bronze", "nada", "nada"];

    if  ( numero > 0 && numero < 4 ) {
        return posto[numero];
    } else if ( numero > 3) {
        return "nada";
    } else {
        return "nada";
    }

}

//console.log(medalhaDeAcordoComPosto(1));
