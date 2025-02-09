const btn1 = document.getElementById("btn1").addEventListener('click', numerosPares);
const btn2 = document.getElementById("btn2").addEventListener('click', conteo);
const btn3 = document.getElementById("btn3").addEventListener('click', clasificadorEdades);
const btn4 = document.getElementById("btn4").addEventListener('click', tablaMultiplicar);
const btn5 = document.getElementById("btn5").addEventListener('click', conteoRegresivo);
const btn6 = document.getElementById("btn6").addEventListener('click', sumatoriaNumeros);
const btn7 = document.getElementById("btn7").addEventListener('click', numeroDivisibles3);

// FUNCIONES //
function numerosPares(){
    let pares = '';
    for (let i = 0; i <= 50; i++) {
        if( i % 2 == 0)
        pares += `${i} `;
    }
    return console.log(pares);
}

function conteo(){
    let contador = 0;

    while (contador < 5) {
        contador++;
        console.log(contador);
    }
}

function clasificadorEdades(){
    let num = 25;
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

function sumatoriaNumeros(){
    let suma = 0;
    let cont = 1;
    let num = 5
    while (cont <= num) {
        suma += cont;
        cont+=1;
    }

    console.log(`La suma de los números del 1 al ${num} es: ${suma}`);
}

function numeroDivisibles3(){
    let max = 30;
    for (let i = 1; i <= max; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}