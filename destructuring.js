const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua',
        numero: 209
    }
}

    const { nome, idade} = pessoa
    console.log(nome,idade)

    const {nome: n, idade: i} = pessoa
    console.log(nome,idade)

    const {sobrenmome, bemhumorada = true} = pessoa
    console.log(sobrenmome, bemhumorada)

    const {endereco:{numero,logradouro}} = pessoa
    console.log(logradouro,numero)