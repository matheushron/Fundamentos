let IsAtivo = false

IsAtivo = 1

console.log(!!IsAtivo)//transformando o IsAtivo em true ou false, colocando !! todo numero menos o 0 fica como true

//exemplo de retornar falsos :
console.log(!!0)
console.log(!!'')

//usando o "ou"
let nome = "1 1 1 1 1"
console.log(nome ||"desconhecido")