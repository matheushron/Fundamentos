//Função sem retorno 
imprimirSoma(2,3)

function imprimirSoma(a, b){
    console.log(a + b)
}

//função com retorno
function soma(a = 0, b = 0){ //dizendo que se eu não setar os valores de A e b, eles assumem o valor 0
    return a + b
}
console.log(soma())