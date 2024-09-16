'''
beecrowd | 1047
Tempo de Jogo com Minutos

Adaptado por Neilor Tonin, URI Brasil
Timelimit: 1

Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.
Entrada

Quatro números inteiros representando a hora de início e fim do jogo.
Saída

Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .
Exemplo de Entrada 	Exemplo de Saída

7 8 9 10
O JOGO DUROU 2 HORA(S) E 2 MINUTO(S)

7 7 7 7
O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)

7 10 8 9
O JOGO DUROU 0 HORA(S) E 59 MINUTO(S)
'''

tempoInformado = ''
while len(tempoInformado) != 4:
    tempoInformado = list(map(int, input().split()))

horaInicial = tempoInformado[0]
minutoInicial = tempoInformado[1]

horaFinal = tempoInformado[2]
minutoFinal = tempoInformado[3]

# Calcula a duração dos minutos e horas
duracaoMinuto = minutoFinal - minutoInicial
duracaoHora = horaFinal - horaInicial

# Se os minutos finais forem menores que os minutos iniciais, subtrai uma hora e ajusta os minutos
if duracaoMinuto < 0:
    duracaoMinuto += 60
    duracaoHora -= 1

# Se as horas finais forem menores que as iniciais, passou de 24h
if duracaoHora < 0:
    duracaoHora += 24

if duracaoHora == 0 and duracaoMinuto == 0:
    duracaoHora = 24

print(f"O JOGO DUROU {duracaoHora} HORA(S) E {duracaoMinuto} MINUTO(S)")
