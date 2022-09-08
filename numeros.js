//diferentes formas de declarar um number como é em Js
const peso1 = 3.0
const peso2 = Number('5.0') 

//mostrando os 2 numeros no terminal 
console.log(peso1 + peso2)

//demosntrando que ambos os pesos são do tipo number
console.log(typeof peso1, typeof peso2)

//saber se o numero é do tipo inteiro ou não
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao = 6.5
const avaliacao2 = 5.5

const resultado = (avaliacao * peso1 + avaliacao2 * peso2)/2

//mostradno a nota do aluno 
console.log(resultado.toFixed(2))

//convertendo o valor number em string, o 10 assume a base numerica, se fosse 2 seria em binario
console.log(resultado.toString(10))


//alguns cuidados sobre o number:
console.log(4/0) // ele retorna infinito
console.log("10"/2) //retorna 5 por ser de tipagem fraca 
console.log("palavra"/2) //retorna  NaN - not a number


