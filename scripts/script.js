// FUNCIONES //
function numerosPares(){
    let pares = '';
    for (let i = 0; i <= 50; i++) {
        if( i % 2 == 0)
        pares += `${i} `;
    }
    return pares;
}
