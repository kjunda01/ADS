# usando função do proprio python

# def cifraDeCesar(msgBruta):
#     msgParaCodificar = ''
#     for caracter in range(len(msgBruta)):
#         #print(ord(mensagem[caracter]))
#         msgParaCodificar += msgParaCodificar.join(chr(ord(msgBruta[caracter]) + 3))
    
#     msgCodificada = str(msgParaCodificar.replace("#"," "))

#     return msgCodificada

#print(cifraDeCesar(mensagem))

# usando dicionario
msg = "Testando 123"
algarismoParaPular = 3
listaCesar = []

dicionarioAscii = {
    '0': 48,   '1': 49,   '2': 50,   '3': 51,   '4': 52,
    '5': 53,   '6': 54,   '7': 55,   '8': 56,   '9': 57,
    'A': 65,   'Á': 193,  'À': 192,  'Ã': 195,  'Â': 194, 
    'C': 67,   'Ç': 199,  'D': 68,   'E': 69,   'É': 201,
    'Ê': 202,  'È': 200,  'F': 70,   'G': 71,   'H': 72,
    'I': 73,   'Í': 205,  'Ì': 204,  'J': 74,   'K': 75,
    'L': 76,   'M': 77,   'N': 78,   'Ñ': 209,  'O': 79,
    'Ó': 211,  'Ô': 212,  'Õ': 213,  'Ò': 210,  'P': 80,
    'Q': 81,   'R': 82,   'S': 83,   'T': 84,   'U': 85,
    'Ú': 218,  'Ù': 217,  'V': 86,   'W': 87,   'X': 88,
    'Y': 89,   'Z': 90,   'a': 97,   'á': 225,  'à': 224,
    'ã': 227,  'â': 226,  'b': 98,   'c': 99,   'ç': 231,
    'd': 100,  'e': 101,  'é': 233,  'ê': 234,  'è': 232,
    'f': 102,  'g': 103,  'h': 104,  'i': 105,  'í': 237,
    'ì': 236,  'j': 106,  'k': 107,  'l': 108,  'm': 109,
    'n': 110,  'ñ': 241,  'o': 111,  'ó': 243,  'ô': 244,
    'õ': 245,  'ò': 242,  'p': 112,  'q': 113,  'r': 114,
    's': 115,  't': 116,  'u': 117,  'ú': 250,  'ù': 249,
    'v': 118,  'w': 119,  'x': 120,  'y': 121,  'z': 122,
    ' ': 32,   '!': 33,   '"': 34,   '#': 35,   '$': 36,
    '%': 37,   '&': 38,   "'": 39,   '(': 40,   ')': 41,
    '*': 42,   '+': 43,   ',': 44,   '-': 45,   '.': 46,
    '/': 47,   ':': 58,   ';': 59,   '<': 60,   '=': 61,
    '>': 62,   '?': 63,   '@': 64,   '[': 91,   '\\': 92,
    ']': 93,   '^': 94,   '_': 95,   '`': 96,   '{': 123,
    '|': 124,  '}': 125,  '~': 126,  'B': 66,
}

# Função que retorna o número de cada letra da mensagem
def acharNumeroAscii(msg):
    # Para cada letra na mensagem recebida
    for letra in msg:
        # se a letra corresponder a uma chave:valor do dicionario
        if letra in dicionarioAscii:
            # ele retorna o valor daquela letra segundo o dicionario
            return dicionarioAscii[letra]

def cifraDeCesar(mensagem = "Cifra De César"):
    
    for i in range(len(mensagem)):
        #definindo as variáveis para diferenciar a mensagem original da codificada
        numeroASCII = acharNumeroAscii(mensagem[i])
        numeroCesar = numeroASCII + algarismoParaPular

        # faz a busca com chave e valor no dicionario
        for chave, valor in dicionarioAscii.items():
            # se o valor for o numero cesar (numero ascii + 3) ele mostra a mensagem na tela
            if valor == numeroCesar:
                msgCodificada = chave.replace("#", " ")
                listaCesar.append(msgCodificada)

# chama a função para mostrar com console.log
cifraDeCesar(msg)

print(listaCesar)
