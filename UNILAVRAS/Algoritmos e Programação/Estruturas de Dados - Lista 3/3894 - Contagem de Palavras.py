'''
beecrowd | 3894
Contagem de Palavras

Por João Paulo Fernandes de Cerqueira César,

Brazil
Timelimit: 5

Você recebe um texto como entrada e deve contar o número de vezes que cada palavra aparece no texto. Para isso, você deve criar um dicionário onde as chaves são as palavras no texto e os valores são o número de vezes que cada palavra aparece. O texto é composto por palavras separadas por espaços e não faz distinção entre maiúsculas e minúsculas. No final, você deve imprimir o dicionário em ordem alfabética das palavras.


Entrada

A entrada consiste em várias linhas, sendo que cada linha contém uma sequência de palavras separadas por espaços. A entrada termina quando uma linha contendo somente a palavra FIM é inserida.


Saída

A saída consiste em linhas, cada uma contendo uma palavra e o número de vezes que ela aparece no texto. As palavras devem ser listadas em ordem alfabética.


Dica

Você pode usar a função sorted para ordenar as chaves do dicionário. Para isso, passe o dicionário para sorted e use um lambda para especificar que você deseja ordenar pelas chaves. Aqui está como você pode fazer isso:


sorted_word_count = dict(sorted(word_count.items(), key=lambda item: item[0]))


Essa linha de código irá ordenar o dicionário word_count alfabeticamente pelas chaves e armazenar o resultado em sorted_word_count. Isso garantirá que as palavras sejam impressas em ordem alfabética.
Samples Input	Samples Output

Tilápias voadoras no céu dançam
suas asas de escamas no vento a brilhar
sobem pelas águas com destreza no ar
um espetáculo incrível a todos encantar
FIM
	

a 2
ar 1
asas 1
brilhar 1
com 1
céu 1
dançam 1
de 1
destreza 1
encantar 1
escamas 1
espetáculo 1
incrível 1
no 3
pelas 1
sobem 1
suas 1
tilápias 1
todos 1
um 1
vento 1
voadoras 1
águas 1

o gato roeu a roupa do rei de roma
GATO REI ROMA
GATO GATO GATO
FIM
	

a 1
de 1
do 1
gato 5
o 1
rei 2
roeu 1
roma 2
roupa 1

este é um exemplo de teste
teste teste teste
é um exemplo
FIM
	

de 1
este 1
exemplo 2
teste 4
um 2
é 2
'''
# cria entrada  e dicionarios vazios
entrada = ""
dicionario = {}

while entrada != "FIM":
    # fica pedindo a frase até que o usuario informe FIM
    entrada = input()
    if entrada != "FIM":
        # separa todas as palavras por espaço e letra minuscula
        separacao = entrada.lower().split()
        

        for palavra in separacao:
            if palavra in dicionario:
                dicionario[palavra] += 1
            else:
                dicionario[palavra] = 1
        
    # confere se tem a palavra, aí adiciona mais 1 se tiver

        # ordena o dicionario em ordem alfabetica
    dicionarioEmOrdemAlfabetica = dict(sorted(dicionario.items(), key=lambda item: item[0]))

# imprime na tela o dicionario
# for elementos in dicionarioEmOrdemAlfabetica.items():
#     print(f"{elementos[0]} {elementos[1]}")
for elementos in dicionarioEmOrdemAlfabetica.items():
    print(elementos[0], elementos[1])
