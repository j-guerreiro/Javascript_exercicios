function acontece(alunos, numEstudantes) {
    
    let contAlunos = 0;

    for ( let i = 0 ; i < alunos.length ; i++ ) {
        
        if ( alunos[ i ] <= 0 ) {
            
            contAlunos++;
        
        } 
    
    }

    if ( contAlunos < numEstudantes) {
        
        return false;
    
    } 
    else {
        
        return true;
    
    }
}

function aberturas(alunosDia, qtdMinEstudantes) {

   let vet = [];

   for( let i = 0; i < alunosDia.length ; i++ ){
        
        vet.push(acontece(alunosDia[ i ], qtdMinEstudantes));
      
    }
    return vet;
}
