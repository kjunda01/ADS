############
#https://colab.research.google.com/drive/12xrsqBmrctrTSUp-XI2QA6RZ4DdftwTr?usp=sharing
#############

pilha = []

# empilhando alguns itens
pilha.append("Prato 1")
pilha.append("Prato 2")
pilha.append("Prato 3")

print(pilha)

# desempilhando um item
emAtendimento = pilha.pop() # o pop sem nada remove o último
print(emAtendimento)
print(pilha)

pilha.append("Prato 4")
print(pilha)

###############################################
# com bibliotecas

from collections import deque
pilha = deque()
pilha.append(10)
pilha.append(20)
elemento = pilha.pop()
