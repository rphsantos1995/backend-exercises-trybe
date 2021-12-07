
/* Insert value if row does not exist */
/* https://stackoverflow.com/questions/3164505 */
INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_saleS)
SELECT * FROM (SELECT '8','6.8','450000000','370000000') AS tmp
WHERE NOT EXISTS (
    SELECT movie_id FROM BoxOffice WHERE movie_id = '8'
) LIMIT 1;

update Pixar.Movies 
set director ='memeMovieGenerator'
where title = 'Procurando Nemo'
and id = '9'
