function mover(umArray, outroArray) {

    //remover o ultimo elemento do primeiro Array
    // salvar o elemento removido do primeiro Array em uma variavel
    //inserir o elemento do primeiro Array salvo na variável ultimoElemento no outroArray

    var ultimoElemento = umArray[umArray.length - 1];
    var removerUltimo = umArray.pop();
    outroArray.push(ultimoElemento);
    

}

mover([1,2], [4,5,3]);
