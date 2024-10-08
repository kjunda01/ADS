'''
Desenvolver um programa que receba o nome e a quantidade de horas extras trabalhadas por um funcionário, calcule e mostre o seu salário bruto e o salário líquido.

Valores conhecidos:

Salário mínimo = R$1192,40;Valor da hora-extra = R$10,00.

Sabe-se que:

Salário hora-extra = horas-extras * Valor da hora-extra;Salário bruto = 3 * Salário mínimo + Salário hora-extra;Desconto INSS = 12% do salário bruto, se o salário bruto for maior que R$ 2000,00, ou 5% caso contrário;Desconto do Imposto de Renda = 20% do salário bruto, se o salário bruto for maior que R$ 2500,00, 0% caso contrário;Salário líquido = salário bruto - descontos

Dica 01

Para imprimir o nome utilize o print abaixo

print("Nome: %s" %(nome));

Entrada

Um valor do tipo string representando o nome do funcionário e um valor do tipo float representando o número de horas extras trabalhadas.

Saída

Você deverá imprimir, ao final do programa, o nome do funcionário, seu salário bruto e seu salário líquido. Vide exemplos.
Samples Input	Samples Output
Carlos Antônio
12.5
Nome: Carlos Antônio
Salário bruto: R$3702.20
Salário líquido: R$2517.50
João Paulo
80
Nome: João Paulo
Salário bruto: R$4377.20
Salário líquido: R$2976.50

'''
nomeFuncionario = input()
horasExtras = float(input())

salarioMinimo = 1192.40
valorHoraExtra = 10.00

salarioHoraExtra = valorHoraExtra * horasExtras
salarioBruto = 3 * salarioMinimo + salarioHoraExtra

if salarioBruto > 2000:
    descontoINSS = 0.12 * salarioBruto
else:
    descontoINSS = 0.05 * salarioBruto

if salarioBruto > 2500:
    descontoImpostoDeRenda = 0.20 * salarioBruto
else:
    descontoImpostoDeRenda = 0
    
salarioLiquido = salarioBruto - descontoINSS - descontoImpostoDeRenda
    

print(f'Nome: {nomeFuncionario}\nSalário bruto: R${salarioBruto:.2f}\nSalário líquido: R${salarioLiquido:.2f}')
