from os import listdir, name, system
from InquirerPy import prompt
# https://inquirerpy.readthedocs.io/en/latest/
import pickle
from cores import cor
from estados import estado

candidatos = {}
eleitores = {}
voto = {}

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
                candidatos[lista[0]] = {"numero": lista[1], "partido": lista[2], "estado": lista[3], "cargo": lista[4]}
                
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
        return escolhas[2:6]

def selecionar_eleitor(titulo_de_eleitor):
    if titulo_de_eleitor in eleitores.keys():
        print(f"{cor["verde"]}Eleitor: {eleitores[titulo_de_eleitor]["nome"]}")
        print(f"Estado: {eleitores[titulo_de_eleitor]["estado"]}\n")
        return True
    else:
        print(f"{cor["vermelho"]}Título não encontrado!\n")
        return False

def verifica_candidato(numero, estado, tipo, categoria):

    if numero == "B" or numero == "":
        print(f"\n{cor["ciano"]}Voto em Branco\n")
        voto[tipo] = "B"
        return "B"
    else:
        # Busca a chave correspondente (nome do candidato)
        if categoria != "Presidente":
            chave_encontrada = next(
                (nome for nome, dados in candidatos.items() if dados["numero"] == numero and dados["estado"] == estado),
                None  # Valor padrão caso não encontre
            )
        else:
            chave_encontrada = next(
                (nome for nome, dados in candidatos.items() if dados["numero"] == numero),
                None  # Valor padrão caso não encontre
            )

        # Verifica se encontrou o candidato
        if chave_encontrada is None:
            print(f"\n{cor["amarelo"]}Candidato não encontrado! Voto Nulo.\n")
            voto[tipo] = "N"
            return "N"

        # Busca as informações do candidato
        candidato = candidatos[chave_encontrada]
        nome = chave_encontrada
        partido = candidato["partido"]

        print(f"\n{cor["verde"]}Candidato {nome} | Partido: {partido}\n")
        voto[tipo] = numero
        return numero
         
def menu_confirmar_voto():
    menu_confirma_voto = [
        {
            "type": "list",
            "name": "confirmacao",
            "message": "Confirma? ",
            "choices": ["Sim", "Não"]
        }
    ]
    resposta = prompt(menu_confirma_voto)
    escolha = resposta["confirmacao"]

    return True if escolha == "Sim" else False

def menu_para_votacao(categoria, tipo):
    while True:
        menu_votacao = [
                {
                    "type": "input",
                    "name": "votacao",
                    "message": f"Informe o voto para {categoria}: ",
                }
            ]
        resposta_menu_votacao = prompt(menu_votacao)
    
        numero_votado = resposta_menu_votacao["votacao"]
        estado_eleitor = eleitores[titulo_atual]["estado"]
        verifica_candidato(numero_votado, estado_eleitor, tipo, categoria)
        if menu_confirmar_voto():
            break

def localidade_urna():
    # ESCOLHENDO A LOCALIDADE DA URNA
    menu_escolha_uf_urna = [
        {"type": "list",
            "message": "UF onde está localizada a urna:",
            "choices": estado
            }]
    
    resposta_menu_escolha_uf_urna = prompt(menu_escolha_uf_urna)
    voto["UF"] = resposta_menu_escolha_uf_urna[0]
    limpar_terminal()
    return menu_escolha_uf_urna[0]

######################################################################
# ENTRANDO NO MEU PRINCIPAL
while True:

    menu_principal = [
        {
            "type": "list",
            "name": "menu_principal",
            "message": "Olá, mesário(a)! O que deseja fazer?",
            "choices": choices_menu_principal(candidatos, eleitores)
        }
    ]

    escolha_menu_principal = prompt(menu_principal)
    limpar_terminal()
    # escolha_menu_principal["menu_principal"] para acessar a resposta e [0] de novo para acessar o número da opcao
    opcao = escolha_menu_principal["menu_principal"][0]
    
    if opcao == "6":
        print(f"{cor["branco"]}{cor["fundo_preto"]}\nVolte sempre!\n{cor["restaura_cor_original"]}")
        quit()
            
    elif opcao == "1":
        msg_menu_leitura_candidatos = "Escolha o arquivo '.txt' de --CANDIDATOS-- para leitura:"
        leitura_candidatos = prompt(escolher_arquivo_leitura(msg_menu_leitura_candidatos))
        leitura_dos_arquivos(leitura_candidatos[0], ["nome", "numero", "partido", "estado", "cargo"], "candidato")

    elif opcao == "2":
        msg_menu_leitura_eleitores = "Escolha o arquivo '.txt' de --ELEITORES-- para leitura:"
        leitura_eleitores = prompt(escolher_arquivo_leitura(msg_menu_leitura_eleitores))
        leitura_dos_arquivos(leitura_eleitores[0], ["nome", "rg", "titulo_de_eleitor", "municipio", "estado"], "eleitor")
    
    elif opcao == "3":
        localidade_urna() 

        # ENTRANDO NOS MENUS DE VOTAÇÃO
        while True:      
            menu_selecao_eleitor = [
                {
                    "type": "input",
                    "name": "titulo",
                    "message": "Informe o Título de Eleitor: ",
                }
            ]
            
            resposta_menu_selecao_eleitor = prompt(menu_selecao_eleitor)
            titulo_atual = resposta_menu_selecao_eleitor["titulo"]
            limpar_terminal()

            if selecionar_eleitor(titulo_atual):
                menu_para_votacao("Deputado Federal", "F")
                menu_para_votacao("Deputado Estadual", "E")
                menu_para_votacao("Senador", "S")
                menu_para_votacao("Governador", "G")
                menu_para_votacao("Presidente", "P")

                print("Voto registrado com sucesso!")
                print("--------------------------------")
                

                menu_confirma_todos_os_votos = [
                    {
                        "type":"list",
                        "name": "cria_votos",
                        "message": "Registrar novo voto?",
                        "choices":["Sim", "Não"]
                    }
                    ]  
                resposta_menu_confirma_todos_os_votos = prompt(menu_confirma_todos_os_votos)
                if resposta_menu_confirma_todos_os_votos["cria_votos"] == "Não":
                    break

    