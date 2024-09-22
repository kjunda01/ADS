# beecrowd | 3707
# Verificando Números Primos

# Por João Paulo Fernandes de Cerqueira César,

# Brazil
# Timelimit: 5

# Escreva um programa em Python que receba um número inteiro positivo n como entrada e verifique se ele é um número primo.


# Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Por exemplo, 2, 3, 5 e 7 são números primos, mas 4, 6 e 8 não são.


# Se o número n for primo, seu programa deve imprimir "PRIMO". Caso contrário, deve imprimir "NÃO PRIMO".


# Observações:


# Para determinar se um número é primo, você pode verificar se ele é divisível por qualquer número no intervalo de 2 até a raiz quadrada de n. Se ele for divisível por algum número dentro desse intervalo, não é primo.


# Entrada

# A entrada consiste em um único número inteiro positivo n.


# Saída

# A saída deve conter a palavra "PRIMO" se n for primo, ou "NÃO PRIMO" se n não for primo.
# Samples Input	Samples Output

# 17
	

# PRIMO

# 5
	

# PRIMO

# 10
	

# NÃO PRIMO

numeroInformado = int(input())
primos = []

for numero in range(2, numeroInformado + 1): 
    if numeroInformado % numero == 0:
        primos.append(numero)

if len(primos) == 1:
    print("PRIMO")
else:
    print("NÃO PRIMO")
