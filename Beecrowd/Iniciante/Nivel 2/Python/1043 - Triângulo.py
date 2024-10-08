'''
Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:

Perimetro = XX.X

Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem

Area = XX.X
Entrada
A entrada contém três valores reais.

Saída
O resultado deve ser apresentado com uma casa decimal.

'''

medidas = list(map(float, input().split(' ')))
print(medidas)
if medidas[0] + medidas[1] > medidas[2] or medidas[1] + medidas[2] > medidas[0] or medidas[2] + medidas[0] > 1:
    print()