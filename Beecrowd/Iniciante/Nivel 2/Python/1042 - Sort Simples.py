'''
Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.
Entrada

A entrada contem três números inteiros.
Saída

Imprima a saída conforme foi especificado.

'''

# Código com tratamento de erros:

'''
while True:
    try:
        entrada = input()

        # Divide a entrada em partes e verifica se todas são números inteiros válidos
        partes = entrada.split(' ')

        # Pra cada uma das partes separadas
        for parte in partes:
          # Verifica se não é possível converter para dígito
          # Caso algum valor de parte não seja um dígito lança a exceção e para verificação das outras partes
          # A exceção é tratada pelo except ValueError
          # Obs o .lstrip('-') remove o sinal de -, pois .isdigit() não funciona para numeros negativos
           if not parte.lstrip('-').isdigit():
                raise ValueError("A entrada contém valores não numéricos. Digite novamente.")

        # Converte as partes para inteiros somente se não houve nenhuma exceção
        valores = list(map(int, partes))

        break

    except ValueError as ve:
        print(ve)
        print('Informe apenas números inteiros. Ex: "7 14 -21"')


valoresOriginais = list(valores)

# Ordena os valores
valores.sort()

# Imprime os valores em ordem crescente
for ordemCrescente in valores:
    print(ordemCrescente)

print()

# Imprime os valores originais na ordem que foram inseridos
for valores in valoresOriginais:
    print(valores)


'''


try:
    tresValores = list(map(int, input().split(' ')))    
    valoresOriginais = list(tresValores)
    tresValores.sort()
    for ordemCrescente in tresValores:
        print(ordemCrescente)
    print()
    for valores in valoresOriginais:
        print(valores)

except ValueError:
    print('Informe apenas números inteiros. Ex: "7 14 -21"')

