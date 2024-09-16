#  beecrowd | 1157
# Divisores I

# Adaptado por Neilor Tonin, URI Brasil
# Timelimit: 1

# Ler um número inteiro N e calcular todos os seus divisores.
# Entrada

# O arquivo de entrada contém um valor inteiro.
# Saída

# Escreva todos os divisores positivos de N, um valor por linha.
# Exemplo de Entrada 	Exemplo de Saída

# 6
	

# 1
# 2
# 3
# 6

# Agradecimentos a Cassio F.

numeroInformado = int(input())
listaDeDivisores = []

for divisor in range(1, numeroInformado + 1):
    if numeroInformado % divisor == 0:
        listaDeDivisores.append(divisor)

for numeros in listaDeDivisores:
    print(numeros)
