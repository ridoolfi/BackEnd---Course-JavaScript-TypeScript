// Operadores Aritméticos

    /**  
     * Aritméticos 
     * + <Adição e concatenação> 
     * - <Subtração>
     * / <Divisão> 
     * * <Multiplicação>
     * ** <Potenciação, elevação com expoente>
     * % <Resto da divisão >
    */

    /** Ordem de precedência
     * 1º - ()
     * 2º - **<Potenciação> 
     * 3º - * / %
     * 4º - + -
     * */ 

    // Dentro do JS, assim como na matemática, cada operador tem sua posição na ordem de precedencia
    // No entanto, essa ordem pode ser transformada utilizando os Parenteses

let contador = 10;

while(contador > 0){    
    --contador                     // Incrementação em uma váriavel <OPERADOR DE INCREMENTO = ++> 
    console.log(contador);         // Incrementação não pode ser utilizada dentro de uma constante, pois não pode ser alterada
};                                 // Decremento pode ser realizado com --

console.log('')

let contador2 = 0
while (contador2 < 20){           // Incrementação com passo maior que 1
    contador2 += 5                // Operadores de atribuição -= += *= /= **=
    console.log(contador2)
}


const num1 = 10;
const val = 'Angelo'               // Retorna NaN(Not a Number)
console.log(num1 * val)            // Se dentro da String estivesse um número, o JS resolveria transformando o número para inteiro



//const numero = parseInt('37');                // Conversão para inteiro
const numero = Number('37');
console.log(typeof numero, numero);