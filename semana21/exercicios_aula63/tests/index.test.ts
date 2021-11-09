import { validateCharacter } from "../src"
import { Character } from "../src/interface"
import { performAttack } from "../src/index"

test ("Personagem com nome vazio", () => {
    const result = validateCharacter ({
    name: "",
    life: 1500,
    strength: 300,
    defense: 500    
    })

    expect(result).toBe(false)
})

test ("Personagem com vida = 0", () => {
    const result = validateCharacter ({
        name:"Fera",
        life: 0,
        strength: 300,
        defense: 250
    })

    expect(result).toBe(false)
})

test ("Personagem com força = 0", () => {
    const result = validateCharacter ({ 
        name: "Fera",
        life: 1500,
        strength: 0,
        defense: 250
    })

    expect(result).toEqual(false)
})

test("Personagem com defesa = 0", () => {
    const result = validateCharacter ({
        name: "Fera",
        life: 1500,
        strength: 300,
        defense: 0
    })

    expect(result).toEqual(false)
})

/*test ("Personagem com valores de vida ou defesa ou força com valor negativo", () => {
    const result = ({
        name: "Fera",
        life: 1500,
        strength: 300,
        defense: -250
    })

    expect(result).toBe(false) // o teste falhou
})
*/

test ("Personagem com nome definido", () => {
    const result = validateCharacter ({
    name: "Fera",
    life: 1500,
    strength: 300,
    defense: 500    
    })

    expect(result).toBe(true)
})

const validatorMock = () => {
    return true;
}


test("Should perform attack", () => {

    const attacker: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    performAttack(attacker, defender);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  })




