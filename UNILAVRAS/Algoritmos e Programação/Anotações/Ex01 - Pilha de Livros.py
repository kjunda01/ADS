'''
#############################
https://colab.research.google.com/drive/1FCVaaLG1MzYPliV51MYwDYinmG4Y8R1Q?usp=drive_link
#############################

'''

pilha = []


def adicionarLivro(pilha, livro):
    pilha.append(livro)

def removerLivro(pilha):
    if not pilha:
        print("Pilha vazia!")
    return pilha.pop()

def verTopo(pilha):
    if not pilha:
        print("Pilha vazia!")
    return pilha[-1]


#Exemplo de uso
adicionarLivro(pilha, "O Hobbit")
adicionarLivro(pilha, "O Senhor dos Anéis")
print(verTopo(pilha)) # saída: O senhor dos aneis
print(removerLivro(pilha)) # O senhor dos aneis