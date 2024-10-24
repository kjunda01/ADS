'''
beecrowd | 3895
Operações com conjuntos

Por João Paulo Fernandes de Cerqueira César,

Brazil
Timelimit: 5

Você receberá três conjuntos A, B e C, cada um contendo números inteiros. Sua tarefa é realizar as seguintes operações e imprimir os resultados:


    A união de A e B.
    A interseção de B e C.
    A diferença simétrica de C e A.
    A diferença de A e B.


Você deve imprimir cada resultado em uma linha, sem repetições de elementos.


Entrada

A entrada consiste em três linhas. Cada linha contém um conjunto de números inteiros separados por espaços. 


Saída

A saída deve conter quatro linhas, cada uma com os elementos do resultado de uma operação e separados por espaços.
Samples Input	Samples Output

5 10 15 20 25
30 35 40 45 50
20 25 30 35 40
	

35 5 40 10 45 15 50 20 25 30
40 35 30
35 5 40 10 30 15
5 10 15 20 25

1 2 3 4 5
3 4 5 6 7
5 6 7 8 9
	

1 2 3 4 5 6 7
5 6 7
1 2 3 4 6 7 8 9
1 2

10 20 30 40 50
30 40 50 60 70
50 60 70 80 90
	

70 40 10 50 20 60 30
50 60 70
70 10 80 20 90 30 40 60
10 20
'''

'''
5 10 15 20 25
30 35 40 45 50
20 25 30 35 40
'''
def criaConjunto():
    conjunto = set(list(map(int, input().split(" "))))
    return conjunto

matriz = []
def criaMatriz(conjunto):
    elemento = set(list(map(int, conjunto)))
    matriz.append(elemento)
    return matriz

def mostraNaTela(elementos):
    temp = []
    for i in elementos:
        temp.append(str(i))
    print(" ".join(temp))


def uniaoAeB(A, B):
    elementos = A.union(B)
    mostraNaTela(elementos)


def intersecaoBeC(B, C):
    inter = B.intersection(C)
    mostraNaTela(inter)


def diferencaSimetrica(C, A):
    dif = C.symmetric_difference(A)
    mostraNaTela(dif)


def diferenca(A, B):
    dif = A.difference(B)
    mostraNaTela(dif)


# pede os 3 valores
for i in range(3):
    # usa uma fumção para criar uma matriz de conjuntos
    criaMatriz(criaConjunto())


# determina quais conjuntos são os A, B, e  C
[A, B, C] = matriz


# saída com as respostas    
uniaoAeB(A, B)
intersecaoBeC(B, C)
diferencaSimetrica(C,A)
diferenca(A, B)
