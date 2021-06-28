
let inicioJogo = () => {
   let confirmaçãoUsuario = confirm ('Bem vindo ao jogo de Blackjack') 
      if (confirmaçãoUsuario) {
         console.log ('Iniciar uma nova rodada!')
         let darAsCartas = () => { 

            const cartaUsuario1 = comprarCarta()
            const cartaUsuario2 = comprarCarta()
            const cartaComputador1 = comprarCarta()
            const cartaComputador2 = comprarCarta()
         
            console.log('Usuario - cartas:', cartaUsuario1.texto, cartaUsuario2.texto, '-', cartaUsuario1.valor + cartaUsuario2.valor)
            console.log('Computador - cartas:', cartaComputador1.texto, cartaComputador2.texto, '-', cartaComputador1.valor + cartaComputador2.valor)
            
            const resultadoUsuario = cartaUsuario1.valor + cartaUsuario2.valor
            const resultadoComputador = cartaComputador1.valor + cartaComputador2.valor
              
            if ( resultadoUsuario > resultadoComputador) {
                  console.log ('O Usuario Ganhou!')
               } else if (resultadoUsuario < resultadoComputador) {
                  console.log ('O Computador Ganhou!')
               } else {
                  console.log ('Empate!')
               }
            }
         darAsCartas()

      } else { 
         console.log ('O jogo acabou!')
      }
      
   }  

inicioJogo()

