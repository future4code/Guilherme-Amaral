/*
// 1
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])// Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1])// Virginia Cavendish
console.log(filme.transmissoesHoje[2])// canal: "Globo", horario: "14h"

//-----------------------------------------------------------------------------

// 2 

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
} 

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

//a
console.log(cachorro) // no console.log vai aparecer o nome: Juca, idade: 3 e raça: SRD, na fora de objeto 
console.log(gato) // no console.log vai aparecer o nome: Juba, idade 3 e raça: SRD, na forma de objeto. 
console.log(tartaruga) // no console.log vai aparecer o Nome: Jubo, idade: 3, raca: SRD

//b 
// A sintaxe dos 3 pontos também chamada como spread copia uma variavel para que possa ser alterada em comprometer a variavel atual 

//--------------------------------------------------------------------------

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//a 
//b 

*/
//-----------------------------------------------------------------------------
//1

const pessoa = { 
    nome: "Amanda",
    apelido: ["Amandinha", "Mandinha", "Mandi"]
}

function nomeEapelidos (pessoa) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelido[0]}, ${pessoa.apelido[1]} ou ${pessoa.apelido[2]}!`)
}
    
nomeEapelidos(pessoa)

//2

const pessoa1 = {
    ...pessoa, 
    novosApelidos: ["Dinha", "Amandi", "Manda"]
}

function novosApelidos (pessoa1) {
    console.log(`Eu sou ${pessoa1.nome}, mas pode me chamar de ${pessoa1.novosApelidos[0]}, ${pessoa1.novosApelidos[1]} ou ${pessoa1.novosApelidos[2]}!`)
}

novosApelidos(pessoa1)

//----------------------------------------------------------------------------

const objeto1 = { 
    nome: 'Guilherme',
    idade: 29,
    profissão: 'Advogado'
} 
const objeto2 = { 
    nome: 'Raila',
    idade: 24,
    profissão: 'RH'
} 

function retronaObjetos1 (objeto) {
    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissão, objeto.profissão.length]
}

console.log (retronaObjetos1(objeto1))
console.log (retronaObjetos1(objeto2))

//----------------------------------------------------------------------------

//3 

const carrinho = []

const fruta1 = { fruta: 'Banana', diponibilidade: true}
const fruta2 = {fruta: 'Maça', disponibiliade: true}
const fruta3 = {fruta: 'Mamão', disponibiliade: true}

function addCarrinho () { 
    carrinho.push(fruta1, fruta2, fruta3 )
}

addCarrinho()
console.log(carrinho)

//-----------------------------------------------------------------------------
//1

function perguntas() { 
    const nomeUsuario = prompt('Qual é o seu nome?')
    const idadeUsuario = prompt('Qual sua idade?')
    const profissaoUsuario = prompt('Qual sua profissão?')
    const objeto = {
        Nome: nomeUsuario, 
        Profissão: profissaoUsuario,
        Idade: idadeUsuario}
    return objeto     
    }
console.log(perguntas())

//2 

function filmes() {
    const filme1 = { 
        titulo: 'Caverna do dragão',
        anoDeLancamento: 1991
    }
    const filme2 = {
        titulo: 'Homem Aranha',
        anoDeLancamento: '2005'
    }

    console.log('O primeiro filme foi lançado antes do segundo?', filme1.anoDeLancamento > filme2.anoDeLancamento)
    console.log('O primeiro filme foi lançado no mesmo ano do segundo?', filme1.anoDeLancamento === filme2.anoDeLancamento)
}

filmes()

//3 




