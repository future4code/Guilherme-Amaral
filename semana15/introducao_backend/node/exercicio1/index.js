// 1

// a Acessamos os parametros passados pelo terminal através do process.argv

// b
const inputName = process.argv[2]
const inputIdade = Number(process.argv[3]) 

console.log (`Olá ${inputName}! Você tem ${inputIdade} anos.`)

// c 

novaIdade = inputIdade + 7

console.log (`Olá ${inputName}! Você tem ${inputIdade} anos. Em sete anos você tera ${novaIdade} anos.`)