
dicionario = {}

for i in range(1, 3):  # Repete 2 vezes
    nome = input(f"Informe o nome da pessoa {i}: ")
    idade = int(input(f"Informe a idade da pessoa {i}: "))
    
    # Adicionando nome e idade ao dicionário com uma chave única para cada pessoa
    dicionario[f'ID: {i}'] = {
        'nome': nome,
        'idade': idade
        }

# Percorrendo o dicionário e exibindo a chave e os valores
for chave, dados in dicionario.items():
    print(f"{chave}")
    print(f"Nome: {dados['nome']}")
    print(f"Idade: {dados['idade']}")
    print("-----")
