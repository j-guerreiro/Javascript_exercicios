function podium (lugar) {
    let texto;
    if ( ( lugar < 2)  && (lugar > 0 ) ) {
        texto = "ouro";
        return texto;
    } else if ( ( lugar > 1 ) && ( lugar < 3 ) ) {
        texto = "prata";
        return texto;
        } else if ( ( posto > 2 ) && ( posto < 4 ) ) {
            texto = "bronze";
            return texto;
           } else {
               texto = "Continue participando";
                return texto;
            }
}

console.log(medalhaSegundoOposto(1));
console.log(medalhaSegundoOposto(2));
console.log(medalhaSegundoOposto(3));
console.log(medalhaSegundoOposto(4));
console.log(medalhaSegundoOposto(9));
