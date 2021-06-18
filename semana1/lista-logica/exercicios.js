// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt('Digite a alura'))
  const largura = Number(prompt('Digite a largura'))
  console.log (altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite o ano atual'))
  const anoDeNascimento = Number(prompt ('Digite o ano de nascimento'))
  const idade = anoAtual - anoDeNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Qual o seu nome?')
  const idade = prompt('Qual a sua idade?')
  const email = prompt ('Qual o seu e-mail')
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite sua primeira cor favorita")
  const cor2 = prompt("Digite sua segunda cor favorita")
  const cor3 = prompt('DIgite sua terceira cor favorita')

  const array = []

  array.push (cor1, cor2, cor3)

  console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const array1 = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = array1;
  return array;  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 const strin1 = string1.toUpperCase()
 const strin2 = string2.toUpperCase()

 return strin1 == strin2

}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite o ano atual?'))
  const anoDeNascimento = Number(prompt('Qual seu ano de nascimento?'))
  const anoRG = Number(prompt('Qual ano a sua carteira de identidade foi emitida?'))
  const idade = anoAtual - anoDeNascimento
  const renovaCarteira = anoAtual - anoRG 
  const renova1 = idade <= 20 && renovaCarteira >= 5
  const renova2 = idade > 20 && idade <= 50 && renovaCarteira >= 10 
  const renova3 = idade > 50 && renovaCarteira >=15 
  console.log (renova1 || renova2 || renova3)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const resultado = ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0
return resultado
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt('Você tem mais de 18 anos?')
  const escolaridade = prompt('Você tem ensino médio completo?')
  const disp = prompt('Você tem disponibilidade exclusiva durante o horario do curso?')
  const idadebol = (idade === 'sim')
  const escolaridadebol = (escolaridade === 'sim')
  const dispbol = (disp === 'sim')
  const final = (idadebol && escolaridadebol && dispbol)
  console.log (final)
}