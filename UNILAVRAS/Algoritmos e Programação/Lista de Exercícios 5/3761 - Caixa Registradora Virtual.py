'''
beecrowd | 3761
Caixa Registradora Virtual
Por João Paulo Fernandes de Cerqueira César,  Brazil

Timelimit: 5
Crie um programa em Python que simule uma caixa registradora para uma loja. O programa deve permitir que o usuário insira o preço e a quantidade de cada item comprado. Após inserir todos os itens, o usuário pode aplicar um cupom de desconto (em porcentagem). O programa deve calcular o valor total da compra, aplicar o desconto e exibir o valor final a ser pago.



Entrada


O programa deve funcionar da seguinte maneira:



O usuário insere o número de itens a serem registrados (um número inteiro positivo).

Para cada item, o usuário insere o preço unitário (um número decimal) e a quantidade comprada (um número inteiro positivo).

Após registrar todos os itens, o usuário insere o cupom de desconto (um número decimal representando a porcentagem de desconto).



Saída


O programa deve exibir o valor total da compra (antes do desconto) e o valor final a ser pago (após o desconto), cada um com duas casas decimais.

Samples Input	Samples Output
3
12.50
2
7.99
5
4.00
1
10.0
Total: R$ 68.95
Desconto: R$ 6.90
Valor final: R$ 62.05
2
15.00
3
8.99
4
5.0
Total: R$ 80.96
Desconto: R$ 4.05
Valor final: R$ 76.91
4
10.00
2
20.50
3
7.0
4
15.0
5
20.0
Total: R$ 184.50
Desconto: R$ 36.90
Valor final: R$ 147.60
'''

def informaDados(valorTotal, valorDoDesconto, valorFinal):
    print(f'''Total: R$ {valorTotal:.2f}
Desconto: R$ {valorDoDesconto:.2f}
Valor final: R$ {valorFinal:.2f}''')

# Inicia o dicionário vazio
produtos = {}
numeroDeItens = int(input())

# Loop principal, vai fazer o loop "numeroDeItens" vezes, no caso 3.
for i in range(numeroDeItens):
    # pede o preço e a quantidade comprada
    preco = float(input())
    quantidade = int(input())
    
    # adiciona os itens no dicionário
    produtos[i + 1] = {'preco': preco,'quantidade': quantidade} 

# pede o desconto
informaDesconto = float(input()) / 100

# passa pelos itens do dicionário para fazer os calculos
total = 0
desconto = 0
for j in produtos:
    total += produtos[j].get("preco") * produtos[j].get("quantidade")
    desconto = informaDesconto * total

# calcula o valor final
final = total - desconto

#chama a função que vai mostrar os dados.
informaDados(total, desconto, final)
