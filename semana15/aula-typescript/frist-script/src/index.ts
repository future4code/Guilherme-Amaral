// a) Não é possivel atribuir um numero para um variavel atribuida com valor string, porque o TS é um lingaguem tipada.
// para atribuir um number a string é necessario atribuir mais de um valor para a variavel. 

let minhaString: string | number = 'Hello world'
console.log (minhaString)

minhaString = 5
console.log(minhaString)

// --------------------------------------------------------------------------------
//b)

let meuNumero: number = 13 
console.log(meuNumero)

//Para que a variavel criada aceite uma string, é necessário atribuir além do tipo number o tipo string no seu valor.

let meuNumero2: number | string = "Teste"
console.log(meuNumero2)

meuNumero2 = 35 
console.log(meuNumero2)

//--------------------------------------------------------
//c) 
/*
type dados = {
    name: string,
    age: number,
    color: string
}

const dadosPessoais: dados = {
    name: "Guilherme",
    age: 30,
    color: "Vermelho"
}

const dadosPessoas2: dados = {
    name: "Raila",
    age: 25,
    color: 'Azul'
}

const dadosPessoais3: dados ={
    name: "Amaral",
    age: 50,
    color: "Laranja"
}

console.log (dadosPessoais, dadosPessoas2, dadosPessoais3)
*/
//---------------------------------------------------------------
//d)

enum color {
    VERMELHO = 'Vermelho',
    AZUL = 'Azul',
    LARANJA = 'Laranja'
}

type dados = {
    name: string,
    age: number,
    color: color
}

const dadosPessoais: dados = {
    name: "Guilherme",
    age: 30,
    color: color.VERMELHO
}

const dadosPessoas2: dados = {
    name: "Raila",
    age: 25,
    color: color.AZUL
}

const dadosPessoais3: dados ={
    name: "Amaral",
    age: 50,
    color: color.LARANJA
}

console.log (dadosPessoais, dadosPessoas2, dadosPessoais3)

