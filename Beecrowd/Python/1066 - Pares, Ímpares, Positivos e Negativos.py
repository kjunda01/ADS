#  beecrowd | 1066
# Pares, Ímpares, Positivos e Negativos

# Adaptado por Neilor Tonin, URI Brasil
# Timelimit: 1

# Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.
# Entrada

# O arquivo de entrada contém 5 valores inteiros quaisquer.
# Saída

# Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma.
# Exemplo de Entrada 	Exemplo de Saída

# -5
# 0
# -3
# -4
# 12
	

# 3 valor(es) par(es)
# 2 valor(es) impar(es)
# 1 valor(es) positivo(s)
# 3 valor(es) negativo(s) 

valoresInteiros = []
pares = []
impares = []
positivos = []
negativos = []

while len(valoresInteiros) <= 4 :
    inteiros = int(input())
    valoresInteiros.append(inteiros)
    if inteiros % 2 == 0:
        pares.append(inteiros)
    if inteiros % 2 != 0:
        impares.append(inteiros)
    if inteiros > 0:
        positivos.append(inteiros)
    if inteiros < 0:
        negativos.append(inteiros)

print(f"{len(pares)} valor(es) par(es)\n{len(impares)} valor(es) impar(es)\n{len(positivos)} valor(es) positivo(s)\n{len(negativos)} valor(es) negativo(s)")
