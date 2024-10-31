arquivo = open("./contatos.txt")
linhas =[]

for linha in arquivo:
    linhas.append(linha.strip())

linhaProcessada = linhas[0].split(",")
[nome, telefone, cidade] = linhaProcessada

dicionario = {}
dicionario[nome] = {telefone, cidade}

print(dicionario)
arquivo.close()