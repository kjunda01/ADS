'''
 beecrowd | 1142
PUM

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Escreva um programa que leia um valor inteiro N. Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.
Entrada

O arquivo de entrada contém um número inteiro positivo N.
Saída

Imprima a saída conforme o exemplo fornecido.
Exemplo de Entrada 	Exemplo de Saída

7
	

1 2 3 PUM
5 6 7 PUM
9 10 11 PUM
13 14 15 PUM
17 18 19 PUM
21 22 23 PUM
25 26 27 PUM 
'''
linhas = int(input())

contador = 1
for linha in range(linhas):
    elementos = []  # Lista para armazenar os elementos da linha
    for i in range(contador, contador + 4):
        if i % 4 == 0:
            elementos.append("PUM")
        else:
            elementos.append(str(i))  # Converte para string para a junção
    print(" ".join(elementos))  # Imprime a linha sem espaço extra
    contador += 4
