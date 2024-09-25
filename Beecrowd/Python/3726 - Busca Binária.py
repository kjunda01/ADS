'''beecrowd | 3762
Busca Binária

Por João Paulo Fernandes de Cerqueira César,

Brazil
Timelimit: 5

Crie um programa em Python que realize uma busca binária em um intervalo de números inteiros. A busca binária é um algoritmo de busca eficiente usado para encontrar um valor específico em uma lista ordenada (ou intervalo de números).


Aqui está como a busca binária funciona:


    Comece com um intervalo que cobre toda a lista ou sequência de números.
    Divida o intervalo ao meio.
    Compare o valor do meio com o valor que você está procurando.
    Se o valor do meio for igual ao valor que você está procurando, você encontrou o valor desejado e a busca termina.
    Se o valor do meio for maior do que o valor que você está procurando, descarte a metade superior do intervalo e repita o processo na metade inferior.
    Se o valor do meio for menor do que o valor que você está procurando, descarte a metade inferior do intervalo e repita o processo na metade superior.
    Continue dividindo o intervalo e repetindo o processo até encontrar o valor desejado ou até determinar que o valor não está presente no intervalo.


Dica Importante: Verifique se o número alvo está fora do intervalo antes de iniciar a busca binária. Se o alvo estiver fora do intervalo, retorne "Número não encontrado" imediatamente para economizar tempo de busca desnecessário.


O programa deve solicitar ao usuário que insira dois números inteiros inicio e fim (onde inicio é menor que fim) que definem um intervalo de números. Em seguida, o programa deve pedir ao usuário que insira um número inteiro alvo a ser procurado dentro deste intervalo.


Crie uma função chamada busca_binaria que aceita os parâmetros inicio, fim e alvo e retorne True se o número alvo estiver presente no intervalo [inicio, fim] e False caso contrário.


Após a entrada dos valores, utilize a função busca_binaria para verificar se o número alvo está presente no intervalo e exiba "Número encontrado" se estiver no intervalo ou "Número não encontrado" caso contrário.


Não é necessário usar lista, pois aqui vamos usar um intervalo de valores


Assista a este vídeo: Como implementar BUSCA BINÁRIA? *Você deveria aprender isso!* | Algoritmos #10


Entrada


O programa deve ler três linhas de entrada:


A primeira linha contém um número inteiro inicio, representando o início do intervalo.

A segunda linha contém um número inteiro fim, representando o final do intervalo.

A terceira linha contém um número inteiro alvo a ser procurado no intervalo.


Saída


O programa deve exibir cada passo da busca binária, mostrando o intervalo atual e o valor médio (meio) em cada iteração. Além disso, deve exibir "Número encontrado" se o número alvo estiver presente no intervalo [inicio, fim]. Caso contrário, deve exibir "Número não encontrado".
Samples Input	Samples Output

10
30
6
	

Número 6 não encontrado

1
100
42
	

Passo 1: Intervalo [1, 100], Meio=50
Passo 2: Intervalo [1, 49], Meio=25
Passo 3: Intervalo [26, 49], Meio=37
Passo 4: Intervalo [38, 49], Meio=43
Passo 5: Intervalo [38, 42], Meio=40
Passo 6: Intervalo [41, 42], Meio=41
Passo 7: Intervalo [42, 42], Meio=42
Número 42 encontrado

1
50
25
	

Passo 1: Intervalo [1, 50], Meio=25
Número 25 encontrado'''

intervaloInicio = int(input())
intervaloFinal = int(input())
numeroProcurado = int(input())

def getValorDoMeio(comeco, fim):
    valorMeio = (comeco // 2) + (fim // 2)
    return valorMeio

def getIntervaloAoMeio(meio):
    valorIntervaloAoMeio = meio / 2
    return valorIntervaloAoMeio


def busca_binaria(inicio, final, alvo):




busca_binaria(intervaloInicio, intervaloFinal, numeroProcurado)

'''
A lógica da busca binária envolve dividir a lista ao meio e determinar se a letra desejada está
na metade inferior ou superior da lista, repetindo o processo até encontrar a letra
ou determinar que ela não está presente.

'''