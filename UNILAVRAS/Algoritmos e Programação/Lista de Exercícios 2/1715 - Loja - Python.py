'''
Uma loja fornece 13% de desconto para funcionários e 7% de desconto para clientes premium.

Faça um programa que leia o valor total da compra efetuada e um código que identifique se o comprador é um cliente comum (1), funcionário (2) ou premium (3).Calcule e mostre o valor total a ser pago por uma pessoa.

Dica: utilize a estrutura elif.

Entrada

O programa deverá receber o código referente ao tipo do cliente (1, 2 ou 3) que deverá ser armazenado em uma variável inteira. Além disso, o programa também deverá receber o valor total da compra deste salário atual deste cliente, que deverá ser armazenado em uma variável float.

Saída

Caso o usuário digite os códigos 1, 2 ou 3, o programa deverá calcular o valor a ser pago pelo cliente e então exibir a mensagem: "Valor total a ser pago: R$", seguido do valor do novo salário calculado pelo programa (deve-se mostrar o valor com duas casas decimais apenas).

Caso o usuário informe qualquer outro código diferente dos aceitos (1, 2 ou 3), o programa não deverá calcular o valor a ser pago e apenas imprimir a mensagem "OPÇÃO INVÁLIDA!" . Dica: faça isso no else do elif


Samples Input	Samples Output
2
750.80
Valor total a ser pago: R$653.20
1
100.50
Valor total a ser pago: R$100.50
5
100.75
OPÇÃO INVÁLIDA!

'''

tipoCliente = int(input())
totalCompra = float(input())

if 1 <= tipoCliente <= 3:
    descontoFuncionario = 0.13
    descontoClientePremium = 0.07

    pagamentoFuncionario = totalCompra - (totalCompra * descontoFuncionario)
    pagamentoClientePremium = totalCompra - (totalCompra * descontoClientePremium)

    if tipoCliente == 1:
        print(f'Valor total a ser pago: R${totalCompra:.2f}')
    elif tipoCliente == 2:
        print(f'Valor total a ser pago: R${pagamentoFuncionario:.2f}')
    else:
        print(f'Valor total a ser pago: R${pagamentoClientePremium:.2f}')
else:
    print('OPÇÃO INVÁLIDA!')
    