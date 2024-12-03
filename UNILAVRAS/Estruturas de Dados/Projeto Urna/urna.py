from os import listdir, name, system
import pickle
from collections import defaultdict
from InquirerPy import prompt
from os import remove
import pygame
from cores import cor
from estados import estado

candidatos = {}
eleitores = {}
voto = {}
votos_apurados = []


def verificar_virgulas(arquivo, tipo):
    with open(arquivo, 'r') as file:
        linhas = file.readlines()

    for i, linha in enumerate(linhas, start=1):
        qtd_virgulas = linha.count(',')
        if qtd_virgulas != 4:
            print(f"{cor["vermelho"]}Linha {i} tem {qtd_virgulas} vírgulas: {linha.strip()}")
    if tipo == "CANDIDATOS":
        print(f"\n{cor["vermelho"]}Para importar corretamente, deixe o arquivo com o formato:")
        print(f"{cor["vermelho"]}numero,partido,estado,cargo")
        print(f"{cor["vermelho"]}Sem espaços entre as vírgulas")
    if tipo == "ELEITORES":
        print(f"\n{cor["vermelho"]}Para importar corretamente, deixe o arquivo com o formato:")
        print(f"{cor["vermelho"]}nome,rg,municipio,estado")    
        print(f"{cor["vermelho"]}Sem espaços entre as vírgulas")

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
    msg = print(f"""{cor["vermelho"]}\n📁 Arquivo: {arquivo}
📄 Categoria: {tipo}
                
❌ Arquivo errado. Selecione novamente. 🆕\n{cor["restaura_cor_original"]}""")
    verificar_virgulas(arquivo, tipo)
    
def mensagem_de_sucesso(nome_do_arquivo, tipo):
    msg = print(f"""{cor["verde"]}\n📁 Arquivo: {nome_do_arquivo[0]}
📄 Categoria: {tipo}

😎 Arquivo carregado com sucesso! ✅\n{cor["restaura_cor_original"]}""")
    return msg

def leitura_dos_arquivos(arquivo, lista, tipo):
    
    # candidatos -> ["nome", "numero", "partido", "estado", "cargo"]
    # eleitores -> ["nome", "rg", "titulo_de_eleitor", "municipio", "estado"]

    try:
        with open(arquivo, "r", encoding="utf-8") as file:
            conteudo = file.read().strip().split("\n")
            
            for infos in conteudo:
                lista = infos.split(",")
                                
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
    except:
        msg = print(f"""{cor["vermelho"]}\n📁 Arquivo: {arquivo}
📄 Categoria: {tipo}
                
❌ Arquivo errado. Selecione novamente. 🆕\n{cor["restaura_cor_original"]}""")
        print(msg)

def choices_menu_principal(candidatos, eleitores):
    
    escolhas = [
        "1️⃣  - Ler arquivo de candidatos 📁",
        "2️⃣  - Ler arquivo de eleitores 📁",
        "3️⃣  - Iniciar votação 📧",
        "4️⃣  - Apurar votos 💼",
        "5️⃣  - Mostrar resultados",
        "6️⃣  - Fechar programa ❌"]
    toca_som_selecao()
    if not candidatos and not eleitores:
        return [escolhas[0], escolhas[1], escolhas[5]]
            
    if not eleitores and candidatos:
        return [escolhas[1], escolhas[5]]
   
    if not candidatos and eleitores:
        return [escolhas[0], escolhas[5]]
   
    if candidatos and eleitores:
        return escolhas[2:6]

def selecionar_eleitor(titulo_de_eleitor):
    
    try:
        localidade_eleitor = eleitores[titulo_de_eleitor]["estado"]
        if voto["UF"] == localidade_eleitor:
            print(f"{cor["verde"]}🧑 Eleitor: {eleitores[titulo_de_eleitor]["nome"]}")
            print(f"🏠 Estado: {localidade_eleitor}\n")
            return True
    except ValueError:
        print(f"{cor["vermelho"]}❌ Título não encontrado!\n")
        return False
        
def verifica_candidato(numero, estado, tipo, cargo):
    
    if numero == "B" or numero == "b":
        print(f"\n{cor['ciano']}⚪ Voto em Branco\n")
        voto[tipo] = "B"
        return "B"
    
    if numero == "" or numero == "N" or numero == "n":
        print(f"\n{cor['amarelo']}🟡 Candidato não encontrado! Voto Nulo.\n")
        voto[tipo] = "N"
        
        return "N"
    
    if cargo == "Deputado Federal":
        chave_encontrada = next(
            (nome for nome, dados in candidatos.items() if dados["numero"] == numero and dados["estado"] == estado and dados["cargo"] == "F"),
            None
        )
        
    elif cargo == "Deputado Estadual":
        chave_encontrada = next(
            (nome for nome, dados in candidatos.items() if dados["numero"] == numero and dados["estado"] == estado and dados["cargo"] == "E"),
            None
        )
    elif cargo == "Senador":
        chave_encontrada = next(
            (nome for nome, dados in candidatos.items() if dados["numero"] == numero and dados["estado"] == estado and dados["cargo"] == "S"),
            None
        )
    elif cargo == "Governador":
        chave_encontrada = next(
            (nome for nome, dados in candidatos.items() if dados["numero"] == numero and dados["estado"] == estado and dados["cargo"] == "G"),
            None
        )
    else:
        chave_encontrada = next(
            (nome for nome, dados in candidatos.items() if dados["numero"] == numero and dados["cargo"] == "P"),
            None
        )

    if chave_encontrada is None:
        print(f"\n{cor['amarelo']}🟡 Candidato não encontrado! Voto Nulo.\n")
        voto[tipo] = "N"
        return "N"

    candidato = candidatos[chave_encontrada]
    nome = chave_encontrada
    partido = candidato["partido"]
    estado_candidato = candidato["estado"]
    cargo_candidato = candidato["cargo"]

    print(f"\n{cor['verde']}Candidato {nome}\nEstado: {estado_candidato}\nPartido: {partido}\nCargo: {cargo_candidato}")
    voto[tipo] = numero
    return numero
  
def menu_confirmar_voto():
    menu_confirma_voto = [
        {
            "type": "list",
            "name": "confirmacao",
            "message": "Confirma? ",
            "choices": ["✅ Sim", "❌ Não"]
        }
    ]
    resposta = prompt(menu_confirma_voto)
    escolha = resposta["confirmacao"]
    
    if escolha == "✅ Sim":
        toca_som_confirma_curto()
        return True
    if escolha == "❌ Não":
        toca_som_selecao()
        return False

def menu_para_votacao(cargo, tipo):
    
    while True:
         
        menu_votacao = [
                {
                    "type": "input",
                    "name": "votacao",
                    "message": f"🗳️  Informe o voto para {cargo}: ",
                }
            ]
        resposta_menu_votacao = prompt(menu_votacao)
        toca_som_selecao()
        numero_votado = resposta_menu_votacao["votacao"]
        estado_eleitor = eleitores[titulo_atual]["estado"]
        verifica_candidato(numero_votado, estado_eleitor, tipo, cargo)
        if menu_confirmar_voto():
            break

def localidade_urna():
    
    # ESCOLHENDO A LOCALIDADE DA URNA
    menu_escolha_uf_urna = [
        {"type": "list",
            "message": "🏠  UF onde está localizada a urna:",
            "choices": estado
            }]
    
    resposta_menu_escolha_uf_urna = prompt(menu_escolha_uf_urna)
    voto["UF"] = resposta_menu_escolha_uf_urna[0]
    toca_som_selecao()
    limpar_terminal()
    return menu_escolha_uf_urna[0]

def salvar_voto_bin(voto):
    with open('votos.bin', 'ab') as arquivo:
        pickle.dump(voto, arquivo)

def ler_votos():
    votos = []
    try:
        with open('votos.bin', 'rb') as arquivo:
            while True:
                try:
                    voto = pickle.load(arquivo)
                    votos.append(voto)
                except EOFError:
                    break
    except FileNotFoundError:
        print("Arquivo de votos não encontrado.")
    return votos

def transforma_categoria(categoria):
    categorias = {
        "F": "Deputado Federal",
        "E": "Deputado Estadual",
        "S": "Senador",
        "G": "Governador",
        "P": "Presidente"
        }
    return categorias.get(categoria, "Cargo inválido")

def apurar_votos(votos, candidatos):
    resultados = defaultdict(lambda: defaultdict(int))
    totais_gerais = defaultdict(int)

    # Itera sobre os votos e conta a quantidade por categoria e escolha
    for voto in votos:
        uf = voto.get('UF', '')  # Obter estado, padrão vazio se não existir
        for categoria, escolha in voto.items():
            if categoria != 'UF':  # Ignora a chave 'UF'
                resultados[categoria][escolha] += 1
                totais_gerais[categoria] += 1

    # Exibindo os resultados
    msg_titulo = f"\n🗳️  Apuração dos votos:  🗳️"
    # print(msg_titulo)
    gera_boletim(msg_titulo)

    for categoria, escolhas in resultados.items():
        msg_categorias = f"\n🧍 Categoria {transforma_categoria(categoria)}:"
        # print(msg_categorias)
        gera_boletim(msg_categorias)
        
        for escolha, quantidade in escolhas.items():
            if escolha != 'N':  # Ignorando votos nulos
                candidato_nome = "Votos em branco"
                candidato = None
                if escolha != "B":  # Se não for voto em branco
                    # Buscar o candidato pelo número e estado, exceto para "P" (Presidente)
                    for nome, dados in candidatos.items():
                        if categoria == "P":  # Presidente: apenas pelo número
                            if dados['numero'] == escolha and dados["estado"] == "BR":
                                candidato = dados
                                candidato_nome = nome
                                break
                        else:  # Outras categorias: número e estado
                            if dados['numero'] == escolha and dados["estado"] == uf:
                                candidato = dados
                                candidato_nome = nome
                                break


                if candidato:
                    # Exibindo as informações do candidato
                    porcentagem = (quantidade / totais_gerais[categoria]) * 100
                    msg_candidatos = f"Número: {candidato.get("numero", 'N/A')} | Votos: {quantidade} ({porcentagem:.2f}%) | Candidato: {candidato_nome}"
                    # print(msg_candidatos)
                    gera_boletim(msg_candidatos)
                # else:
        
            #         print(f"Votos em branco: {quantidade}")
            # else:
            #     print(f"Votos nulos: {quantidade}")
    print(f"\n{cor['ciano']} ***** Boletim gerado com sucesso. Acesse o arquivo 'boletim.txt' para mais detalhes!\n")

def gera_boletim(votos_apurados):
    arquivo = open('boletim.txt', 'a', encoding="utf-8")
    arquivo.write(votos_apurados)
    arquivo.write("\n")
    arquivo.close()

def menu_confirma_geracao_boletim():
    menu_confirma_geracao = [
        {
            "type": "list",
            "name": "confirmacao",
            "message": "Deseja substituir o arquivo?",
            "choices": ["✅ Sim", "❌ Não"]
        }
    ]
    resposta = prompt(menu_confirma_geracao)
    escolha = resposta["confirmacao"]
    
    if escolha == "✅ Sim":
        toca_som_selecao()
        remove("boletim.txt")
        apurar_votos(ler_votos(), candidatos)
        gera_boletim(str(votos_apurados))
        
    if escolha == "❌ Não":
        toca_som_selecao()
        
def busca_candidato_pelo_numero_e_estado(numero_candidato, estado_candidato):
    
    candidato_encontrado = {}
    for chave, valor in candidatos.items():  
        numero = valor["numero"]
        estado = valor["estado"]
        if numero == numero_candidato and estado == estado_candidato:
            candidato_encontrado = {chave: valor}
    return candidato_encontrado

def contar_votos_brancos(votos_lidos):
    votos_brancos = []
    for voto in votos_lidos:
        for branco in voto.values():
            if branco == "B":
                votos_brancos.append(branco)
    return len(votos_brancos)

def contar_votos_nulos(votos_lidos):
    votos_nulos = []
    for voto in votos_lidos:
        for nulo in voto.values():
            if nulo == "N":
                votos_nulos.append(nulo)
    return len(votos_nulos)

def contar_votos_validos():
    contagens = []
    for voto in ler_votos():
        contagem = sum(1 for chave, valor in voto.items() if chave != 'UF' and valor not in ['B', 'N'])
        contagens.append(contagem)
    return sum(contagens)

def mostrar_resultados():
    print(f"Eleitores Aptos: {len(eleitores)}")
    print(f"Candidatos Aptos: {len(candidatos)}")
    print(f"Total de Pessoas Votantes: {len(ler_votos())}")
    print(f"Total de Votos Válidos: {contar_votos_validos()}")
    print(f"Brancos: {contar_votos_brancos(ler_votos())}")
    print(f"Nulos: {contar_votos_nulos(ler_votos())}\n")

def toca_som_selecao():
    pygame.init()
    pygame.mixer.music.load('sons/selecao.mp3')
    pygame.mixer.music.play()
    
def toca_som_confirma_curto():
    pygame.init()
    pygame.mixer.music.load('sons/confirma_curto.mp3')
    pygame.mixer.music.play()
    
def toca_som_confirma_longo():
    pygame.init()
    pygame.mixer.music.load('sons/confirma_longo.mp3')
    pygame.mixer.music.play()
    

######################################################################
# ENTRANDO NO MEU PRINCIPAL
while True:
    menu_principal = [
        {
            "type": "list",
            "name": "menu_principal",
            "message": "🧑 Olá, mesário(a)! O que deseja fazer?",
            "choices": choices_menu_principal(candidatos, eleitores)
        }
    ]

    escolha_menu_principal = prompt(menu_principal)
    limpar_terminal()
    # escolha_menu_principal["menu_principal"] para acessar a resposta e [0] de novo para acessar o número da opcao
    opcao = escolha_menu_principal["menu_principal"][0]
    
    if opcao == "6":
        print(f"{cor["branco"]}{cor["fundo_preto"]}\n Volte sempre!\n{cor["restaura_cor_original"]}")
        quit()
            
    elif opcao == "1":
        toca_som_selecao()
        msg_menu_leitura_candidatos = "📁 Escolha o arquivo '.txt' de --CANDIDATOS-- para leitura:📄"
        leitura_candidatos = prompt(escolher_arquivo_leitura(msg_menu_leitura_candidatos))
        leitura_dos_arquivos(leitura_candidatos[0], ["nome", "numero", "partido", "estado", "cargo"], "candidato")
        if candidatos:
            toca_som_selecao()
            mensagem_de_sucesso(leitura_candidatos, "CANDIDATOS")
        

    elif opcao == "2":
        toca_som_selecao()
        msg_menu_leitura_eleitores = "📁 Escolha o arquivo '.txt' de --ELEITORES-- para leitura:📄"
        leitura_eleitores = prompt(escolher_arquivo_leitura(msg_menu_leitura_eleitores))
        leitura_dos_arquivos(leitura_eleitores[0], ["nome", "rg", "titulo_de_eleitor", "municipio", "estado"], "eleitor")
        if eleitores:
            toca_som_selecao()
            mensagem_de_sucesso(leitura_eleitores, "ELEITORES")
    
    elif opcao == "3":
        toca_som_selecao()
        localidade_urna() 

        # ENTRANDO NOS MENUS DE VOTAÇÃO
        while True:      
            menu_selecao_eleitor = [
                {
                    "type": "input",
                    "name": "titulo",
                    "message": f"🪪 Informe o Título de Eleitor (0 para sair): ",
                }
            ]
            
            resposta_menu_selecao_eleitor = prompt(menu_selecao_eleitor)
            titulo_atual = resposta_menu_selecao_eleitor["titulo"]
            toca_som_selecao()
            limpar_terminal()
            if titulo_atual == "0":
                break
            if titulo_atual in eleitores.keys():
                if selecionar_eleitor(titulo_atual):
                    menu_para_votacao("Deputado Federal", "F")
                    menu_para_votacao("Deputado Estadual", "E")
                    menu_para_votacao("Senador", "S")
                    menu_para_votacao("Governador", "G")
                    menu_para_votacao("Presidente", "P")

                    print(f"{cor["verde"]}--------------------------------")
                    print(f"{cor["verde"]}✅ Voto registrado com sucesso!")
                    print(f"{cor["verde"]}--------------------------------")
                    toca_som_confirma_longo()

                    salvar_voto_bin(voto)
                

                    menu_confirma_todos_os_votos = [
                        {
                            "type":"list",
                            "name": "cria_votos",
                            "message": "Registrar novo voto?",
                            "choices": ["✅ Sim", "❌ Não"]
                        }
                        ]  
                    resposta_menu_confirma_todos_os_votos = prompt(menu_confirma_todos_os_votos)
                    if resposta_menu_confirma_todos_os_votos["cria_votos"] == "❌ Não":
                        break

    elif opcao == "4":
        try:
            with open("boletim.txt", "r", encoding="utf-8") as arquivo:
                    conteudo = arquivo.read().strip().split("\n")
            print(f"{cor["amarelo"]}📁❌ Arquivo: boletim.txt já gerado.\n Por favor, escolha uma opção: {cor["restaura_cor_original"]}")
            menu_confirma_geracao_boletim()
        except:
            apurar_votos(ler_votos(), candidatos)
            gera_boletim(str(votos_apurados))

        
    elif opcao == "5":
        # TENTA MOSTRAR OS RESULTADOS
        try:
            mostrar_resultados()
            with open("boletim.txt", "r", encoding="utf-8") as arquivo:
                conteudo = arquivo.read().strip().split("\n")
                for linha in conteudo:
                    print(linha)
        # SE O ARQUIVO BOLETIM NAO FOR ENCONTRADO, ELE MOSTRA A MSG DE ERRO
        except:
            print(f"{cor["vermelho"]}\n📁❌ Arquivo: boletim.txt não encontrado.\n{cor["restaura_cor_original"]}")
    
    # FINALIZA O PYGAME
    pygame.quit()