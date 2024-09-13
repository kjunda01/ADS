'''

Um comerciante comprou um produto e quer vendê-lo com um lucro de 45% se o valor da compra for menor que R$ 20,00; caso contrário, o lucro será de 30%.

Dicas:

Utilize a estrutura if/else para realizar o cálculo.

Entrada

Um valor float representando o preço de compra do produto.

Saída

Imprima a mensagem "Valor de venda: R$" seguida pelo valor calculado para o preço de venda (mostre o valor com duas casas decimais). 

Samples Input	Samples Output

30.73
	

Valor de venda: R$39.95

15.80
	

Valor de venda: R$22.91

'''

precoDaCompra = float(input())
vendaMENOR20 = (0.45 * precoDaCompra) + precoDaCompra
vendaMAIOR20 = (0.30 * precoDaCompra) + precoDaCompra

if precoDaCompra < 20:
    print(f'Valor de venda: R${vendaMENOR20:.2f}') 
else:
    print(f'Valor de venda: R${vendaMAIOR20:.2f}')
