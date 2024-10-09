'''
 beecrowd | 1099
Soma de Ímpares Consecutivos II

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste de dois inteiros X e Y. Você deve apresentar a soma de todos os ímpares existentes entre X e Y.
Entrada

A primeira linha de entrada é um inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste em uma linha contendo dois inteiros X e Y.
Saída

Imprima a soma de todos valores ímpares entre X e Y.
Exemplo de Entrada 	Exemplo de Saída

7

4 5

13 10

6 4

3 3

3 5

3 4

3 8
	

0

11

5

0

0

0

12
'''
casosTeste = int(input())

listaNumero = []
for linhas in range(casosTeste):
    caso = list(map(int, input().split(" ")))
    listaNumero.append(caso)

    # coloca em ordem crescente para fazer o range
    caso.sort()



for i in range(len(listaNumero)):  
    # define o valor inicial para o impar
    impar = 0

    # listaNumero[i] = [4, 5]

    #define qual o range vai ser iterado
    numMenor = listaNumero[i][0]
    numMaior = listaNumero[i][1]

    #itera dentro do range de cada par de numeros
    for j in range(numMenor+1, numMaior):
        if j % 2 != 0:
            impar += j
    
    # por fim, imprime a soma dos impares do intervalo
    print(impar)
