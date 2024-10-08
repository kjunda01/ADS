'''
beecrowd | 3841
Combinação de Números

Por João Paulo Fernandes de Cerqueira César,

Brazil
Timelimit: 2

Dada uma lista de números inteiros e um número alvo, crie um programa em Python que encontre todas as combinações únicas de dois números na lista que somam ao valor alvo. O programa deve armazenar essas combinações em uma lista de tuplas e imprimi-las.


Entrada


    A primeira linha contém um número inteiro N, que representa o número de elementos na lista.
    A segunda linha contém N números inteiros separados por espaços, que compõem a lista.
    A terceira linha contém um número inteiro alvo T, o valor alvo a ser alcançado com as combinações.


Saída


Para cada combinação única de dois números na lista que soma ao valor alvo, imprima uma linha contendo a tupla com os dois números, em ordem lexicográfica. A forma lexicográfica implica que os elementos da tupla devem ser impressos em ordem crescente.


A forma lexicográfica, neste contexto, significa que as combinações devem ser impressas em ordem crescente com relação aos elementos das tuplas. Por exemplo, a combinação (2, 8) seria impressa antes da combinação (8, 2). Isso garante uma saída consistente e fácil de verificar.
Samples Input	Samples Output

4
10 20 30 40
50
	

(10, 40)
(20, 30)

8
3 2 4 1 7 6 9 8
10
	

(1, 9)
(2, 8)
(3, 7)
(4, 6)

6
3 6 2 8 7 4
10
	

(2, 8)
(3, 7)
(4, 6)
'''

primeiraLinha = int(input())
#primeiraLinha = 4
segundaLinha = input().split(" ")
#segundaLinha = "10 20 30 40".split(" ")
numeroAlvo = int(input())
#numeroAlvo = 50
listaNumeros = []
listaDeTuplas = []

# Adiciona todos os elementos da segunda linha já como número
for i in segundaLinha:
    listaNumeros.append(int(i))


# Esse 1 for itera a quantidade de elementos da segunda linha
for numero in range(len(listaNumeros)):
    numeroAnalisado = listaNumeros[numero]

# Esse for passa por cada item e verifica se a soma deles dá o numero procurado
    for i in range(len(listaNumeros)):
        numeroAtual = listaNumeros[i]

        # se for igual o numero procurado ele cria uma lista de tuplas
        if numeroAnalisado + numeroAtual == numeroAlvo:

            # ordena as duplas de tuplas em ordem numerica
            if numeroAtual > numeroAnalisado:
                tupla = (numeroAnalisado, numeroAtual)
                
                #cria a lista de tuplas
                listaDeTuplas.append(tupla)
        
# Organiza em ordem numérica a lista final para imprimir
listaDeTuplas.sort()
for tuplas in listaDeTuplas:
    print(tuplas)
