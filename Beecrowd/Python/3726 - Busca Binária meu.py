# listaPadrao = []
# while len(listaPadrao) < 3:
#     numero = int(input())
#     listaPadrao.append(numero)

# valorInicial = listaPadrao[0]
# valorFinal = listaPadrao[1]
# numeroProcurado = listaPadrao[2]

# listaInicial = []
# while len(listaInicial) < 3:
#     numero = int(input())
#     listaInicial.append(numero)

# numeroInicial = listaInicial[0]
# numeroFinal = listaInicial[1]
# numeroProcurado = listaInicial[2]
numeroInicial = 1
numeroFinal = 100
numeroProcurado = 42


listaMeio = []
def busca_binaria(inicio, fim, numeroProcurado):
    meio = (inicio + fim) // 2
    contador = 1

    if numeroProcurado < inicio or numeroProcurado > fim:
        resposta = f'Número {numeroProcurado} não encontrado!'
        return resposta
    
        #### FALTA ALGUMA COISA AQUI
        
        contador += 1

    if numeroProcurado == meio:
        return f'Número {numeroProcurado} encontrado'


print(busca_binaria(numeroInicial, numeroFinal, numeroProcurado))
