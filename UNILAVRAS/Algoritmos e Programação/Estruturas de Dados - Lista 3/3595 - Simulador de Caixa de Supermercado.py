'''
beecrowd | 3896
Simulador de Caixa de Supermercado

Por João Paulo Fernandes de Cerqueira César,

Brazil
Timelimit: 5

Você estará simulando um caixa de supermercado, onde cada item tem um preço e uma quantidade. Você receberá uma lista de compras como entrada, onde cada item consiste no nome do produto (uma string sem espaços), seu preço unitário (um número real) e a quantidade comprada (um número inteiro). Sua tarefa é calcular o total da compra e imprimir o recibo.


Entrada

A entrada consiste em várias linhas, onde cada linha contém o nome de um produto, seu preço unitário e a quantidade comprada, separados por espaços. A entrada termina quando uma linha com a palavra FIM é inserida


Saída

A saída deve conter o recibo da compra, listando cada item com seu nome, preço unitário, quantidade e subtotal. No final do recibo, você deve imprimir o total da compra.


Dica:


Para resolver este exercício, você pode seguir os seguintes passos:


    Ler os itens da compra da entrada e armazená-los em uma lista de tuplas, onde cada tupla contém o nome do produto, o preço unitário e a quantidade.


    Iterar sobre a lista de tuplas e calcular o subtotal de cada item (preço unitário multiplicado pela quantidade).


    Manter um total acumulado da compra enquanto itera pelos itens.


    Imprimir o recibo da compra, listando cada item com seu nome, preço unitário, quantidade e subtotal, e no final, imprimir o total da compra.


Dica para impressão:


recibo = "Recibo de Compra:\nItem       Preço Unitário  Quantidade  Subtotal\n"
.......
recibo += f"{nome.ljust(10)} {preco_unitario:.2f}{' ' * 14}{quantidade}{' ' * 11}{subtotal:.2f}\n"
......
recibo += f"Total da Compra: {total:.2f}"


Samples Input	Samples Output

Maçã 2.50 5
Banana 1.20 3
Laranja 3.00 2
FIM
	

Recibo de Compra:
Item Preço Unitário Quantidade Subtotal
Maçã 2.50 5 12.50
Banana 1.20 3 3.60
Laranja 3.00 2 6.00
Total da Compra: 22.10

Café 5.00 2
Açúcar 2.50 3
Chá 3.50 1
FIM
	

Recibo de Compra:
Item Preço Unitário Quantidade Subtotal
Café 5.00 2 10.00
Açúcar 2.50 3 7.50
Chá 3.50 1 3.50
Total da Compra: 21.00

Leite 2.00 4
Pão 1.50 2
Ovos 1.20 10
Queijo 3.00 2
Arroz 5.50 3
FIM
	

Recibo de Compra:
Item Preço Unitário Quantidade Subtotal
Leite 2.00 4 8.00
Pão 1.50 2 3.00
Ovos 1.20 10 12.00
Queijo 3.00 2 6.00
Arroz 5.50 3 16.50
Total da Compra: 45.50
'''
vendasTotais = {}
entrada = ""
total = 0

def criaVenda(linha):
    venda = linha.split()
    item = " ".join(venda[:-2])
    preco = float(venda[-2])
    quantidade = int(venda[-1])
    subtotal = preco * quantidade
    
    vendasTotais[item] = {
        "preco":preco,
        "quantidade":quantidade, 
        "subtotal": subtotal
    }

    return vendasTotais

while entrada != "FIM":
    entrada = input()
    if entrada != "FIM":
        criaVenda(entrada)

print(f"Recibo de Compra:\nItem       Preço Unitário  Quantidade  Subtotal")

for elementos in vendasTotais.items():
    nome = elementos[0]
    preco_unitario = elementos[1]["preco"]
    quantidade = elementos[1]["quantidade"]
    subtotal = elementos[1]["subtotal"]
    print(f"{nome.ljust(10)} {preco_unitario:.2f}{' ' * 14}{quantidade}{' ' * 11}{subtotal:.2f}")

for i in vendasTotais.values():
    total += i["subtotal"]

print(f"Total da Compra: {total:.2f}")
