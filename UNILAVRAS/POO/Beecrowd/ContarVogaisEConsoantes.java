import java.io.IOException;
import java.util.Scanner;

public class ContarVogaisEConsoantes {
    public static void main(String[] args) throws IOException {
        
        // cria o scanner
        Scanner sc = new Scanner(System.in);

        // pede os dados para o usuário, deixa minusculo, remove espaços das beiradas, substitui espaços por "".
        String input = sc.nextLine().toLowerCase().trim().replace(" ", "");

        // cria as variáveis para a resposta
        int qtdVogais = 0;
        int qtdConsoantes = 0;

        // cria o conjunto das letras
        char[] todosOsCaracteres = input.toCharArray();

        // passa individualmente pelas letras do input
        for(Character letra : todosOsCaracteres){
            if(Character.isLetter(letra)){
                // verifica se a letra atual esta dentro de "aeiou", passando seu indice.
                // se o indice nao existir, retorna -1;
                if ("aeiou".indexOf(letra) != -1) {
                    qtdVogais++;
                } else {
                    qtdConsoantes++;
                }
            }
        }

        // mostra as respostas
        System.out.println(qtdVogais);
        System.out.println(qtdConsoantes);

        // fecha o scanner
        sc.close();
    }
}
