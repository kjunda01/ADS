'''
Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.
Entrada

Leia três valores de ponto flutuante (double) A, B e C.
Saída

Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.
'''

from math import sqrt


valoresInformados = '2 -6 0'

listaDosValores = valoresInformados.split(' ')

a = float(listaDosValores[0])
b = float(listaDosValores[1])
c = float(listaDosValores[2])

delta = (b ** 2) - (4 * a * (c))
print(delta)

# r1 = 
# r2 = 

print(f'R1 = {r1:.5f}\nR2 = {r2:.5f}')
