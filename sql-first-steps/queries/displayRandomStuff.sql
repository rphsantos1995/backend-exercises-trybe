SELECT * FROM 
	( SELECT 'This is SQL Exercise, Practice and Solution' AS 'string1',  'sasuahsuh' AS 'string2') AS A  
JOIN   
	(SELECT RAND() as 'randomNum1', raNd() as 'randomNum2', RaND() AS 'randomNum3') AS B  
JOIN  
	(SELECT 4 + 5 AS 'SUM') AS C LIMIT 0, 1000
