    // Tipos de dados primitivos

    // number, string, undefined, null, booelan, symbol

const nome = 'Angelo';
const nome1 = "Angelo";              // <== Strings
const nome2 = `Angelo`;


const num = 10;
const num2 = 10.52;          // <== Numbers


let nomeAluno;             // <== Undefined, Não aponta para lugar nenhum na memória


let sobrenomeAluno = null;   // <== Nulo -> não aponta para local nenhum na memória


const aprovado = true        // <== Boolean, verdadeiro ou falso (valores lógicos)



console.log(typeof sobrenomeAluno, sobrenomeAluno)  // Checar o tipo primitivo


let a = 2
let b = a
console.log(a, b)

a = 3;
console.log(a, b)
