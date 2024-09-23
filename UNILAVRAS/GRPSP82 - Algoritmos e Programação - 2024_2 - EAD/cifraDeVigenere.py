'''
A expressão Ci = Pi + Ki mod26  
é uma fórmula utilizada em criptografia, mais especificamente no 
ciframento de Vigenère. Vamos entender cada parte:

Ci: é o caractere cifrado (o resultado da criptografia).

Pi: é o caractere plano (o texto original que você deseja cifrar).

Ki: é o caractere da chave (um caractere que faz 
parte da chave utilizada para cifrar o texto).

mod26: significa que você deve tomar o resultado da 
soma Pi+KiPi+Ki e aplicar a operação módulo 26, que 
mantém o resultado dentro do intervalo de 0 a 25 
(correspondendo às letras do alfabeto, onde A=0, B=1, ..., Z=25).

#p = c - k + % 26

'''
dicionario = {
    "A": 0,
    "B": 1,
    "C": 2,
    "D": 3,
    "E": 4,
    "F": 5,
    "G": 6,
    "H": 7,
    "I": 8,
    "J": 9,
    "K": 10,
    "L": 11,
    "M": 12,
    "N": 13,
    "O": 14,
    "P": 15,
    "Q": 16,
    "R": 17,
    "S": 18,
    "T": 19,
    "U": 20,
    "V": 21,
    "W": 22,
    "X": 23,
    "Y": 24,
    "Z": 25
}

#textoOriginal = 'OLA?'
textoOriginal = input().upper()
#textoChave = 'ABCD'
textoChave = input().upper()

if len(textoOriginal) != len(textoChave):
    print("Mensagem / chave com tamanhos divergentes!")

else:
    listaOriginal = []
    listaChave = []
    listaCodificada = []
    listaDecodificada = []
    mensagemOriginal = []
    mensagemCriptografada = []
    mensagemDescriptografada = []

    def acharNumeroOriginal():
        for i in range(len(textoOriginal)):
            for chave, valor in dicionario.items():
                if chave == textoOriginal[i]:
                    listaOriginal.append(valor)
                    mensagemOriginal.append(chave)


    def acharNumeroChave():               
        for j in range(len(textoChave)):
            for chave, valor in dicionario.items():
                if chave == textoChave[j]:
                    listaChave.append(valor)


    def mensagemCodificada():
        for k in range(len(listaOriginal)):
            cifra = (listaOriginal[k] + listaChave[k]) % 26
            for chave, valor in dicionario.items():
                if valor == cifra:
                    listaCodificada.append(valor)
                    mensagemCriptografada.append(chave)
                    

    def decodificarMensagem():
        for l in range(len(listaOriginal)):
            textoDecodificado = (listaCodificada[l] - listaChave[l])  % 26
            for chave, valor in dicionario.items():
                if valor == textoDecodificado:
                    listaDecodificada.append(valor)
                    mensagemDescriptografada.append(chave)


    def mostrarMensagemOriginal():
        print('Mensagem original:\n')
        for i in mensagemOriginal:
            print(i, end='')


    def mostrarMensagemCriptografada():
        print('Mensagem criptografada:\n')
        for j in mensagemCriptografada:
            print(j, end='')


    def mostrarMensagemDescriptografada():
        print('Mensagem descriptografada:\n')
        for k in mensagemDescriptografada:
            print(k, end='')
        

    acharNumeroOriginal()
    acharNumeroChave()
    mensagemCodificada()
    decodificarMensagem()
    mostrarMensagemOriginal()
    mostrarMensagemCriptografada()
    mostrarMensagemDescriptografada()
    


