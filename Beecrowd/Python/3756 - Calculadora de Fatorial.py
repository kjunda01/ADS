'''
beecrowd | 3756
Calculadora de Fatorial

Por João Paulo Fernandes de Cerqueira César,

Brazil
Timelimit: 5

Crie um programa Python que calcula o fatorial de um número. Você deve criar uma função chamada calcular_fatorial que aceita
um número inteiro como argumento e retorna o fatorial desse número.

O programa deve pedir ao usuário para inserir um número inteiro não negativo e, em seguida,
calcular e exibir o fatorial desse número.

Entrada
Um número inteiro não negativo N, representando o número para o qual deseja calcular o fatorial.

Saída
Um único número inteiro, que é o fatorial do número fornecido como entrada.
Samples Input	Samples Output

5 -> 120

7 -> 5040

0 -> 1
'''

def calcular_fatorial(num):
    # passa por todos os numeros baseados no que recebeu
    for i in range(1, num):
        num * (i - 1)
        num += num * (i - 1)
        #cada vez que ele passa aqui ele faz a conta acumulada * um proximo num
        # Ex: ele pega 1x5 = 5, depois pega 5x2 = 10, depois pega 10x3...
    if num == 0:
        num = 1
    return num

numero = int(input())
print(calcular_fatorial(numero))
