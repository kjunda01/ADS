fila = []

def filaVazia():
    if fila:
        return True
    return False


def chegou(nome):
    fila.append(nome)

def proximo():
    if not fila:
    #if len(fila) != 0:
        return fila.pop(0)
    filaVazia()

def mostrar():
    if fila:
    #if len(fila) != 0:
        print(", ".join(fila))
    filaVazia()

comando = ""
while comando != "SAIR":
    comando = input("Digite o comando: ")
    if comando.startswith("chegou"):
        nome = comando.split('"')[1] # extrai o nome
        chegou(nome)
    elif comando == "proximo":
        proximo()
    elif comando == "mostrar":
        mostrar()


chegou("Maria")
chegou("João")
mostrar()