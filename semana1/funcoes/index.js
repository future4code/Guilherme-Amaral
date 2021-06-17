// Leia o código abaixo

/*
1

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
*/ 
// a - Vai ser impresso no console o resultado da multiplicação feita na função 10 e 50 
// b - Undefined (nada apareceria no console porque a função não seria invocada)
//---------------------------------------------------------------------------------------------
/*
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
*/

 // a - essa função pega um texto do usuario e verifica sua semelhança com texto defindo no includes. podendo ser true ou false
 // b.i - Eu gosto de cenoura = true
 // b.ii - CENOURA é bom pra vista = true 
 // b. ii - Cenouras crescem na terra = true

//--------------------------------------------------------------------------------------------
/*
function meusDados() {
	console.log ('Eu me chamo Guilherme, tenho 29 anos, natural de Barra Mansa, estudante')
}

meusDados ()
*/

/*
const nome = 'Guilherme'
const idade = 29 
const cidade = 'Barra Mansa'
const profissao = 'Estudante'

function dadosPessoais () {
    console.log (`Eu me chamo ${nome} tenho ${idade} anos, natural de ${cidade}, ${profissao} !`)
}

dadosPessoais ()
*/

//--------------------------------------------------------------------------------------------
/* a
function somaDosNumeros(numero1, numero2) {
	soma = numero1 + numero2
	return soma
}

const resultado = somaDosNumeros(2, 4)
console.log (' O resultado da soma é:', resultado)

*/ 


/*b 
function doisNumerosRetronaBoleano(numero1, numero2){
	const comparacao = numero1 >= numero2
	return comparacao
}

const resultado = doisNumerosRetronaBoleano (8, 28)
console.log ('Resulado:', resultado)
*/ 

/*
c
function numeroPar(numero) {
	const calculo = numero % 2 == 0
	return calculo
}

const resultado = numeroPar(21)
console.log ('O número é Par:', resultado)
*/

/*
function mensagem (texto) {
	console.log (`Este texto tem ${texto.length} caracteres.`)
	console.log (texto.toUpperCase())
}
mensagem("Olá eu me chamo Guilherme")
*/

/*
const numeroInseridoPeloUsuario = Number(prompt('Insira um número!'))
const numeroInseridoPeloUsuario2 = Number(prompt('Insira outro número!'))

console.log (`Numeros digitados: ${numeroInseridoPeloUsuario} e ${numeroInseridoPeloUsuario}.` )

function somaDosNumeros(numero1, numero2) {
	soma = numero1 + numero2
	return soma
}

const resultado = somaDosNumeros(numeroInseridoPeloUsuario, numeroInseridoPeloUsuario2)
console.log ('SOMA:', resultado)

function subNumeros (numero1, numero2) {
	const sub = numero1 - numero2
	return sub
}

const resultado1 = subNumeros(numeroInseridoPeloUsuario, numeroInseridoPeloUsuario2)
console.log ('DIFERENÇA:', resultado1)

function multiplicacaoNumeros (numero1, numero2){
	multiplicacao = numero1 * numero2 
	return multiplicacao
}

const resultado2 = multiplicacaoNumeros(numeroInseridoPeloUsuario, numeroInseridoPeloUsuario2)
console.log('MULTIPLICAÇÃO:', resultado2)

function divisaoNumeros(numero1, numero2) {
	const divisao = numero1 / numero2
	return divisao
}

const resultado3 = divisaoNumeros(numeroInseridoPeloUsuario, numeroInseridoPeloUsuario2)
console.log('DIVISÃO:', resultado3)

*/
