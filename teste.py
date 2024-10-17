# pede os dados para o usuario
N = int(input())
numeros = list(map(int, input().split()))

# maior e menor valor com o primeiro elemento da lista
maior = numeros[0]
menor = numeros[0]

# primeiro número como o maior inicialmente
print(f"Número considerado maior: {maior}")

# maior valor
for numero in numeros[1:]:
    if numero > maior:
        maior = numero
        print(f"Número considerado maior: {maior}")

# menor valor
for numero in numeros[1:]:
    if numero < menor:
        menor = numero

# exibe na tela
print(f"Maior valor: {maior}")
print(f"Menor valor: {menor}")
