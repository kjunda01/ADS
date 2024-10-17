############
#https://colab.research.google.com/drive/12xrsqBmrctrTSUp-XI2QA6RZ4DdftwTr?usp=sharing
#############

# Fila implementada com lista

# cria uma lista vazia

fila = []

def estaVazia():
    if len(fila) == 0:
        return True
    return False
    

# enfileirar elementos na fila
def enfileirar(elemento):
    fila.append(elemento)

# desinfileirar elementos da fila
def desenfileirar():
    if not estaVazia():
        primeiroElemento = fila.pop(0)
        return primeiroElemento
    
enfileirar('Ze')
enfileirar('Tonho')
enfileirar('Maria')
print(fila)
print(estaVazia())

while not estaVazia():
    emAtendimento = desenfileirar()
    print(f'{emAtendimento} está sendo atendido.')

# filas usa-se append e pop.

##################################################

#Agora usando a biblioteca

import queue
fila = queue.Queue()
fila.put("ze")
fila.put("maria")

# printa toda a fila
print(list(fila.queue))

# remove alguem da fila
emAtendimento = fila.get()

# mostra o tamanho
tamanho = fila.qsize()
print(tamanho)

# verifica se está vazia
print(fila.empty())