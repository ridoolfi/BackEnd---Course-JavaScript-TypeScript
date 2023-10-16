const nome = 'Angelo'
const sobrenome = 'Marcos'
const idade = 20
const peso = 73
const alturaEmM = 1.81

let imc = peso / (alturaEmM * alturaEmM)
let anoNasc = 2023 - idade

console.log(`${nome} ${sobrenome}, tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} de altura e seu IMC é de ${imc}. ${nome} nasceu em ${anoNasc}`)