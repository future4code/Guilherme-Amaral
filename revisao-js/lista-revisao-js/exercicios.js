// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function(a,b) {
        if (a > b) return 1
        if (a < b) return -1
        return 0
    })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = []

    for (let i = 0; i < array.length; i++) {
        if ( array[i] % 2 == 0) {
            numerosPares.push(array[i])
        }
    }
    return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosPares = []

    for (let i = 0; i < array.length; i++) {
        if ( array[i] % 2 == 0) {
            numerosPares.push(array[i] **2)
        }
    }
    return numerosPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let maiorNumero = 0
    let menorNumero = 0

    if (num1 > num2) {
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    }
    
    let divisivel = maiorNumero % menorNumero == 0
    
    let diferenca = maiorNumero - menorNumero

    return {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: divisivel,
        diferenca: diferenca
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []

    for (let i = 0; numerosPares.length < n; i++) {
        if ( i % 2 === 0) {
            numerosPares.push(i)
        }
    }
    return numerosPares
}
   
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        return "Escaleno"
    } else if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero"
    } else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}