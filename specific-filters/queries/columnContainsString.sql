SELECT * FROM PecasFornecedores.Fornecedores AS Fo, PecasFornecedores.Fornecimentos AS Fe,
PecasFornecedores.Pecas AS P, PecasFornecedores.Vendas AS V
WHERE Fe.Fornecedor = Fo.code and Fo.code LIKE '%N%';