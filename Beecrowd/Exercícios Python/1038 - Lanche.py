'''
Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.
CODIGO -   ESPECIFICAÇÃO  - TEXTO
  1    - Cachorro Quente  - R$ 4.00
  2    - X-Salada         - R$ 4.50
  3    - X-Bacon          - R$ 5.00
  4    - Torrada simples  - R$ 2.00
  5    - Refrigerante     - R$ 1.50

Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.
'''

codigoEQuantidade = list(map(int, input().split(' ')))

match codigoEQuantidade[0]:
    case 1:
        produto = 4 * codigoEQuantidade[1]
    case 2:
        produto = 4.5 * codigoEQuantidade[1]
    case 3:
        produto = 5 * codigoEQuantidade[1]
    case 4:
        produto = 2 * codigoEQuantidade[1]
    case 5:
        produto = 1.5 * codigoEQuantidade[1]
    case _:
        print('Escolha inválida') 

print(f'Total: R$ {produto:.2f}')
