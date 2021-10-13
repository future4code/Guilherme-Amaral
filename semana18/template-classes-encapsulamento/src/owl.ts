export type owl = {
   name: string
   weight: number
   chirp(): void
   eat(quantity: number): void
   fly(time:number):void
}

//-----------------------------------------------------

export class Owl {
   private name: string
   private weight: number 

   getName = () :string => this.name
   getWeight = () :number => this.weight

   setName = (newName: string) => {
      this.name = newName
   }

   chirp (): void {
      console.log ('Hu Hu')
   }

   eat (quantity: number) : void {
      this.weight += quantity
   }

   fly (time: number) : void {
      console.log (`${this.name} levantou voo`)
      setTimeout (() => {
         this.weight -= time
         console.log (`${this.name} pousou e agora pesa ${this.weight}`)
      }, time * 1000)
   }

   constructor (
      instanceName: string,
      instaceWeight: number

   ) {
      this.name = instanceName,
      this.weight = instaceWeight
   }
}

export const coruja: Owl = new Owl ('Edvirges', 10)

