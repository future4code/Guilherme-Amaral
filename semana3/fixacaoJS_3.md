```function calculaNota(ex, p1, p2) {
  const prova1 = p1  
  const prova2 = p2 
  const exercicio = ex + 1
  const media = prova1 + prova2 + exercicio
  const mediaFinal = media / 3 
   
    if(mediaFinal >= 9) {
      const nota1 = ("A")
      return nota1
      
    } else if (mediaFinal < 9 && mediaFinal >= 7.5) {
      const nota2 = ("B")
      return nota2
      
    } else if (mediaFinal < 7.5 && mediaFinal >= 6.5) {
      const nota3 = ("C")
      return nota3
      
      } else if (mediaFinal < 6) {
        const nota4 = ("D")
        return nota4
    }
}```