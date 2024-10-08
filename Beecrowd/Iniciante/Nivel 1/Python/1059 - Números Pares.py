#  beecrowd | 1059
# Números Pares

# Adaptado por Neilor Tonin, URI Brasil
# Timelimit: 1

# Faça um programa que mostre os números pares entre 1 e 100, inclusive.
# Entrada

# Neste problema extremamente simples de repetição não há entrada.
# Saída

# Imprima todos os números pares entre 1 e 100, inclusive se for o caso, um em cada linha.
# Exemplo de Entrada 	Exemplo de Saída
	

# 2
# 4
# 6
# ...
# 100 

for numero in range(2,101):
    if numero % 2 == 0:
        print(numero)
