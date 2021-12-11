/* Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais 
( domestic_sales ) e internacionais ( international_sales ) de cada filme.*/

SELECT M.title , B.domestic_sales, B.international_sales from Pixar.BoxOffice as B 
INNER JOIN Pixar.Movies as M
on M.id = B.movie_id;


 /* Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de 
 vendas para cada filme que possui um número maior de vendas internacionais 
 ( international_sales ) do que vendas nacionais ( domestic_sales )./
 
 /* Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes 
 e sua avaliação ( rating ) em ordem decrescente. /
 
 /* Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, 
 mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes 
 que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética./