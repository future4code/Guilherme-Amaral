/*const bool1 = true
const bool2 = false
const bool3 = !bool2 //true

let resultado = bool1 && bool2
console.log("a. ", resultado)//false

resultado = bool1 && bool2 && bool3//false 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2)//true
console.log("c. ", resultado)

console.log("d. ", typeof resultado)//booleam*/
//--------------------------------------------------------------------------

/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)*/

//Neste exemplo o colega esqueceu de converter a string do prompt para number, ao inves da soma, ocorreu a concatenação dos valores digitados

//----------------------------------------------------------------------------

/*let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)*/

//---------------------------------------------------------------------------

/*let idadeUsuario = Number(prompt('Qual é a sua idade?'))
let idadeMelhorAmigo = Number(prompt('Qual a idade do seu melhor amigo(a)?'))
let resultado = idadeUsuario > idadeMelhorAmigo 
let resultado2 = idadeUsuario - idadeMelhorAmigo

console.log ('Sua idade é maior que a idade do seu melhor amigo?', resultado)
console.log ('A diferença de idade entre você e seu amigo é de:', resultado2, 'anos')
*/
//----------------------------------------------------------------------------

/*let numeroPar = Number(prompt('Digite um número PAR!'))
console.log ('Resto da divisão:', numeroPar % 2)
*/
//Quando digitamos um número PAR, o resto da divisão é = 0 
//Quando digitamos um número IMPAR, o resto da divisão é = 1 

//---------------------------------------------------------------------------

/*
let idadeEmAnos = Number(prompt('Qual a sua idade em anos?'))
let idadeEmMeses = idadeEmAnos * 12 
let idadeEmDias = idadeEmAnos * 365
let idadeEmHoras = idadeEmDias * 24

console.log ('Você tem', idadeEmMeses, 'meses de idade!')
console.log ('Voce tem', idadeEmDias, 'dias de idade!')
console.log ('Você tem', idadeEmHoras, 'horas de idade!')
*/

//---------------------------------------------------------------------------

let numero1 = Number(prompt('Digite um número!'))
let numero2 = Number(prompt('Digite outro número!'))
let resto1 = numero1 % numero2


console.log('Primeiro número:', numero1)
console.log('Segundo número:', numero2)


console.log ('O primeiro número é maior que o segunto número?', numero1 > numero2)
console.log ('O primeiro número é igual ao segundo número?', numero1 === numero2)
console.log ('O primeiro número é divisivel pelo segundo?', resto1 === numero1 / resto1)
console.log ('O segundo número é divisivel pelo primeiro?', resto1 === numero2 / resto1)



