//1 
/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

  */ 
  // foi impresso no console as informações do usuario nome e apelido e também foi impresso o indice de cada objeto.  

  //2 
  /*
  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)
*/
  //Séra impresso no console somente o nome dos usuarios
/*
  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)
*/
  //Vai ser impresso no console nome e apelido de Amanda e lais, Chijo não aparecer

//-----------------------------------------------------------------------------------------------
/*
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomeDosDoguinhos = pets.map((item, index, array) => {
     return item.nome
 })

 console.log(nomeDosDoguinhos)

 const cachorroSalsicha = pets.filter ((item, index, array) => {
     return item.raca === "Salsicha"
 })

 console.log (cachorroSalsicha)

//----------------------------------------------------------------------------

 const clientesPoodle = pets.filter ((item, index, array) => {
     return item.raca === 'Poodle'
 })

console.log (clientesPoodle)

const descontoParaPoodles = clientesPoodle.map ((item, index,array) => {
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
})

//-----------------------------------------------------------

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomeDosItens = produtos.map ((item, index, array) => {
     return item.nome
 })

 console.log (nomeDosItens)
//---------------------------------------------------------------
const nomeEpreçoComDesconto = produtos.map ((produto) => {
    return {nome: produto.nome, preco: produto.preco * 0.05}
})

console.log(nomeEpreçoComDesconto)

//-------------------------------

const apenasBebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})

console.log (apenasBebidas)

//-----------------------------------------------------------------
let apenasYpe = produtos.filter ((item, index, array) => {
    return item.nome.includes('Ypê')
})

console.log (apenasYpe)

//----------------------------------------------------------------

const compreProdutos = apenasYpe.map ((item, index, array) => {
        console.log (`Compre ${item.nome} por ${item.preco}`)
})

console.log (apenasYpe)

*/

  const tarefas = [
    { titulo: "Fazer Remember", status: "done", tempo: 30 },
    { titulo: "Fazer Challange", status: "todo", tempo: 30 },
    { titulo: "Assistir Aula", status: "done", tempo: 120 },
    { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },
    { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },
    { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },
    { titulo: "Fazer desafio", status: "doing", tempo: 60 },
    { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
    { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
    { titulo: "Enviar Exercício", status: "todo", tempo: 15 },
    { titulo: "Jogar Videogame", status: "todo", tempo: 120 },
    { titulo: "Assistir Novela", status: "todo", tempo: 90 }
 ]

let tarefasFinalizadas = tarefas.filter ((item, index, array) => {
  return item.status.includes("done")
})

let tarefas2 = tarefasFinalizadas.map ((item,index,array) => {
  return item.titulo
})

console.log(tarefas2)


