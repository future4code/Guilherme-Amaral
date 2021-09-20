// 2

const operacao = process.argv[2]

switch (operacao) {

    case "soma": 
        const inputSoma = Number(process.argv[3]) + Number(process.argv[4])
        console.log ("Resultado da Soma:", inputSoma)
    break;

    case "sub": 
        const inputSub = Number(process.argv[3]) - Number(process.argv[4])
        console.log ("Resultado da Subtração:", inputSub)
    break;

    case "mult": 
        const inputMult = Number(process.argv[3]) * Number(process.argv[4])
        console.log ("Resultado da Multiplicação:", inputMult)
    break;

    case "div": 
        const inputDiv = Number(process.argv[3]) / Number(process.argv[4])
        console.log ("Resultado da Divisão:", inputDiv)
    break;
}

