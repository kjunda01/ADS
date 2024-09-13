'''
A escola APRENDER faz o pagamento de seus professores por hora/aula. Faça um algoritmo que receba o nível do professor (1, 2 ou 3) e a quantidade de horas/aula dada por ele. Com base nesses dados, calcule e exiba o salário desse professor. 



Sabe-se que o valor da hora/aula segue a tabela abaixo:

Professor Nível 1 R$12,00 por hora/aula
Professor Nível 2 R$17,00 por hora/aula
Professor Nível 3 R$25,00 por hora/aula 


OBS: valide a entrada para que o usuário não digite um valor de nível inválido, ou seja, menor que 1 ou maior que 3. Nesse caso exiba uma mensagem de erro e não calcule o solicitado.





Entrada
O programa deverá receber um valor inteiro correspondente ao nível do professor e um número float correspondente ao numero de horas de aula dada por ele.



Saída


Caso o usuário informe um nível inválido, ou seja, diferente de 1, 2 ou 3, imprima a mensagem "O nível digitado não é válido!". Caso contrário, após o cálculo do salário, o programa deverá imprimir a mensagem "Seu salário é de R$" seguida pelo salário formatado com duas casas decimais.

Samples Input	Samples Output
3
85.5

Seu salário é de R$2137.50
1
100

Seu salário é de R$1200.00
4
50

O nível digitado não é válido!
'''

while True:
    try:
        nivelDoProfessor = int(input())
        numeroDeHoras = float(input())
        if 1 <= nivelDoProfessor <= 3 and numeroDeHoras > 0:
            if nivelDoProfessor == 1:
                valorHoraAula = 12
            elif nivelDoProfessor == 2:
                valorHoraAula = 17
            else:
                valorHoraAula = 25
            salarioFinal = valorHoraAula * numeroDeHoras
            print(f'Seu salário é de R${salarioFinal:.2f}')
            break
        else:
            print("O nível digitado não é válido!")
            break

    except ValueError:
        print("O nível digitado não é válido!")
