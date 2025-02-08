// FUNCIONES //
function numerosPares(){
    let pares = '';
    for (let i = 0; i <= 50; i++) {
        if( i % 2 == 0)
        pares += `${i} `;
    }
    return pares;
}

function conteo(){
    let contador = 0;

    while (contador < 5) {
        contador++;
        console.log(contador);
    }
}