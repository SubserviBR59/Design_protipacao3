// Funções declaradas podem ser chamadas antes da declaração (hoisting).
console.log("Maior de idade (declarada):", ehMaiorDeIdade(18));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

try {
    console.log(ehMaiorDeIdadeExpressao(18));
} catch (erro) {
    console.log(`${erro.name}: ${erro.message}`);
    console.log("A variável const fica na zona temporal morta até sua inicialização.");
}

const ehMaiorDeIdadeExpressao = function (idade) {
    return idade >= 18;
};

console.log("Maior de idade (expressão):", ehMaiorDeIdadeExpressao(17));

function dobro(n) {
    return n * 2;
}

const dobroExpressao = function (n) {
    return n * 2;
};

const dobroArrow = n => n * 2;

console.log("Dobro (declarada):", dobro(5));
console.log("Dobro (expressão):", dobroExpressao(5));
console.log("Dobro (arrow):", dobroArrow(5));

function dobroComPadrao(n = 1) {
    return n * 2;
}

console.log("Dobro sem argumento:", dobroComPadrao());
