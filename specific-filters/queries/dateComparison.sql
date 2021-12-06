SELECT * FROM PecasFornecedores.Fornecedores AS Fo, PecasFornecedores.Fornecimentos AS Fe,
PecasFornecedores.Pecas AS P, PecasFornecedores.Vendas AS V
WHERE Fe.Fornecedor = Fo.code AND 
V.order_date BETWEEN '2018/04/15' AND '2019/07/30'
ORDER BY V.order_date DESC;