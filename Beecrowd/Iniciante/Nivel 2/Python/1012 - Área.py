valores = input()
separar = valores.split(' ')

A = float(separar[0])
B = float(separar[1])
C = float(separar[2])

pi = 3.14159

# a) a área do triângulo retângulo que tem A por base e C por altura. 
TRIANGULO = (A * C) / 2

# b) a área do círculo de raio C. (pi = 3.14159)
CIRCULO = pi * (C ** 2)

# c) a área do trapézio que tem A e B por bases e C por altura.
TRAPEZIO = ((A + B) * C) / 2

# d) a área do quadrado que tem lado B.
QUADRADO = B * B

# e) a área do retângulo que tem lados A e B. 
RETANGULO = A * B

print(f"TRIANGULO: {TRIANGULO:.3f}\nCIRCULO: {CIRCULO:.3f}\nTRAPEZIO: {TRAPEZIO:.3f}\nQUADRADO: {QUADRADO:.3f}\nRETANGULO: {RETANGULO:.3f}")
