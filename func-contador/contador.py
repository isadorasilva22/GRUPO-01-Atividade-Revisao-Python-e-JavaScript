import string

def contador(texto):
    texto = texto.translate(str.maketrans("", "", string.punctuation))
    texto = texto.lower()
    palavras = texto.split()
    contagem = {}
    for palavra in palavras:
        if palavra in contagem:
            contagem[palavra] += 1
        else:
            contagem[palavra] = 1
    
    return contagem

resultado = contador("O Palmeiras é o maior time do mundo e vai ganhar do Corinthians hoje")
print(resultado)
