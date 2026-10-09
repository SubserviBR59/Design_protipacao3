let pontos = 20;
pontos += 10;
console.log("Pontos:", pontos);

const MAX_PONTOS = 100;

try {
    MAX_PONTOS = 200;
} catch (erro) {
    console.log(`${erro.name}: ${erro.message}`);
    console.log("Uma variável declarada com const não pode ser reatribuída.");
}

const nome = "Ana";
const idade = 18;
const estudante = true;
let telefone;
const endereco = null;

console.log("Tipo de nome:", typeof nome);
console.log("Tipo de idade:", typeof idade);
console.log("Tipo de estudante:", typeof estudante);
console.log("Tipo de telefone:", typeof telefone);
console.log("Tipo de endereco:", typeof endereco);
console.log('typeof null retorna "object" por um erro histórico da linguagem.');

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
console.log("Meu nome é " + nome + " e tenho " + idade + " anos.");
