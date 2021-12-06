SELECT * FROM PecasFornecedores.Fornecedores AS Fo, PecasFornecedores.Fornecimentos AS Fe,
PecasFornecedores.Pecas AS P, PecasFornecedores.Vendas AS V
WHERE  Fe.Fornecedor = Fo.code AND Fe.Preco BETWEEN '15' AND '40'
ORDER BY Fe.Preco DESC;