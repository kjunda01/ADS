'''
Escrever um programa em Python que leia dois valores inteiros e informe qual é o maior. Caso sejam iguais avise o usuário.



Entrada
O programa deverá receber dois valores inteiros.



Saída
O programa deverá imprimir:



Caso o primeiro número seja maior que o segundo: imprima a frase "O primeiro número é o maior!"
Caso o segundo número seja maior que o primeiro: imprima a frase "O segundo número é o maior!"
Caso os números sejam iguais: imprima a frase "Os números são iguais!"

Samples Input	Samples Output
100
-5

O primeiro número é o maior!
5
10

O segundo número é o maior!
5
5

Os números são iguais!
'''
valor1 = int(input())
valor2 = int(input())

if valor1 > valor2:
    print('O primeiro número é o maior!')
elif valor2 > valor1:
    print('O segundo número é o maior!')
else:
    print('Os números são iguais!')
