function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log("Nota 6:", classificarNota(6));
console.log("Nota 5:", classificarNota(5));

const corSemaforo = "amarelo";

switch (corSemaforo) {
    case "vermelho":
        console.log("Pare");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "verde":
        console.log("Siga");
        break;
    default:
        console.log("Cor inválida");
}

console.log("Tabuada do 5:");
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

console.log("Contagem regressiva:");
let contador = 5;
while (contador >= 1) {
    console.log(contador);
    contador--;
}

console.log("Par ou ímpar com for:");
for (let numero = 1; numero <= 20; numero++) {
    if (numero % 2 === 0) {
        console.log(`${numero} é par`);
    } else {
        console.log(`${numero} é ímpar`);
    }
}

console.log("Par ou ímpar com while:");
let numero = 1;
while (numero <= 20) {
    if (numero % 2 === 0) {
        console.log(`${numero} é par`);
    } else {
        console.log(`${numero} é ímpar`);
    }
    numero++;
}

// A numeração começa no domingo (1) e termina no sábado (7).
function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Dia inválido";
    }
}

console.log("Dia 1:", diaDaSemana(1));
console.log("Dia 7:", diaDaSemana(7));
console.log("Dia 8:", diaDaSemana(8));
