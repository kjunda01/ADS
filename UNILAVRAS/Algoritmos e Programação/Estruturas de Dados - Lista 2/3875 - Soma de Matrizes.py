'''
beecrowd | 3875
Soma de Matrizes

Por João Paulo Fernandes de Cerqueira César,

Brazil
Timelimit: 1

Você precisa escrever um programa em Python que realize a soma de duas matrizes. Sua tarefa é escrever um código que receba as dimensões de duas matrizes e os elementos das matrizes como entrada, realize a soma das matrizes e imprima a matriz resultante.


Uma matriz é representada como uma lista de listas, onde cada lista interna representa uma linha da matriz. As matrizes de entrada têm as mesmas dimensões, ou seja, ambas são do tipo m x n, onde m e n são inteiros positivos.


A soma de duas matrizes ocorre da seguinte forma: Seja A uma matriz m x n e B outra matriz m x n, a matriz resultante C também é uma matriz m x n, onde cada elemento C[i][j] é a soma dos elementos correspondentes de A e B, ou seja, C[i][j] = A[i][j] + B[i][j].


Nota: Não é permitido o uso de bibliotecas externas para o cálculo da soma das matrizes.


Imagem ilustrativa da operação de soma:


Entrada

A entrada contém três linhas. A primeira linha contém dois inteiros separados por espaço, m e n, representando as dimensões das duas matrizes A e B. A segunda linha contém os elementos da matriz A como uma única linha de números separados por espaços. A terceira linha contém os elementos da matriz B da mesma forma.


Saída

A saída deve conter a matriz resultante da soma das duas matrizes,, imprimindo linha a linha como listas.



Dicas


Pense nas Dimensões da Matriz: Antes de iniciar a separação da entrada, certifique-se de que entende as dimensões da matriz, ou seja, o número de linhas (m) e o número de colunas (n). Isso ajudará a definir quantos elementos precisam ser processados.


Use Variáveis Auxiliares: Como no exemplo, use variáveis auxiliares, como inicio e fim, para acompanhar as posições na string de entrada que correspondem a uma linha da matriz. Isso facilita a extração dos elementos corretos.


Entenda a Lógica de "inicio" e "fim": A variável inicio representa o índice do primeiro elemento da linha na string de entrada, enquanto fim representa o índice após o último elemento da linha. Isso permite que você extraia uma linha de elementos de uma única vez.


Itere nas Linhas da Matriz: Use um loop para iterar pelas linhas da matriz (por exemplo, for i in range(m)). Isso garantirá que você processe cada linha da matriz corretamente.


Acompanhe as Linhas Processadas: Use uma variável, como linhasProcessadas, para rastrear quantas linhas da matriz já foram processadas. Isso é útil para calcular os valores de inicio e fim para cada linha.


Teste com Dados de Exemplo: Para verificar se a lógica está funcionando corretamente, use exemplos de entrada e saída que contenham matrizes com dimensões conhecidas. Verifique se os elementos extraídos correspondem ao que você espera.


Comente o Código: Se você estiver criando um programa mais complexo, é útil adicionar comentários explicativos ao código para que outras pessoas (ou você mesmo) possam entender a lógica utilizada.


Não se Esqueça da Conversão: Certifique-se de converter os elementos extraídos da entrada em inteiros, se necessário, antes de adicioná-los à matriz, você pode usar a função map ou então list comprehension.
Samples Input	Samples Output

2 2
1 2 3 4
5 6 7 8
	

[6, 8]
[10, 12]

3 3
1 2 3 4 5 6 7 8 9
9 8 7 6 5 4 3 2 1
	

[10, 10, 10]
[10, 10, 10]
[10, 10, 10]

2 4
1 2 3 4 5 6 7 8
8 7 6 5 4 3 2 1
	

[9, 9, 9, 9]
[9, 9, 9, 9]
'''

# espera receber 3 linhas com as informações
linhas = [list(map(int, input().split())) for _ in range(3)]
linha1, linha2, linha3 = linhas

# numeros para utilizar abaixo
qtdDeListas = linha1[0]
itensPorLista = linha1[1]

def criaLista(linha):
    # lista para fila
    listaTemp = []
    # trata a linha que ta recebendo
    linha = list(map(int, linha))
    
    # faz um loop pela quantidade de listas
    for i in range(qtdDeListas):
        # monta uma lista dentro da lista maior
        listaAtual = linha[:itensPorLista]
        listaTemp.append(listaAtual)
        # remove os itens que foram adicionados para iterar novamente
        for i in range(itensPorLista):
            linha.pop(0)
    # retorna a lista de listas, a matriz
    return(listaTemp)

A = criaLista(linha2)
B = criaLista(linha3)

# itera a quantidade de listas
for i in range(qtdDeListas):
    listaTemp = []
    
    # itera a quantidade de itens na lista
    for j in range(itensPorLista):
        # realiza a soma dos itens específicos
        listaTemp.append((A[i][j] + B[i][j]))
    print(listaTemp)
