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

function clasificadorEdades(num = 25){
    if (num <=0) {
        console.log(`La edad no es válida.`);
    } else if (num > 0 && num <=12) {
        console.log(`Eres un niño.`)
    } else if(num >= 13 && num <=19){
        console.log(`Eres un adolescente.`);
    } else if(num >= 20 && num <=64){
        console.log(`Eres un adulto.`);
    } else if(num >= 65){
        console.log(`Eres un adulto mayor.`);
    }
}

function tablaMultiplicar(){
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}

function conteoRegresivo(){
    for (let i = 10; i > 0; i--){
        console.log(i);
    }
    console.log(`¡Despegue!`);
}

function sumatoriaNumeros(num = 5){
    let suma = 0;
    let cont = 1;
    while (cont <= num) {
        suma += cont;
        cont+=1;
    }

    console.log(`La suma de los números del 1 al ${num} es: ${suma}`);
}