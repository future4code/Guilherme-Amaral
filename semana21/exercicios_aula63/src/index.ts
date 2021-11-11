import { Character } from "./interface";

export const validateCharacter = (input: Character): boolean => {

    if( 
        !input.name || 
        input.life === undefined || 
        input.strength === undefined || 
        input.defense === undefined ) {
            
        return false
        }
    
    if (input.life <=0 || input.strength <=0 || input.defense <=0) {

        return false
    }

    return true
}

export const performAttack = (attacker: Character, defender: Character) => {

    if(!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error ("Personagem Inválido")
    }

    if(attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense
    }
}

//Não entendi a questão da inversão de dependencias 

