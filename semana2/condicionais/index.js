// 1
// a) Explique o que o código faz. Qual o teste que ele realiza? 
//O codigo pega o numero inserido pelo ususario, joga dentro da variavel, converte para numero e depois,
//dentro da condição, executa uma operação com objeto de saber se o resto da divisão é igual a 0. 
//Sendo igual a 0 ele executa o primeiro codigo ('Passou no teste')
//Não sendo igual a 0 ele executa  o segundo codigo ('Não passou no teste')

//b) Para que tipos de números ele imprime no console "Passou no teste"? 
// numeros Pares

//c) Para que tipos de números a mensagem é "Não passou no teste"?
// numeros impars

//-----------------------------------------------------------------------------------------------------------
//2 

//a)Para que serve o código acima?
// o codigo acima serve para automatizar a tarefa, imprimindo o nome da fruta junto com o seu preço 

//b) A mensagem impresssa será 'O preço da fruta maça é R$ 2.25'

//c) O codigo rodaria a ultima opção default 

//------------------------------------------------------------------------------------------------------------
//3

//a) A primeira linha pede para o usuario definir um numero e depois converte a string gerada em number 

//b) Digitando 10, a mensagem passaria no teste. Digitando -10 não passaria no teste 

//c) Sim, haverá erro no console porque a variavel definida dentro da condição está no escopo filho e sem retorno,
// a mesma não poderá ser acessada pelo escopo pai. 

//------------------------------------------------------------------------------------------------------------
/*
const usuarioPodeDirigir = Number(prompt('Qual é a sua idade?'))

const podeDirigir = (vaiPoderDirigir) => {
    if (usuarioPodeDirigir >= 18) {
        console.log ("Pode dirigir!!")
    } else {
        console.log ('Você não pode dirigir')
    }
}
podeDirigir(usuarioPodeDirigir)
*/

//const periodoDeEstudo = prompt('Se você estuda de manha: Digite M, se estuda de tarde: Digite T, se estuda a noite: Digite: N')

/*
const horarioDeEstudo = (periodo) => {
    if (periodoDeEstudo.toUpperCase() === 'M') {
        console.log('Bom dia!!')
    } else if (periodoDeEstudo.toUpperCase() === "T") {
        console.log ('Boa Tarde!')
    } else if (periodoDeEstudo.toUpperCase() === 'N') {
        console.log('Boa Noite!') 
    } else {
        console.log('Não entendi oq você quis dizer')
    }
}


 horarioDeEstudo(periodoDeEstudo)

/*
const horarioDeEstudo = (periodo) => {
    switch (periodoDeEstudo.toUpperCase()) {
        case 'M': 
        console.log ('Bom dia!!')
        break

        case 'T': 
        console.log ('Boa Tarde!')
        break

        case 'N': 
        console.log('Boa Noite!')
        break

        default:
            console.log('Não encontrei seu periodo de estudo ;(')
    }
}

horarioDeEstudo(periodoDeEstudo)
*/

/*
const generoDofilme = prompt('Qual o genero do filme que irão assistir?')
const ingressoDofilme = prompt('Qual o valor do ingresso do filme?')

const filmeQueVaiSerAssistido = (genero, ingresso) => {
    if (generoDofilme === 'fantasia' && ingressoDofilme < 15) {
        console.log ("Bom Filme!!")
    } else {
        console.log ('Escolha outro Filme ;(')
    }
}

filmeQueVaiSerAssistido(generoDofilme, ingressoDofilme)
*/ 

/*
const generoDofilme = prompt('Qual o genero do filme que irão assistir?')
const ingressoDofilme = prompt('Qual o valor do ingresso do filme?')
const lanchinho = prompt('Qual lanchinho você vai comprar para acompanhar o filme: Pipoca ou Chocolate?')

const filmeQueVaiSerAssistido = (genero, ingresso) => {
    if (generoDofilme === 'fantasia' && ingressoDofilme <= 15) {
        console.log ("Bom Filme!!")
        console.log(`Aproveite o(a) seu(a) ${lanchinho}!`)
    } else {
        console.log ('Escolha outro Filme ;(')
    }
}

filmeQueVaiSerAssistido(generoDofilme, ingressoDofilme)
*/




