'''
beecrowd | 3876
Encontre o Elemento

Por João Paulo Fernandes de Cerqueira César,

Brazil
Timelimit: 1

Seu objetivo é criar um programa em Python que encontre a posição de um elemento específico em uma matriz. Você receberá uma matriz de tamanho N x M e um valor que precisa ser encontrado na matriz. Escreva uma função chamada encontre_elemento que recebe a matriz e o valor a ser encontrado como entrada e retorna as linhas e colunas em que o elemento é encontrado. Se o elemento não estiver na matriz, retorne "-1 -1" para indicar que o elemento não foi encontrado.


Entrada

A entrada contém os seguintes valores:


    A primeira linha contém dois inteiros separados por espaço, N e M, representando o número de linhas e colunas da matriz.
    As próximas N linhas contêm os elementos da matriz, onde cada linha contém M inteiros separados por espaço.
    A última linha contém o valor que você deseja encontrar na matriz.


Saída

A saída deve conter as linhas e colunas em que o elemento é encontrado na matriz, ou "-1 -1" se o elemento não estiver na matriz. Se houver várias ocorrências do elemento na matriz, todas as linhas e colunas correspondentes devem ser listadas. Observação, a linha e coluna a ser mostrada deve começar em 1, ou seja, some 1 ao índice encontrado.


Dica


    Leia as Dimensões da Matriz: Comece lendo a primeira linha da entrada para obter as dimensões da matriz, ou seja, o número de linhas e colunas. Você pode usar a função input().split() para dividir os valores e atribuí-los a variáveis separadas.


    Leia os Elementos da Matriz: Após obter as dimensões da matriz, leia as linhas subsequentes da entrada, que contêm os elementos da matriz. Use um loop para ler cada linha, dividi-la em elementos separados por espaço e converter esses elementos em inteiros. Armazene cada linha como uma lista.


    Construa a Matriz: À medida que lê cada linha da entrada, adicione-a à matriz que você está construindo. Crie uma lista vazia para representar a matriz e, a cada leitura de uma linha, adicione essa lista à matriz.


    Use List Comprehensions (se quiser simplificar): Você pode usar list comprehensions para simplificar o processo de leitura e conversão dos elementos da matriz. Por exemplo, para ler e converter uma linha em uma lista de inteiros, você pode usar algo como linha = [int(x) for x in input().split()].

Samples Input	Samples Output

3 3
1 2 3
4 5 6
7 8 9
5
	

2 2

2 4
1 2 3 4
2 1 2 3
2
	

1 2
2 1
2 3

4 4
10 20 30 40
50 60 70 80
90 100 110 120
130 140 150 160
75
	

-1 -1
'''
'''Leia as Dimensões da Matriz:
Comece lendo a primeira linha da entrada para obter as dimensões da matriz, ou seja,
o número de linhas e colunas. Você pode usar a função input().split() para dividir os
valores e atribuí-los a variáveis separadas.'''


'''
A primeira linha contém dois inteiros separados por espaço, N e M, representando o número de linhas e colunas da matriz.
As próximas N linhas contêm os elementos da matriz, onde cada linha contém M inteiros separados por espaço.
A última linha contém o valor que você deseja encontrar na matriz.
'''

# função para criar a lista menor
def criaMatriz(numLinhas):
    listaTemp = []
    for i in range(numLinhas):
        linha = list(map(int, input().split()))
        listaTemp.append(linha)
    return listaTemp

# cria as listas vazias para adicionar os numero encontrados
A = []
B = []

# função para iterar nas duas listas e criar a lista A e B
def encontre_elemento(matriz, numParaEncontrar):
    for i in range(numLinhas):
        for j in range(numColunas):
            # aqui cria a matriz com as posições encontradas
            if matriz[i][j] == numParaEncontrar:
                A.append(i+1)
                B.append(j+1)

# Aqui começa a pedir os numeros da primeira linha
numLinhas, numColunas = list(map(int, input().split()))

# aqui entra na função que separa os itens encontrados em outra matriz
encontre_elemento(criaMatriz(numLinhas), int(input()))

# se nao encontrar, mostra -1 -1
if len(A) == 0:
    print('-1 -1')
# aqui mostra na tela a junção da matrix
else:
    # itera quantas vezes for preciso pra poder mostrar todas as coordenadas
    for i in range(len(A)):
        print(f'{A[i]} {B[i]}')
