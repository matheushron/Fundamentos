let qualquer = 'legal'
console.log(qualquer)
console.log(typeof qualquer) //demonstrando que não é porque ela tem tipagem fraca  que as variaveis não tem tipo 

qualquer = 3.15
console.log(qualquer)
console.log(typeof qualquer)

//evita nomes como siglas, genericos, no geral que criem uma falta de entendimento daquela variavel 

//Exemplo de jeito correto

let TamanhoDoVetor = 5
console.log(TamanhoDoVetor)

//Exemplo de jeito confudo

let TDV = 6
console.log(TDV)