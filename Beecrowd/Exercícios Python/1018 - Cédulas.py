'''


Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.
Entrada

O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).
Saída

Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.

xemplo de Entrada 	Exemplo de Saída

576
	

576
5 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
1 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
0 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00

11257
	

11257
112 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
0 nota(s) de R$ 1,00

503
	

503
5 nota(s) de R$ 100,00
0 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
0 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00 

'''
saque = int(input())
saqueOriginal = saque

if not 0 < saque < 1000000:
    print('Saque inválido.')
else:
    cedulasDe100 = saque // 100
    saque = saque - cedulasDe100 * 100

    cedulasDe50 = saque // 50
    saque = saque - cedulasDe50 * 50

    cedulasDe20 = saque // 20
    saque = saque - cedulasDe20 * 20

    cedulasDe10 = saque // 10
    saque = saque - cedulasDe10 * 10

    cedulasDe5 = saque // 5
    saque = saque - cedulasDe5 * 5

    cedulasDe2 = saque // 2
    saque = saque - cedulasDe2 * 2
    
    cedulasDe1 = saque // 1

    print(saqueOriginal)
    print(f'{cedulasDe100} nota(s) de R$ 100,00')
    print(f'{cedulasDe50} nota(s) de R$ 50,00')
    print(f'{cedulasDe20} nota(s) de R$ 20,00')
    print(f'{cedulasDe10} nota(s) de R$ 10,00')
    print(f'{cedulasDe5} nota(s) de R$ 5,00')
    print(f'{cedulasDe2} nota(s) de R$ 2,00')
    print(f'{cedulasDe1} nota(s) de R$ 1,00')
