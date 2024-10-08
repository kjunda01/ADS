"""
beecrowd | 3760
Investimento
Por João Paulo Fernandes de Cerqueira César,  Brazil

Timelimit: 5
Crie um programa em Python que calcule o valor final de um investimento após um período de tempo. O programa deve solicitar ao usuário o valor do investimento inicial (em reais), a taxa de juros anual (em porcentagem) e o número de anos que o investimento será mantido. Em seguida, o programa deve calcular e exibir o valor final do investimento após o período especificado. Utilize a fórmula do juro composto:



Valor Final = Investimento Inicial * (1 + Taxa de Juros/100)^Número de Anos



Entrada


O programa deve ler três números em linhas separadas:



O valor do investimento inicial (um número decimal com até duas casas decimais).
A taxa de juros anual (um número decimal com até duas casas decimais).
O número de anos que o investimento será mantido (um número inteiro positivo).


Saída
O programa deve exibir o valor final do investimento após o período especificado, com duas casas decimais.

Samples Input	Samples Output
2000.00
4.5
5
2492.36
1500.50
7.2
2
1724.35
1000.00
5.25
3
1165.91
"""

investimentoInicial = float(input())
juros = float(input())
anos = int(input())

def calcularValorFinal(valorInvest=1, valorJuros=1, numeroAno=1):
    valorFinal = investimentoInicial * (1 + juros / 100) ** anos
    return valorFinal

print(f"{calcularValorFinal(investimentoInicial, juros, anos):.2f}")
