'''
beecrowd | 3759
Triângulo Cubo

Por João Paulo Fernandes de Cerqueira César,

Brazil
Timelimit: 5

Escreva um programa em Python que calcule a área de um triângulo e o volume de um cubo. Para isso, você deve criar duas funções: uma para calcular a área de um triângulo e outra para calcular o volume de um cubo. A área de um triângulo pode ser calculada pela fórmula (base * altura) / 2, e o volume de um cubo é dado por aresta3. O programa deve solicitar ao usuário a base e a altura do triângulo, bem como a aresta do cubo, e, em seguida, exibir a área do triângulo e o volume do cubo.


Entrada


O programa deve ler três números inteiros:


    A base do triângulo.
    A altura do triângulo.
    A aresta do cubo.


Saída


O programa deve exibir a área do triângulo e o volume do cubo, separados por uma quebra de linha.
Samples Input	Samples Output

10
6
2
	

30.0
8

5
8
3
	

20.0
27

5
8
3
	

20.0
27
'''

dados = []
while len(dados) != 3:
     dados.append(float(input()))

base = dados[0]
altura = dados[1]
aresta = dados[2]

def areaDoTriangulo(base, altura):
    area = (base * altura) / 2
    return area
    
def volumeDoCubo(volume):
    volume = (aresta ** 3)
    return volume

print(areaDoTriangulo(base, altura))
print(f"{volumeDoCubo(aresta):.0f}")
