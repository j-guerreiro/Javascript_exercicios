function fatorial( n ) {
    let fat = n ;
    
    let cont = n ;

    for ( let i = 1 ;  i < n ; i++ ) {
        cont -= 1;
        fat *=  cont;
    }
    return fat ;
}

console.log(fatorial(n));
