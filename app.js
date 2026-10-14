console.log("BLOCO 1 - FUNDAMENTOS E VARIÁVEIS");

let pontos = 20;
pontos += 10;
console.log("Pontos:", pontos);

const MAX_PONTOS = 100;

try {
    MAX_PONTOS = 200;
} catch (erro) {
    console.log("Erro:", erro.name);
    console.log("Uma constante não pode receber outro valor.");
}

let nome = "Ana";
let idade = 20;
let estudante = true;
let valorIndefinido;
let valorNulo = null;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof estudante);
console.log(typeof valorIndefinido);
console.log(typeof valorNulo);

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
console.log("Meu nome é " + nome + " e tenho " + idade + " anos.");

console.log("\nBLOCO 2 - FUNÇÕES");

console.log("Função declarada:", ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

try {
    console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
    console.log("Erro:", erro.name);
}

const ehMaiorDeIdadeExpressao = function (idade) {
    return idade >= 18;
};

console.log("Função de expressão:", ehMaiorDeIdadeExpressao(20));

function dobro(numero) {
    return numero * 2;
}

const dobroExpressao = function (numero) {
    return numero * 2;
};

const dobroArrow = numero => numero * 2;

function dobroPadrao(numero = 1) {
    return numero * 2;
}

console.log("Dobro declarado:", dobro(5));
console.log("Dobro expressão:", dobroExpressao(5));
console.log("Dobro arrow:", dobroArrow(5));
console.log("Dobro sem argumento:", dobroPadrao());

console.log("\nBLOCO 3 - CONTROLE DE FLUXO");

function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log("Nota 7:", classificarNota(7));
console.log("Nota 4:", classificarNota(4));

let corSemaforo = "verde";

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
}

console.log("\nTabuada do 5");

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\nContagem regressiva");

let contador = 5;

while (contador >= 1) {
    console.log(contador);
    contador--;
}

console.log("\nPares e ímpares com for");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} é par`);
    } else {
        console.log(`${i} é ímpar`);
    }
}

console.log("\nPares e ímpares com while");

let numero = 1;

while (numero <= 20) {
    if (numero % 2 === 0) {
        console.log(`${numero} é par`);
    } else {
        console.log(`${numero} é ímpar`);
    }
    numero++;
}

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
            return "Número inválido";
    }
}

console.log("\nDia da semana:", diaDaSemana(3));
console.log("Dia inválido:", diaDaSemana(8));