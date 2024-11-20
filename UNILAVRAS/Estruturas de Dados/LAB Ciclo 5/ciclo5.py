import pandas as pd

# 1. Leitura dos dados
# Carrega os dados do arquivo Excel para um DataFrame
planilhaVendas = "PlanilhaVendas.xlsx"
tabelaVendas = pd.read_excel(planilhaVendas)

# 2. Análise exploratória
# 2.1 Calcula a receita total de cada venda
tabelaVendas['Receita Total'] = tabelaVendas['Quantidade'] * tabelaVendas['Preço unitário']

# 2.2 Determina o produto mais vendido em termos de quantidade
quantidadeVendidaPorProduto = tabelaVendas.groupby('ID do produto')['Quantidade'].sum()
produtoMaisVendido = quantidadeVendidaPorProduto.idxmax()
quantidadeMaisVendida = quantidadeVendidaPorProduto.max()

# 2.3 Calcula a receita total por região
receitaPorRegiao = tabelaVendas.groupby('Região')['Receita Total'].sum()

# 2.4 Identifica o dia com o maior número de vendas
vendasPorDia = tabelaVendas.groupby('Data da venda')['Quantidade'].sum()
diaMaisVendas = vendasPorDia.idxmax()
quantidadeVendasNoDia = vendasPorDia.max()

# 3. Geração de relatório
# 3.1 Cria um novo DataFrame consolidado para o relatório
relatorioTabela = tabelaVendas.groupby('ID do produto').agg({
    'Quantidade': 'sum',
    'Receita Total': 'sum'
}).reset_index()

# Renomeia as colunas para o relatório
relatorioTabela.rename(columns={
    'Quantidade': 'Quantidade Total Vendida',
    'Receita Total': 'Receita Total'
}, inplace=True)

# 3.2 Ordena o DataFrame pela receita total em ordem decrescente
relatorioTabela = relatorioTabela.sort_values(by='Receita Total', ascending=False)

# 3.3 Salva o DataFrame em um novo arquivo
arquivoSaida = "relatorioVendas.xlsx"
relatorioTabela.to_excel(arquivoSaida, index=False)

# Mostra na tela os resultados
print("Produto mais vendido:")
print(f"ID do produto: {produtoMaisVendido}, Quantidade total: {quantidadeMaisVendida}")

print("\nReceita total por região:")
print(receitaPorRegiao)

print("\nDia com maior número de vendas:")
print(f"Data: {diaMaisVendas}, Quantidade total vendida: {quantidadeVendasNoDia}")

print(f"\nRelatório salvo em '{arquivoSaida}'.")
