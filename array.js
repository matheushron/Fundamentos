const valores =  [7,8,9,10,11]

console.log(valores[0],valores[3])

//adicionando um novo indice ao array
valores[5] = 12

console.log(valores[5])

//mostradno quantos valores  tenho no array 
console.log(valores.length)

//adicionando valores ao array 
valores.push({id:3},'texto','numero',99)
console.log(valores)

//deletando valores pelo indice : 
delete valores[3]
console.log(valores)

//mostrando que um array é um objeto
console.log(typeof valores)