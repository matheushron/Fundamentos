var a = 5
let b = 6 //priorizar declarações com let pois redeclarando outra ariavel com o mesmo nome, ele indica erro;
const c = 7
//sempre dar ctrl+S antes de executar o código;

var a = 30
//let b = 60  //se for descomentado, isso dará um erro;
b = 50 //porém eu posso mudar o valor do let apenas mudando a variavel e não o let;
console.log(a + b)
//a constante C não pode ser mudada sem que gere um erro 
//c = 60 //descomente para gerar um erro em relação a constante.
console.log(c)

