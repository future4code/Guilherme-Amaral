type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}


const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//a) Para gerar um arquivo javasript apartir do arquivo type script é necessário usar o comando 
// tsc no terminal, que faz a transpilação de um arquivo typescrit para javascript

//b) O meu arquivo encontra-se dentro da pasta src

//c) Sim, existe, basta digitar o comando tsc combinado com o caminho seguido do nome dos arquivos seperados com um espaço

//d) Não foi possivel criar o arquivo, pois o mesmo foi criado no inicio do exercicio, segue msg de erro:
//$ tsc --init
//error TS5054: A 'tsconfig.json' file is already defined at: 'C:/Users/gui_l/Desktop/Guilherme-Amaral/semana15/aula-typescript/frist-script/tsconfig.json'.
// Em relação as diferenças, notei que o arquivo criado atraves do comando tsc --init precisa de configurações especificas para rodar conforme nosso projeto, para fazer isso bata descomentar
// as configurações desejadas.