//a 
/*
function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    } 

    return estatisticas
}

console.log (obterEstatisticas([10, 20, 30, 50, 90, 135]))

*/
//--------------------------------------------------
//b) todas as variaveis recebem a tipagem number 

//c)

type idades = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatistica: (numeros: number[]) => idades
}

const amostraDeIdades = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros:number[]) => {

        const numerosOrdenados = numeros.sort(
            (a, b) => a - b
        )
        
        let soma = 0
        
        for (let num of numeros) {
            soma += num
        }
        
        const estatisticas = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        } 
        
        return estatisticas
        
    }
}








