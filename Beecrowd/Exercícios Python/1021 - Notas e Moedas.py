'''
Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.
Entrada

O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).
Saída

Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal.

Exemplo de Entrada 	Exemplo de Saída
576.73
NOTAS:
5 nota(s) de R$ 100.00
1 nota(s) de R$ 50.00
1 nota(s) de R$ 20.00
0 nota(s) de R$ 10.00
1 nota(s) de R$ 5.00
0 nota(s) de R$ 2.00
MOEDAS:
1 moeda(s) de R$ 1.00
1 moeda(s) de R$ 0.50
0 moeda(s) de R$ 0.25
2 moeda(s) de R$ 0.10
0 moeda(s) de R$ 0.05
3 moeda(s) de R$ 0.01

4.00
NOTAS:
0 nota(s) de R$ 100.00
0 nota(s) de R$ 50.00
0 nota(s) de R$ 20.00
0 nota(s) de R$ 10.00
0 nota(s) de R$ 5.00
2 nota(s) de R$ 2.00
MOEDAS:
0 moeda(s) de R$ 1.00
0 moeda(s) de R$ 0.50
0 moeda(s) de R$ 0.25
0 moeda(s) de R$ 0.10
0 moeda(s) de R$ 0.05
0 moeda(s) de R$ 0.01 

91.01
NOTAS:
0 nota(s) de R$ 100.00
1 nota(s) de R$ 50.00
2 nota(s) de R$ 20.00
0 nota(s) de R$ 10.00
0 nota(s) de R$ 5.00
0 nota(s) de R$ 2.00
MOEDAS:
1 moeda(s) de R$ 1.00
0 moeda(s) de R$ 0.50
0 moeda(s) de R$ 0.25
0 moeda(s) de R$ 0.10
0 moeda(s) de R$ 0.05
1 moeda(s) de R$ 0.01 
'''
saque = float(input())

cedulasDe100 = saque // 100
saque = round(saque - cedulasDe100 * 100, 2)

cedulasDe50 = saque // 50
saque = round(saque - cedulasDe50 * 50, 2)

cedulasDe20 = saque // 20
saque = round(saque - cedulasDe20 * 20, 2)

cedulasDe10 = saque // 10
saque = round(saque - cedulasDe10 * 10, 2)

cedulasDe5 = saque // 5
saque = round(saque - cedulasDe5 * 5, 2)

cedulasDe2 = saque // 2
saque = round(saque - cedulasDe2 * 2, 2)

moedasDe1 = saque // 1
saque = round(saque - moedasDe1 * 1, 2)

moedasDe050 = saque // 0.50
saque = round(saque - moedasDe050 * 0.50, 2)

moedasDe025 = saque // 0.25
saque = round(saque - moedasDe025 * 0.25, 2)

moedasDe010 = saque // 0.10
saque = round(saque - moedasDe010 * 0.10, 2)

moedasDe005 = saque // 0.05
saque = round(saque - moedasDe005 * 0.05, 2)

moedasDe001 = saque / 0.01

print(f'''NOTAS:
{cedulasDe100:.0f} nota(s) de R$ 100.00
{cedulasDe50:.0f} nota(s) de R$ 50.00
{cedulasDe20:.0f} nota(s) de R$ 20.00
{cedulasDe10:.0f} nota(s) de R$ 10.00
{cedulasDe5:.0f} nota(s) de R$ 5.00
{cedulasDe2:.0f} nota(s) de R$ 2.00
MOEDAS:
{moedasDe1:.0f} moeda(s) de R$ 1.00
{moedasDe050:.0f} moeda(s) de R$ 0.50
{moedasDe025:.0f} moeda(s) de R$ 0.25
{moedasDe010:.0f} moeda(s) de R$ 0.10
{moedasDe005:.0f} moeda(s) de R$ 0.05
{moedasDe001:.0f} moeda(s) de R$ 0.01''')
