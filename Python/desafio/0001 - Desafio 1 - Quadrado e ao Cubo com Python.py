numeroInformado = int(input('Informe um número inteiro: '))

# Cabeçalho da tabela
print('|', "Número".center(8, " "), '|', "Quadrado".center(10, " "), '|', "Cubo".center(10, " "), '|')
print('|----------|'.ljust(8, ' ') + '------------'.ljust(8, ' ') + '|------------|'.ljust(10, ' '))

# Dados da tabela
for numero in range(1, numeroInformado + 1):
    numeroNormal = f'{numero:_.0f}'
    quadrado = f'{numero ** 2:_.0f}'
    cubo = f'{numero ** 3:_.0f}'
    print(f'| {str(numero).ljust(9, ' ').replace('_','.')}| {str(quadrado).ljust(11, ' ').replace('_','.')}| {str(cubo).ljust(11, ' ').replace('_','.')}|')
    