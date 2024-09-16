'''
Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:

Tabela de aumento

Faça um programa que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use o comando elif.

Entrada

O programa deverá receber o código referente ao tipo de plano do funcionário (A, B ou C) que deverá ser armazenado em uma variável do tipo char (utilizar apenas input sem int ou float). Além disso, o programa também deverá receber o salário atual deste funcionário, que deverá ser armazenado em uma variável float.

Saída

O programa deverá exibir a frase "Novo salário: R$", seguido do valor do novo salário calculado pelo programa (deve-se mostrar o valor com duas casas decimais apenas).

Samples Input	Samples Output
A
1500.75
Novo salário: R$1650.83
C
782.50
Novo salário: R$939.00
'''

codigoDoFuncionario = input()
salarioAtual = float(input())

if codigoDoFuncionario not in "ABC":
    print('Código do funcionário inválido!')
else:
    if codigoDoFuncionario == 'A':
        novoSalario = (0.10 * salarioAtual) + salarioAtual
    elif codigoDoFuncionario == "B":
        novoSalario = (0.15 * salarioAtual) + salarioAtual
    else:
        novoSalario = (0.20 * salarioAtual) + salarioAtual

    print(f'Novo salário: R${novoSalario:.2f}')
