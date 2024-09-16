#  beecrowd | 1067
# Números Ímpares

# Adaptado por Neilor Tonin, URI Brasil
# Timelimit: 1

# Leia um valor inteiro X (1 <= X <= 1000). Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso.
# Entrada

# O arquivo de entrada contém 1 valor inteiro qualquer.
# Saída

# Imprima todos os valores ímpares de 1 até X, inclusive X, se for o caso.
# Exemplo de Entrada 	Exemplo de Saída

# 8
	

# 1
# 3
# 5
# 7 

entrada = int(input())

for numero in range(1,(entrada + 1)):
    if numero % 2 != 0:
        print(numero)
        