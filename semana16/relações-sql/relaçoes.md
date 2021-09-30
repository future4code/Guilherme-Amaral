Exercício 1:
a)	Uma chave estrangeira serve para referenciar a PRIMARY KEY de uma outra tabela. 

b)	Criado


c)	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`lovelace-2147365-guilherme-amaral`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

d)	Deletada: 
ALTER TABLE Movie 
DROP COLUMN rating;

e)	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`lovelace-2147365-guilherme-amaral`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Esse resultado aparece pois a tabela está usando uma chave estrangeira, dessa forma, impossível apagar, para apagar, primeiro deve-se apagar os dados que estão sendo usados pela chave estrangeira para depois apagar o item e /ou a tabela. 


Exercício 2:
a)	A tabela criada, tem objetivo de fazer a junção dos filmes e dos atores 

b)	Criado


c)	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`lovelace-2147365-guilherme-amaral`.`MoviCast`, CONSTRAINT `MoviCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
Não existe chave estrangeira para o id criado, por isso deu erro. 

d)	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`lovelace-2147365-guilherme-amaral`.`MoviCast`, CONSTRAINT `MoviCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`)).
Impossivel excluir pois o Actor está sendo usado em uma chave estrangeira

Exercício 3: 
a)	A query acima faz a união da tabela de filme, atores e rating .
b)	SELECT m.id as movie_id, r.rate as rating FROM Movie m INNER JOIN Rating r ON m.id = r.movie_id
