'''
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais, segundo a fórmula:

Distancia =

Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, considerando 4 casas decimais.

Exemplo de Entrada	Exemplo de Saída
1.0 7.0
5.0 9.0

4.4721

-2.5 0.4
12.1 7.3

16.1484

2.5 -0.4
-12.2 7.0

16.4575

'''

from math import sqrt

linhaX1eY1 = input()
linhaX2eY2 = input()

planoP1 = linhaX1eY1.split(' ')
planoP2 = linhaX2eY2.split(' ')

x1 = float(planoP1[0])
y1 = float(planoP1[1])
x2 = float(planoP2[0])
y2 = float(planoP2[1])

distancia = sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))

print(f'{distancia:.4f}')
