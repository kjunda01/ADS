import csv

def candidato_existe(candidato, arquivo_txt):
    try:
        with open(arquivo_txt, 'r', encoding='utf-8') as arquivo:
            for linha in arquivo:
                dados = linha.strip().split(',')
                if (dados[1] == candidato['numero'] and  # Número do candidato
                    dados[3] == candidato['estado'] and  # Estado do candidato
                    dados[4] == candidato['cargo']):    # Cargo do candidato
                    return True
    except FileNotFoundError:
        # Se o arquivo não existir, nenhum candidato foi registrado ainda
        return False
    return False


# Função para processar os dados do arquivo CSV do TSE
def processar_candidatos(arquivo_csv):
    print("⏳ Lendo e processando dados do arquivo CSV...")
    candidatos_por_cargo = []
    total_ignorados = 0

    try:
        with open(arquivo_csv, mode='r', encoding='latin-1') as arquivo:
            leitor = csv.DictReader(arquivo, delimiter=';')
            for linha in leitor:
                cargo = linha['DS_CARGO']

                # Mapeamento do cargo para a inicial
                cargo_inicial = {
                    'DEPUTADO ESTADUAL': 'E',
                    'SENADOR': 'S',
                    'PRESIDENTE': 'P',
                    'PRESIDENTE DA REPÚBLICA': 'P',
                    'GOVERNADOR': 'G',
                    'DEPUTADO FEDERAL': 'F'
                }.get(cargo.upper(), '')  # Maiúsculas para uniformizar

                # Se o cargo for válido, adicione o candidato
                if cargo_inicial:
                    candidato = {
                        'nome': linha['NM_URNA_CANDIDATO'],
                        'numero': linha['NR_CANDIDATO'],
                        'partido': linha['SG_PARTIDO'],
                        'estado': linha['SG_UF'],
                        'cargo': cargo_inicial
                    }
                    candidatos_por_cargo.append(candidato)
                else:
                    total_ignorados += 1
                    print(f"Ignorado: {linha['NM_CANDIDATO']} - Cargo: {cargo}")
        
        print(f"✅ {len(candidatos_por_cargo)} candidatos processados. Ignorados: {total_ignorados}")
    except Exception as e:
        print(f"❌ Erro ao processar o arquivo: {e}")

    return candidatos_por_cargo

# Caminho do arquivo CSV do TSE (ajuste conforme o nome do arquivo baixado)
arquivo_csv = "consulta_cand_2022_BRASIL.csv"

# Processar os dados
candidatos = processar_candidatos(arquivo_csv)

# Gerar o arquivo .txt
with open("candidatos_formatado.txt", "w", encoding="utf-8") as arquivo_txt:
    candidatos_adicionados = 0
    candidatos_existentes = 0
    
    for candidato in candidatos:
        if not candidato_existe(candidato, "candidatos_formatado.txt"):
            linha = f"{candidato['nome']},{candidato['numero']},{candidato['partido']},{candidato['estado']},{candidato['cargo']}\n"
            arquivo_txt.write(linha)
            candidatos_adicionados += 1
        else:
            candidatos_existentes += 1
    
    print(f"📄 Arquivo 'candidatos_formatado.txt' gerado.")
    print(f"✅ {candidatos_adicionados} candidatos adicionados.")
    print(f"🔄 {candidatos_existentes} candidatos já existentes.")
