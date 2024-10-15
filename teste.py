'''
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
qtdDeListas, itensPorLista = list(map(int, input().split(" ")))

matriz = []
for i in range(2):
    print(f'Lista interna -> [{i+1}]')
    listaInterna = list(map(int, input().split(" ")))
    matriz.append(listaInterna)
    print(matriz)
    
A, B = matriz
#[[1,2], [3,4]]
#[[1,2,3,4],[5,6,7,8]]