Exercício:  1
a)	VARCHAR é uma string com um número máximo de caracteres
Representa uma data no formato ( YYYY – MM – DD) 


b)	Aplicando o comando SHOW DATABASE recebo informações do servidor database
c)	Aplicando o comando SHOW TABLE aparece informações sobre a table criada 
d)	Aplicando o comando DESCRIBE aparece a descrição da table

Exercício:  2
a)	Glória Pires inserida 
b)	O programa não aceitou adicionar outro elemento na tabela utilizando o mesmo id
c)	Criado

Exercício: 3 
a)	SELECT id, name, salary, birth_date from Actor WHERE gender = "female";
b)	SELECT id, name, salary from Actor WHERE name = "Tony Ramos";
c)	SELECT id from Actor WHERE gender = "invalid"; ( Retorna um ID nulo) 
d)	SELECT id, name from Actor WHERE salary < 500000;
e)	Estava escrito nome ao invés de name 

Exercício: 4
a)	A primeira parte busca uma string que contem a inicial “A” ou “J”, a segunda após localizada a string faz a verificação se o salario é maior que 300000
b)	WHERE (name LIKE "A%") AND salary > 35000000
c)	WHERE (name LIKE "%g%" OR name LIKE "%G%")
d)	WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;
Exercício: 5 
a)	A Qwery foi criada para serem armazenadas as informações dos filmes 

Exercício: 6 
a)	SELECT id, title, rating FROM Movie WHERE id = "004"
b)	SELECT * FROM Movie WHERE name = "Deus é Brasileiro";
c)	SELECT id, title, synopsis FROM Movie WHERE rating > 7;

Exercício: 7 
a)	SELECT * FROM Movie
WHERE title LIKE "%vida%";
b)	SELECT * FROM Movie WHERE title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%";
c)	SELECT * FROM MOVIE WHERE release_date < "2020-05-04";
d)	SELECT * FROM MOVIE WHERE release_date < "2020-05-04" AND (title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;




