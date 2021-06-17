/*//Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array) // a mensagem a ser impressa é: a. undefined 

array = null
console.log('b. ', array) // a mensagem a ser impressa é: b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)// a mensagem a ser impressa é: c. 11

let i = 0
console.log('d. ', array[i])// a mensagem a ser impressa é: d. 3 

array[i+1] = 19
console.log('e. ', array)// a mensagem a ser impressa é: e. 23

const valor = array[i+6]
console.log('f. ', valor)// a mensagem a ser impressa é: f. 9

//Leia o código abaixo com atenção 

const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
// O valor impresso no console será em letras Maiúsculas e a frase será " Subi nem ônibus em Mirrocos"

//----------------------------------------------------------------------------


//Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

/*let nomeDoUsuario = prompt('Qual seu nome?')
let emailDoUsuario = prompt('Qual o seu e-mail?')

console.log (`O e-mail ${emailDoUsuario} foi cadastrado com sucesso!. Seja Bem-vindo, ${nomeDoUsuario}!`)
*/
//-------------------------------------------------------------------------------

/*
let comidas = ['Lasanha', 'Churrasco', 'Hamburguer', 'Batata Frita', 'Salsicha']
console.log (comidas)

console.log (`Essas são as minhas comidas favoritas:
${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}`)

let comidasDoUsuario = prompt('Qual a sua comida favorita?')
console.log (`Comida favorita do usuario: ${comidasDoUsuario}`)

comidas[1] = comidasDoUsuario

console.log (comidas)

console.log (`Essas são as comidas favoritas do usuario:
${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}`)

/*
//---------------------------------------------------------

/*let listaDeTarefas = []

let tarefa1 = prompt('Digite a primeira tarefa do dia!')
let tarefa2 = prompt('Digite a segunda tarefa do dia!')
let tarefa3 = prompt('Digite a terceira tarefa do dia!')

console.log(tarefa1, tarefa2, tarefa3)

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log('Essa é a lista de tarefas:', listaDeTarefas)

let tarefaRealizada = Number(prompt('Qual das tarefas foi realizada?')) -1

listaDeTarefas.splice(tarefaRealizada, 1) 

console.log('Essa é a nova lista de tarefas:', listaDeTarefas)
*/


