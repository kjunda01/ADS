'''
beecrowd | 3840
Maior e Menor Valor (Versão Sem max e min) com Acompanhamento

Por João Paulo Fernandes de Cerqueira César,

Brazil
Timelimit: 2

Dada uma lista de números inteiros, crie um programa em Python que determine o maior e o menor valor presente na lista sem usar as funções max e min. Durante o processo, você deve imprimir o número que está sendo considerado o maior naquela rodada.


Entrada


    A primeira linha contém um número inteiro N, que representa o número de elementos na lista.
    A segunda linha contém N números inteiros separados por espaços. Você pode usar a função split para dividir esta linha em números individuais.


Saída


Duas linhas:

    A primeira linha deve conter o maior valor encontrado na lista.
    A segunda linha deve conter o menor valor encontrado na lista.


Além disso, o programa deve imprimir o número que está sendo considerado o maior naquele momento durante o processo de determinação do maior valor.
Samples Input	Samples Output

7
45 12 68 33 97 5 21
	

Número considerado maior: 45
Número considerado maior: 68
Número considerado maior: 97
Maior valor: 97
Menor valor: 5

4
25 10 5 30
	

Número considerado maior: 25
Número considerado maior: 30
Maior valor: 30
Menor valor: 5

8
88 45 12 65 90 33 70 18
	

Número considerado maior: 88
Número considerado maior: 90
Maior valor: 90
Menor valor: 12
'''

primeiraLinha = int(input())
segundaLinha = (input()).split(" ")
listaNumeros = []
numeroConsideradoMaior = -99999

for i in segundaLinha:
    listaNumeros.append(int(i))

for numero in range(len(listaNumeros)):
    numeroAtual = listaNumeros[numero]
    if numeroAtual > numeroConsideradoMaior:
        numeroConsideradoMaior = numeroAtual
        print(f"Número considerado maior: {numeroConsideradoMaior}")
    
listaNumeros.sort()

print(f"Maior valor: {listaNumeros[-1]}")
print(f"Menor valor: {listaNumeros[0]}")
