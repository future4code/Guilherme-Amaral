//Exercicio 1

// a) O construtor é um metodo especial utilizado para iniciar ou criar um objeto a partir de uma classe.
// Para chamar o construtor usamos a sintaxe construtor () {}, dentro da classe criada.

//b) A mensagem foi impressa apenas uma vez no terminal e foi criado um novo objeto com os paramentos indicados

//c) Temos acesso a propriedade através da função getters

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    public getCpf = () : string => this.cpf
    public getName = () : string => this.name
    public getAge = () : number => this.age
    public getBalance = () : number => this.balance
    public getTramsactions = () : Transaction[] => this.transactions

    public setTransactions = (newTransaction: Transaction[]) => {this.transactions = newTransaction}

    constructor(
       cpf: string,
       name: string,
       age: number,

    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
       this.transactions = this.transactions
    }
  
}

let dados:UserAccount = new UserAccount ("123.456.789-49", "Guilherme", 30)
console.log (dados.getName())

//--------------------------------------------------------------------------------

//Exercicio 2: 

//a) 

class Transaction {

    private description: string
    private value: number
    private date: string

    public getDescripiton = () => this.description
    public getValue = () => this.value
    public getdate = () => this.date

    constructor (
        description: string,
        value: number,
        date: string

    ) {
        this.description = description,
        this.value = value,
        this.date = date
    }
}

const dados2: Transaction = new Transaction ("Saque", 100, "12/10/2021")
console.log (dados2.getDescripiton())

//------------------------------------------------------------------------

//Exercicio 3 


class Bank {

    private accounts : UserAccount[]

    constructor (account:UserAccount[]) {
        this.accounts = account
    }
}




