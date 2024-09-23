'''
beecrowd | 3758
MMC

Por João Paulo Fernandes de Cerqueira César,

Brazil
Timelimit: 5

Escreva um programa em Python para calcular o Mínimo Múltiplo Comum (MMC) de dois números inteiros positivos, A e B. O MMC de dois números é o menor número inteiro positivo que é divisível por ambos os números sem deixar resto. Sua tarefa é implementar o programa que recebe dois números inteiros A e B como entrada e retorna o MMC de A e B.


DICA PARA RESOLUÇÃO


O Mínimo Múltiplo Comum (MMC) é um conceito matemático fundamental relacionado a números inteiros. O MMC de dois ou mais números inteiros é o menor múltiplo comum a todos esses números. Em outras palavras, é o menor número inteiro positivo que é divisível por cada um dos números dados.


Para calcular o MMC de dois números inteiros, você pode seguir um método que envolve o cálculo do Máximo Divisor Comum (MDC) e a utilização da seguinte fórmula:


MMC(A, B) = (A * B) / MDC(A, B)


Aqui está uma breve explicação do processo:


Calcule o MDC (Máximo Divisor Comum): O MDC de dois números inteiros, A e B, é o maior número que pode dividir ambos sem deixar resto. Você pode calcular o MDC usando algoritmos como o algoritmo de Euclides.


Use a fórmula para o MMC: Após calcular o MDC, você pode usar a fórmula acima para encontrar o MMC de A e B. Simplesmente multiplique os dois números e divida pelo MDC.


Aqui está um exemplo de cálculo do MMC para os números 12 e 18:


Calcule o MDC:

    MDC(12, 18) = 6


Use a fórmula para o MMC:

    MMC(12, 18) = (12 * 18) / 6
    MMC(12, 18) = 216 / 6
    MMC(12, 18) = 36


Entrada
A entrada consiste de duas linhas, cada uma com um número inteiro A e B.


Saída
A saída deve ser um único número inteiro - o MMC de A e B.
Samples Input	Samples Output

7
11


77

20
25


100

15
45


45
'''
# menor número inteiro positivo que é divisível por cada um dos números dados.

numeros = []
def numerosMDC():
    while len(numeros) != 2:
        numeros.append(int(input()))

def calcularMDC(x,y):
    listaX = []
    listaY = []

    for i in range(1, x+1):
        if x % i == 0:
            listaX.append(i)

    for j in range(1, y+1):
        if y % j == 0:
            listaY.append(j)

    mdc = max(set(listaX) & set(listaY))
    return mdc

def mmc(x, y):
    mmc = (numeros[0] * numeros[1]) / calcularMDC(numeros[0], numeros[1])
    return mmc

numerosMDC()
print(f'{mmc(numeros[0], numeros[1]):.0f}')
