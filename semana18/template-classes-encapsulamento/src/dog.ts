export type dog = {
   name: string
   weight: number
   bark(): void
   eat(quantity: number): void
}

//-----------------------------------------------------

export class Dog {

   private name: string 
   private weight: number 

   public getName = () : string => this.name
   public getWeight = () : number => this.weight
   
   public setName = (newName: string) => { this.name = newName}

   bark () : void {
      console.log(" Au Au ")
   }

   eat (quantity: number) {
      this.weight += quantity
   }

   run (distance: number) {
      this.weight -= distance / 1000
   }

   constructor (
      instaceName: string,
      instaceWeight: number

   ) {
      this.name = instaceName,
      this.weight = instaceWeight
      console.log ("Construindo um cão")
   }
}

export const pluto: Dog = new Dog("Pluto", 10)
pluto.eat(2)