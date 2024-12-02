from faker import Faker
import random
import json

# Inicializa o gerador de dados fictícios com suporte ao Brasil
fake = Faker('pt_BR')

# Função para gerar um RG fictício com o estado
def gerar_rg_com_estado(estado):
    return f"{estado}{random.randint(10, 99)}{random.randint(100, 999)}{random.randint(100, 999)}{random.randint(0, 9)}"

# Função para gerar um número de título de eleitor fictício
def gerar_titulo_eleitor():
    return f"{random.randint(100, 999)}{random.randint(100000, 999999)}{random.randint(10, 99)}"

# Função para gerar um eleitor fictício
def gerar_eleitor():
    nome = fake.name()
    estado = fake.estado_sigla()  # Gera a sigla do estado
    rg = gerar_rg_com_estado(estado)
    titulo_eleitor = gerar_titulo_eleitor()
    cidade = fake.city()
    return {
        "nome": nome,
        "rg": rg,
        "titulo_eleitor": titulo_eleitor,
        "cidade": cidade,
        "estado": estado
    }

# Gera uma lista de eleitores fictícios
def gerar_eleitores(quantidade):
    eleitores = [gerar_eleitor() for _ in range(quantidade)]
    return eleitores

# Número de eleitores fictícios
quantidade_eleitores = 50000

# Gerar os eleitores
eleitores_ficticios = gerar_eleitores(quantidade_eleitores)

# Salvar em um arquivo .txt
with open("eleitores_ficticios.txt", "w", encoding="utf-8") as arquivo_txt:
    for eleitor in eleitores_ficticios:
        linha = f"{eleitor['nome']},{eleitor['rg']},{eleitor['titulo_eleitor']},{eleitor['cidade']},{eleitor['estado']}\n"
        arquivo_txt.write(linha)

# Salvar em um arquivo .json
with open("eleitores_ficticios.json", "w", encoding="utf-8") as arquivo_json:
    json.dump(eleitores_ficticios, arquivo_json, ensure_ascii=False, indent=4)

print("Dados fictícios de eleitores gerados com sucesso!")
