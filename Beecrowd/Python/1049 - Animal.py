# Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.

# Entrada

# A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.
# Saída

# Imprima o nome do animal correspondente à entrada fornecida.
# Exemplos de Entrada 	Exemplos de Saída

# vertebrado
# mamifero
# onivoro
	

# homem

# vertebrado
# ave
# carnivoro
	

# aguia

# invertebrado
# anelideo
# onivoro
	

# minhoca

grupoInformado = input()
tipoInformado = input()
categoriaInformada = input()


animais = {
    "vertebrado": {
        "ave": {
            "carnivoro": "aguia",
            "onivoro": "pomba"
        },
        "mamifero": {
            "onivoro": "homem",
            "herbivoro": "vaca"
        }
    },
    "invertebrado": {
        "inseto": {
            "hematofago": "pulga",
            "herbivoro": "lagarta"
        },
        "anelideo": {
            "hematofago": "sanguessuga",
            "onivoro": "minhoca"
        }
    }
}


for grupo in animais:  # Primeiro nível (vertebrado, invertebrado)
    if grupoInformado in grupo:
        for tipo in animais[grupo]:  # Segundo nível (ave, mamifero, inseto, anelideo)
            if tipoInformado in tipo:
                for categoria, animal in animais[grupo][tipo].items():  # Terceiro nível (carnivoro, onivoro, etc.)
                        if categoriaInformada in categoria:
                            print(animal)

