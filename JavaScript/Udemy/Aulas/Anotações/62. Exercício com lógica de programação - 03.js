// Escreva uma função que recebe um número e
// retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100

function fizzBuzz(valor) {

    // checa se o número é númerov
    if (typeof valor === "number") {

        // checa se o número está dentre o intervalo
        if (valor < 0 || valor > 100) return "Número fora do intervalo";
        
        else {
            // checa se o número é divisível por 3 e 5
            if (valor % 5 === 0 && valor % 3 === 0) return "FizzBuzz";
            
            // checa se o número é divisível por 5
            else if (valor % 5 === 0) return "Buzz";
            
            // checa se o número é divisível por 3
            else if (valor % 3 === 0) return "Fizz";
            
            // Se não for divisível por 5 nem por 3, retorna ele mesmo.
            else return valor;
        }
    } else return "Não é número";
}

// i = 1;
// while (i < 100) {
//     console.log(fizzBuzz(i));
//     i++;
// }

console.log(fizzBuzz(3));
