# beecrowd | 3706
# Soma de Números Pares

# Por João Paulo Fernandes de Cerqueira César,

# Afghanistan
# Timelimit: 5

# Você deve escrever um programa em Python que calcule a soma de todos os números pares em um intervalo dado.


# Dado um número inteiro positivo n, seu programa deve calcular a soma de todos os números pares de 1 até n, incluindo n.


# Entrada

# A entrada contém um único número inteiro positivo n


# Saída

# A saída deve conter um único número inteiro representando a soma dos números pares de 1 até n, incluindo n.
# Samples Input	Samples Output

# 5
	

# 6

# 10
	

# 30

# 7
	

# 12 


numeroInformado = int(input())
numerosPares = []
numerosImpares = []

for numero in range(0, numeroInformado + 1):
    
    if numero % 2 == 0:
       numerosPares.append(numero)
       
    else:
       numerosImpares.append(numero)
       
print(sum(numerosPares))
