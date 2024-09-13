# beecrowd | 1760
# Pesquisa - Idade e Peso - Python

# Por João Paulo Fernandes de Cerqueira César,

# Brazil
# Timelimit: 1
# Utilizando estrutura de repetição , faça um programa em Python que receba a idade e o peso de quatro pessoas. Calcule e mostre:

#     a quantidade de pessoas com mais de 90 quilos;

#     a média das idade das quatro pessoas.

# Dica 01: repita o processo enquanto a quantidade de pessoas cadastradas seja menor que 4;
# Dica 02: as variáveis presentes no cálculo da média devem ser float, para que o resultado seja mostrado com casas decimais.
# Entrada
# O programa deverá receber, para cada pessoa entrevistada, dois valores: o primeiro, um valor inteiro que representa a idade da pessoa; o segundo um valor float, que representar o peso da pessoa em Kg.
# Atenção: no exemplo disponível perceba que temos 8 valores de entradas sendo exibidos, isto ocorre pois estamos solicitando, para cada uma das quatro pessoas, sua idade e seu peso (nesta ordem).
# Saída
# O programa deverá imprimir duas frases ao final de sua execução:

#     "Qtd pessoas > 90Kg: " seguida da quantidade de pessoas calculadas que atendam este critério (mostrar uma variável inteira, ou seja, %i).
#     "Idade média: " seguida do valor calculado para a idade média das pessoas analisadas (mostrar uma variável float com duas casas decimais, ou seja, %.2f). 

# Samples Input	Samples Output

# 30
# 95.7
# 15
# 75
# 82
# 69.5
# 52
# 62
	

# Qtd pessoas > 90 Kg: 1
# Idade média: 44.75

lisdaDeIdades = []
listaDePesos = []
lista90Kg = []

while len(lisdaDeIdades) != 4 and len(listaDePesos) != 4:
    idades = float(input())
    pesos = float(input())
    lisdaDeIdades.append(idades)
    listaDePesos.append(pesos)

for pessoasCom90Kg in listaDePesos:
    if pessoasCom90Kg > 90:
        lista90Kg.append(pessoasCom90Kg)
        
maioresQue90Kg = len(lista90Kg)
mediaDasIdades = sum(lisdaDeIdades) / len(lisdaDeIdades)

print(f"Qtd pessoas > 90 Kg: {maioresQue90Kg}\nIdade média: {mediaDasIdades:.2f}")
