
# laços de repetição:

# laço for
# for ITEM in SEQUENCIA:
#     instruções executadas para cada item da sequência

    

# Lista: representa sequencia de valores
# Sintaxe: nome_lista = [valores]


# n1= [4,6,7,8,0,3]
# n2 = [1,6,3,0,12,4]
# valores = n1 + n2
# print(valores)
# valores.append(56)
# print(valores)
# valores.pop(3)
# print(valores)
# valores.insert(3, '45')
# print(valores)
# print(12 in valores)


# planetas = ['Marte', 'Vênus', 'Terra', 'Mercurio', 'Jupter', 'Saturno', 'Urano', 'Netuno']

# for planeta in planetas:
#     print(planeta)


# Crie um script que peça para o usuário digitar o nome de 5 bebidas favoritas dele, armazenando estes valores em uma lista.
# Na sequência, exiba na tela os elementos da lista em ordem alfabética, um por linha, usando um laço de repetição for

# contador = 1
# bebidasFavoritas = []

# for resposta in range(1,6):
#     bebidasFavoritas.append(input(f'Informe sua {contador}ª bebida favorita: '))
#     contador += 1

#     if len(bebidasFavoritas) == 5:
#         contador = 1
        
#         for bebida in bebidasFavoritas:
#             bebidasFavoritas.sort()
#             print(f'{contador}ª bebida favorita: {bebida}')
#             contador += 1

'''Parei em - https://youtu.be/-VeVq64Fgw0?si=0tBQ2F8bqLSEKzYh&t=20105'''


elemento = {
    'Z': 1,
    'Nome': 'Hidrogênio',
    'Grupo': 'Não-metais',
    'Densidade': 0.00008988
    }
    
    # Adicione mais elementos conforme necessário



# print(f'Elemento: {elemento["Nome"]}')
# print(f'Densidade: {elemento["Densidade"]}')
# print(f'O dicionário possui: {len(elemento)} itens')

# atualizar ou modificar uma entyrada do dicionario:

# for elemento in elemento:
#     print(elemento[elemento].items())

# for i in elemento.items():
#     print(i)
# print(elemento.items(), end=('\n\n'))

# for i in elemento.keys():
#     print(i)
# print(elemento.keys(), end=('\n\n'))

# for i in telemento.values():
#     print(i)
# print(telemento.values(), end=('\n\n'))

# for i, j in elemento.items():
#     print(f'{i}: {j}')

'''
FUNÇÕES EM PYTHON
'''
# def mensagem():
#     print('Olá, mundo!')
#     print('Olá, mundo de novo!')

# mensagem()

'''
FUNÇÃO COM ARGUMENTOS
'''
# def soma(numero1, numero2):
#     print(f"A soma de {numero1} e {numero2} é {numero1 + numero2}")

# def quadrado(val):
#     quadrados = []
#     for x in val:
#         quadrados.append(x ** 2)
#     return quadrados




import locale

def dinheiro(valor):
    locale.setlocale(locale.LC_MONETARY, 'pt-BR.UTF-8')
    valor = locale.currency(valor, grouping=True)
    return valor

if __name__ == "__main__":
    print(dinheiro(1234.56))

# if __name__ == "__main__":
#     pass



def dinheiro(valor):
  moeda = f"R$ {valor:_.2f}".replace('.',',').replace('_', '.')
  return moeda

def saque(valor):
  notasParaSacar = valor / 100
  if valor % 100 == 0:
    print(f'Você poderá sacar {notasParaSacar:.0f} notas.')
  else:
    print("NÃO AUTORIZADO.\nPossuímos apenas notas de R$100,00, seu saque deve ser múltiplo de 100.")
    return

def saldo(valor):
  if saldoAtual <= 0:
    resposta = "Saldo insuficiente."

    return resposta

if __name__ == "__main":

  opcao = -1
  while not 1 <= opcao <= 3:
    try:
      #saldoAtual = float(input("Para começarmos, informe seu saldo atual: R$ "))
      saldoAtual = 1200.00
      print(saldoAtual)
      menu = '''
      **** Caixa Eletrônico 1.0 ****

        1 - Fazer saque
        
        2 - Consultar saldo
        
        3 - Sair
  '''
      print(menu)
      opcao = int(input("Por favor, escolha sua opção: "))
    except ValueError:
      print("Opção inválida! Tente novamente")
      continue
  match opcao:
    case 1:
      saque(saldoAtual)
    case 2:
      saldo(saldoAtual)
    case 3:
      print('Até logo!')
      quit()






#entrada = int(input("Informe um número: "))
numero = 5

for i in range(1, numero+1):
    # Escada
    #print(" "* (numero - i)*2, end="")
    #Piramide 
    #print(" "* (numero - i), end=" ")
    
    for j in range(1, i+1):
        print(j, end=" ")
    print('')

