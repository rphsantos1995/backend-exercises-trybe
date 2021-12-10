/* ------ Exercícios 21.2 - Descomplicated Joins ------ */

/* 1- Monte uma query que exiba o id do ator , nome do ator 
e id do filme em que ele já atuou usando as tabelas actor e film_actor .    
  */
  
/***** 
USE sakila;
SELECT A.first_name, A.actor_id, F.actor_id
FROM sakila.actor AS A
INNER JOIN film_actor AS F
ON A.actor_id = F.actor_id;
 *****/

/*  2 - Use o JOIN para exibir o nome , sobrenome e endereço de 
cada um dos funcionários do banco. Use as tabelas staff e address .  
  */
  
/***** 
USE sakila;
select  AD.address, STA.first_name, 
STA.last_name, STA.address_id, AD.address_id
FROM sakila.staff AS STA
INNER JOIN sakila.address AS AD
ON AD.address_id = STA.address_id; 
*****/
  
/* 3 - Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo 
nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o 
cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .   
  */
  
/***** 
USE sakila;
select  AD.address, C.first_name, 
C.email, C.address_id, AD.address_id
FROM sakila.customer AS C
INNER JOIN sakila.address AS AD
ON AD.address_id = C.address_id
ORDER BY first_name DESC
limit 100;
***** /

/*  6 - Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) 
paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados 
devem estar agrupados pelo nome e sobrenome do funcionário.  */

/*****
USE sakila;
SELECT pay.staff_id, AVG(pay.amount), sta.first_name, sta.last_name
FROM sakila.staff as sta
inner join sakila.payment as pay
on sta.staff_id = pay.staff_id  and YEAR(pay.payment_date) = 2006
GROUP BY pay.staff_id;
***** /

/*  7 - Monte uma query que exiba o id do ator , nome , id do filme e 
título do filme , usando as tabelas actor , film_actor e film .    */

/***** 
select Act.actor_id, Act.first_name, Mo.film_id, Mo.title
from sakila.film as Mo
INNER JOIN sakila.actor as Act
INNER JOIN sakila.film_actor as Fa
on Fa.actor_id = Act.actor_id and Fa.film_id = Mo.film_id;
***** /
