#  beecrowd | 1064
# Positivos e Média

# Adaptado por Neilor Tonin, URI Brasil
# Timelimit: 1

# Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.
# Entrada

# A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.
# Saída

# O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados.
# Exemplo de Entrada 	Exemplo de Saída

# 7
# -5
# 6
# -3.4
# 4.6
# 12
	

# 4 valores positivos
# 7.4 

valores = []
numerosPositivos = []
while len(valores) <= 5:
    novoValor = float(input())
    valores.append(novoValor)
    valores.sort()
    if novoValor > 0:
        numerosPositivos.append(novoValor)
        numerosPositivos.sort()
        media = sum(numerosPositivos) / len(numerosPositivos)
    
print(f"{len(numerosPositivos)} valores positivos\n{media:.1f}")
