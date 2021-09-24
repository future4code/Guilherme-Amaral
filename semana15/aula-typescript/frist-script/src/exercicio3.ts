//a) 

type conteudo = {
    autor: string,
    texto: string
    
}

const posts: conteudo[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
]

console.log ('deu certo', posts)


const novoPost: conteudo = { 
     autor: "Gui",
     texto: "Aprendendo Backend"
}

posts.push(novoPost)
console.log ('nova lista de posts', posts)

//--------------------------------------------
//b) 

function buscarPostsPorAutor(posts: conteudo[], autorInformado:string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
}

const postEspecifico = buscarPostsPorAutor(posts, "Gui")
console.log ("texto filtrado", postEspecifico)


