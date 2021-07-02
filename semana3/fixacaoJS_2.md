```function calculaPrecoTotal(quantidade) {
  
  const menosDeumaDuzia = 1.30
  const maisDeumaDuzia = 1.00
   
    if (quantidade < 12) {
      const primeiroCaso = quantidade * menosDeumaDuzia 
   
      return primeiroCaso
      
    } else if (quantidade >= 12) {
      const segundoCaso = quantidade * maisDeumaDuzia
      
       return segundoCaso
    }
    
}```