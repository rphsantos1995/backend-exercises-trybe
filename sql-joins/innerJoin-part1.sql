/* ------ Exercícios 21.2 - Descomplicated Joins ------ */

/* 1- Monte uma query que exiba o id do ator , nome do ator 
e id do filme em que ele já atuou usando as tabelas actor e film_actor .    
  */
/* USE sakila;
SELECT A.first_name, A.actor_id, F.actor_id
FROM sakila.actor AS A
INNER JOIN film_actor AS F
ON A.actor_id = F.actor_id;
 */

/*  2 - Use o JOIN para exibir o nome , sobrenome e endereço de 
cada um dos funcionários do banco. Use as tabelas staff e address .  
  */
/* USE sakila;
select  AD.address, STA.first_name, 
STA.last_name, STA.address_id, AD.address_id
FROM sakila.staff AS STA
INNER JOIN sakila.address AS AD
ON AD.address_id = STA.address_id; */
  
/* Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo 
nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o 
cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .   
  */
  
  
  
/*      */
/*      */

