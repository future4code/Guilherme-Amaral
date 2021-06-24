/*

let valor = 0

for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
*/

//------------------------------------
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

//a) aparecerá escrito no console todos os numeros maiores que 18 
*/

//----------------------------------------

/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++

  */ 

//----------------------------------------------

/* 1
const bichinhos = () => {
    const quantidadeDeBichinhos = Number(prompt('Quantos bichinhos de estimação você tem?'))
    let = arrayBichinhos = []
    if (quantidadeDeBichinhos === 0) { 
        console.log('Que Pena!, você pode adotar um pet')
    } else {
       let bichos = 0
        while (bichos < quantidadeDeBichinhos) { 
            const nomeDosBichos = prompt ('Digite o nome dos Seus animais de esimação')
            bichos++
            console.log(nomeDosBichos)
            arrayBichinhos.push(nomeDosBichos)
        }
    }    
    }
bichinhos ()
console.log (arrayBichinhos)

*/

//-------------------------------------------------------

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

const imprimeArrayOriginal = (array) => {
    mensagem = ""
    for (let numeros of arrayOriginal){
        mensagem = arrayOriginal
    }
    console.log(mensagem)
}

imprimeArrayOriginal(arrayOriginal)


/*
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let arrayOriginalDividoPor10 = (array) => {
   for ( i = 0 ; i < arrayOriginal.length; i++) {
       let calculo = arrayOriginal[i] 
       console.log(calculo)
   }
}
  
arrayOriginalDividoPor10(arrayOriginal)
*/

/*
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let arrayOriginalDividoPor10 = (array) => {
   for ( i = 0 ; i < arrayOriginal.length; i++) {
       let calculo = arrayOriginal[i] / 10
       console.log(calculo)
   }
}
  
arrayOriginalDividoPor10(arrayOriginal)

*/







