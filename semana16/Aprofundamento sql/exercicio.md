Exercício:  1
a) O comando deleta a tabela salário. 
b) Altera a coluna gender sex, permitindo apenas 6 caracteres.	
c) Altera a coluna gender para que receba ate 255 caracteres.
d) ALTER TABLE Actor CHANGE gender gender VARCHAR (100);

Exercício:  2
a) UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";	
b) UPDATE Actor
SET 
	name = "JULIANA PAES"
WHERE id = "005";

UPDATE Actor
SET 
	name = "Juliana Paes"
WHERE id = "005";	
c) UPDATE Actor
SET 
name = "Moacyr Franco",
    birth_date = "2020-02-10",
    salary = 600000,
    gender = "male"
WHERE id = "005";

Exercício: 3 
a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";
b) DELETE FROM Actor
WHERE 
gender = "male" AND
salary > 1000000;

Exercício: 4
a) SELECT MAX(salary) FROM Actor
b) SELECT MIN(Salary) FROM Actor WHERE gender = "female";	
c) SELECT COUNT(*) FROM Actor WHERE gender = 'female';
d) SELECT SUM(salary) FROM Actor;

Exercício: 5 
a)Retorna a quantidade de atrizes e atores da tabela com relação ao seu genero	 
b) SELECT * FROM  Actor
ORDER BY name DESC;
c) SELECT * FROM  Actor
ORDER BY salary
d) select * from Actor 
order by salary desc
limit 3;
e) select avg(salary), gender from Actor
group by gender

Exercício: 6 
a) ALTER TABLE Movie ADD playing_limit_date DATE;
b) alter table Movie change rating rating float;
c) alterado
d) não consegui fazer a query para guardar o id e por consequência não consegui atualizar a sinopse 

Exercício: 7 
a) 1 filmes
b) 8	
c) 1	
d) 1
e) 10
f)7	
