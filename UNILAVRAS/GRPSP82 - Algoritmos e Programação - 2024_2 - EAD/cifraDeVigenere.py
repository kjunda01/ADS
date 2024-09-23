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
# Dicionário de letras para índices
dicionario = {chr(i + 65): i for i in range(26)}  # A = 0, B = 1, ..., Z = 25

# Função para codificar e decodificar a mensagem
def criptografar(mensagem, chave):
    if len(mensagem) != len(chave):
        return "Mensagem / chave com tamanhos divergentes!"

    listaCodificada = []
    listaDecodificada = []
    
    for i in range(len(mensagem)):
        letra_original = dicionario.get(mensagem[i])
        letra_chave = dicionario.get(chave[i])
        
        # Codificação
        if letra_original is not None and letra_chave is not None:
            cifra = (letra_original + letra_chave) % 26
            listaCodificada.append(chr(cifra + 65))  # Converte de volta para letra

            # Decodificação
            texto_decodificado = (cifra - letra_chave) % 26
            listaDecodificada.append(chr(texto_decodificado + 65))  # Converte de volta para letra

    return "".join(listaCodificada), "".join(listaDecodificada)

# Entrada do usuário
textoOriginal = input().upper()
textoChave = input().upper()

# Executar criptografia e descriptografia
mensagem_criptografada, mensagem_descriptografada = criptografar(textoOriginal, textoChave)

# Mostrar resultados
print('Mensagem original:\n', textoOriginal)
print('Mensagem criptografada:\n', mensagem_criptografada)
print('Mensagem descriptografada:\n', mensagem_descriptografada)
