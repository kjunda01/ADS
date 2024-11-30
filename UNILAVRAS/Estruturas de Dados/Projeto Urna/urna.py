from os import listdir
from InquirerPy import prompt
# https://inquirerpy.readthedocs.io/en/latest/
from cores import *

candidatos = []
eleitores = []

def arquivos_txt_locais():
    # IDENTIFICA QUAIS AQUIVOS .TXT ESTÃO NO DIRETORIO
    arquivos = []
    for arquivo in listdir():
        if arquivo.lower().endswith(".txt"):
            arquivos.append(arquivo)
    if len(arquivos) > 0:
        return arquivos
    else:
        msg = "Nenhnum arquivo encontrado"
        return ""


# FICOU ESSA PARTE
# DE ARQUIVOS FALTANTES
# PARA FINALIZAR
# A PARTE 1 E 2
# DO MENU





def escolher_arquivo_leitura(message):
    leitura_de_arquivos = [{"type": "list", "message": message, "choices": arquivos_txt_locais()}]
    return leitura_de_arquivos

def mensagem_de_erro():
    msg = print(f"{cor["vermelho"]}\nArquivo incorreto! Selecione novamente.\n{cor["restaura_cor_original"]}")
    return msg

def leitura_dos_arquivos(arquivo, lista, tipo):
    with open(arquivo, "r") as file:
        conteudo = file.read().strip().split("\n")
        
        for infos in conteudo:
            lista = infos.split(", ")

            objeto = {
                "nome": lista[0],"numero": lista[1], "partido": lista[2], "estado": lista[3], "cargo": lista[4]
                } if tipo == "candidato" else {
                    "nome": lista[0], "rg": lista[1], "titulo_de_eleitor": lista[2], "municipio": lista[3], "estado": lista[4]
                }
            
            candidatos.append(objeto) if tipo == "candidato" else eleitores.append(objeto)
                       
        if tipo == "candidato" and len(lista[4]) > 1:
            mensagem_de_erro()
            candidatos.clear()
        if tipo == "eleitor" and len(lista[4]) < 2:
            mensagem_de_erro()
            eleitores.clear()
        

def choices(candidatos, eleitores):
    escolhas = [
        "1 - Ler arquivo de candidatos",
        "2 - Ler arquivo de eleitores",
        "3 - Iniciar votação",
        "4 - Apurar votos",
        "5 - Mostrar resultados",
        "6 - Fechar programa"]
    
    if not candidatos and not eleitores:
        return [escolhas[0], escolhas[1], escolhas[5]]
            
    if not eleitores and candidatos:
        return [escolhas[1], escolhas[5]]
   
    if not candidatos and eleitores:
        return [escolhas[0], escolhas[5]]
   
    if candidatos and eleitores:
        return escolhas[2:5]

######################################################################
# ENTRANDO NO MEU PRINCIPAL
while True:
    menu_principal = [
        {
            "type": "list",
            "message": "Olá, mesário(a)! O que deseja fazer?",
            "choices": choices(candidatos, eleitores)
        }

    ]

    escolha_menu_principal = prompt(menu_principal)

    if escolha_menu_principal[0][0] == "6":
        print(f"{cor["branco"]}{cor["fundo_preto"]}\nVolte sempre!\n{cor["restaura_cor_original"]}")
        quit()

    else:
        if escolha_menu_principal[0][0] == "1":
            msg_menu_leitura_candidatos = "Escolha o arquivo '.txt' de --CANDIDATOS-- para leitura:"
            leitura_candidatos = prompt(escolher_arquivo_leitura(msg_menu_leitura_candidatos))
            leitura_dos_arquivos(leitura_candidatos[0], ["nome", "numero", "partido", "estado", "cargo"], "candidato")

        if escolha_menu_principal[0][0] == "2":
            msg_menu_leitura_eleitores = "Escolha o arquivo '.txt' de --ELEITORES-- para leitura:"
            leitura_eleitores = prompt(escolher_arquivo_leitura(msg_menu_leitura_eleitores))
            leitura_dos_arquivos(leitura_eleitores[0], ["nome", "rg", "titulo_de_eleitor", "municipio", "estado"], "eleitor")
