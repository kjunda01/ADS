from os import listdir, name, system
from InquirerPy import prompt
# https://inquirerpy.readthedocs.io/en/latest/
from cores import cor
from estados import estado

candidatos = {}
eleitores = {}
votos = {}

def limpar_terminal():
    if name == "nt":
        system("cls")
    else:
        system("clear")

def arquivos_txt_locais():
    # IDENTIFICA QUAIS AQUIVOS .TXT ESTÃO NO DIRETORIO
    arquivos = []
    for arquivo in listdir():
        if arquivo.lower().endswith(".txt"):
            arquivos.append(arquivo)
    return arquivos


# FICOU ESSA PARTE
# DE ARQUIVOS FALTANTES
# PARA FINALIZAR
# A PARTE 1 E 2
# DO MENU


def escolher_arquivo_leitura(message):
    leitura_de_arquivos = [{"type": "list", "message": message, "choices": arquivos_txt_locais()}]
    return leitura_de_arquivos

def mensagem_de_erro(arquivo, tipo):
    msg = print(f"""{cor["vermelho"]}\nArquivo: {arquivo}
Categoria: {tipo}
                
Arquivo errado. Selecione novamente.\n{cor["restaura_cor_original"]}""")
    return msg

def mensagem_de_sucesso(nome_do_arquivo, tipo):
    msg = print(f"""{cor["verde"]}\nArquivo: {nome_do_arquivo[0]}
Categoria: {tipo}

Arquivo carregado com sucesso!\n{cor["restaura_cor_original"]}""")
    return msg

def leitura_dos_arquivos(arquivo, lista, tipo):
    

# candidatos -> ["nome", "numero", "partido", "estado", "cargo"]
# eleitores -> ["nome", "rg", "titulo_de_eleitor", "municipio", "estado"]

    with open(arquivo, "r") as file:
        conteudo = file.read().strip().split("\n")
        
        for infos in conteudo:
            lista = infos.split(", ")
                               
            if tipo == "candidato":
                candidatos[lista[1]] = {"nome": lista[0], "partido": lista[2], "estado": lista[3], "cargo": lista[4]}
                
                if len(lista[4]) > 1:
                    mensagem_de_erro(arquivo, "CANDIDATOS")
                    candidatos.clear()
                    break
                    
            if tipo == "eleitor":
                eleitores[lista[2]] = {"nome": lista[0], "rg": lista[1], "municipio": lista[3], "estado": lista[4]}

                if len(lista[4]) < 2:
                    mensagem_de_erro(arquivo, "ELEITORES")
                    eleitores.clear()
                    break
        
        if candidatos:
            mensagem_de_sucesso(leitura_candidatos, "CANDIDATOS")
        if eleitores:
            mensagem_de_sucesso(leitura_eleitores, "ELEITORES")


def choices_menu_principal(candidatos, eleitores):
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

def selecionar_eleitor(titulo_de_eleitor):
    for eleitor in eleitores:
        if eleitor["titulo_de_eleitor"] == titulo_de_eleitor:
            print(f"Eleitor: {eleitor["nome"]}")
            print(f"Estado: {eleitor["estado"]}")
            return eleitor
        else:
            print(f"{cor["vermelho"]}Eleitor não encontrado!\n")
            return True

 
def verifica_condidato(uf, tipo):
    filtro = [candidato for candidato in candidatos if candidato['estado'] == uf and candidato["cargo"] == tipo]
    lista_formatada = [f"{candidato['numero']} - {candidato['nome']} - {candidato['partido']}" for candidato in filtro]
    return lista_formatada


######################################################################
# ENTRANDO NO MEU PRINCIPAL
while True:
    menu_principal = [
        {
            "type": "list",
            "message": "Olá, mesário(a)! O que deseja fazer?",
            "choices": choices_menu_principal(candidatos, eleitores)
        }
    ]

    
    escolha_menu_principal = prompt(menu_principal)
    limpar_terminal()


    match escolha_menu_principal[0][0]:
        case "6":
            print(f"{cor["branco"]}{cor["fundo_preto"]}\nVolte sempre!\n{cor["restaura_cor_original"]}")
            quit()

        case "1":
            msg_menu_leitura_candidatos = "Escolha o arquivo '.txt' de --CANDIDATOS-- para leitura:"
            leitura_candidatos = prompt(escolher_arquivo_leitura(msg_menu_leitura_candidatos))
            leitura_dos_arquivos(leitura_candidatos[0], ["nome", "numero", "partido", "estado", "cargo"], "candidato")

        case "2":
            if escolha_menu_principal[0][0] == "2":
                msg_menu_leitura_eleitores = "Escolha o arquivo '.txt' de --ELEITORES-- para leitura:"
                leitura_eleitores = prompt(escolher_arquivo_leitura(msg_menu_leitura_eleitores))
                leitura_dos_arquivos(leitura_eleitores[0], ["nome", "rg", "titulo_de_eleitor", "municipio", "estado"], "eleitor")

        case "3":
            menu_escolha_uf_urna = [
        {
            "type": "list",
            "message": "UF onde está localizada a urna:",
            "choices": estado
        }
    ]
            resposta_menu_escolha_uf_urna = prompt(menu_escolha_uf_urna)
            limpar_terminal()
            
            
            while True:              
                menu_selecao_eleitor = [
                    {
                        "type": "input",
                        "message": "Informe o Título de Eleitor:",
                    }
                ]
                resposta_menu_selecao_eleitor = prompt(menu_selecao_eleitor)
                limpar_terminal()
                
                if selecionar_eleitor(resposta_menu_selecao_eleitor[0]):
                    pass
                else:
                    break

                
            menu_votacao_federal = [
                {
                    "type": "input",
                    "message": "Informe o voto para Deputado Federal: ",
                }
            ]
            resposta_menu_votacao_federal = prompt(menu_votacao_federal)
                
            
                

        case _:
                quit()