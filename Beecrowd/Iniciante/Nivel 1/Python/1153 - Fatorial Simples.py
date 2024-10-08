#  beecrowd | 1153
# Fatorial Simples

# Adaptado por Neilor Tonin, URI Brasil
# Timelimit: 1

# Ler um valor N. Calcular e escrever seu respectivo fatorial. Fatorial de N = N * (N-1) * (N-2) * (N-3) * ... * 1.
# Entrada

# A entrada contém um valor inteiro N (0 < N < 13).
# Saída

# A saída contém um valor inteiro, correspondente ao fatorial de N.
# Exemplo de Entrada 	Exemplo de Saída

# 4
	

# 24

#Fatorial de numeroInformado = numeroInformado * (numeroInformado-1) até numeroInformado.

numeroInformado = int(input())
resultado = 1  

for numero in range(numeroInformado, 0, -1):
    resultado *= numero  

print(resultado)
