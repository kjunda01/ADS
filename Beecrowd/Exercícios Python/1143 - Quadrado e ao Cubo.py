#  beecrowd | 1143
# Quadrado e ao Cubo

# Adaptado por Neilor Tonin, URI Brasil
# Timelimit: 1

# Escreva um programa que leia um valor inteiro N (1 < N < 1000). Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.
# Entrada

# O arquivo de entrada contém um número inteiro positivo N.
# Saída

# Imprima a saída conforme o exemplo fornecido.
# Exemplo de Entrada 	Exemplo de Saída

# 5
	

# 1 1 1
# 2 4 8
# 3 9 27
# 4 16 64
# 5 25 125

# Agradecimentos a Cássio F.

numeroInformado = int(input())

for linha in range(1, (numeroInformado + 1)):
    print(linha, (linha ** 2), (linha ** 3))
