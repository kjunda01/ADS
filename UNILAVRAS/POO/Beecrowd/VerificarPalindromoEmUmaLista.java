import java.io.IOException;
import java.util.Scanner;

class VerificarPalindromoEmUmaLista{
    public static void main(String[] args) throws IOException {
        // cria scanner
        Scanner sc = new Scanner(System.in);
        
        // Fica pedindo para o usuario ate o scanner parar de ter o que ler
        while (sc.hasNextLine()){
            // pede para o usuario a palavra e ja da uma limpada
            String palavraNormal = sc.nextLine().toLowerCase().replace(" ","").trim();
    
            // cria a string da palavra invertida
            StringBuilder palavraInvertida = new StringBuilder(palavraNormal).reverse();
    
    
            // mostra o resultado abaixo
            // se a palavra normal for igual a palavra invertida, ele mostra SIM
            
            /*
            usei o equals e não o contentEquals porque os dois são String, entao estou comparando objetos.
            passei o toString para o palavra invertida porque ele é um objeto StringBuilder e ainda não é String.
            se quisesse comparar String com StringBuilder usaria o contentEquals
            O contentEquals compara CharSequence, que é diferente de String -> String, ele pode ser String -> StringBuilder
            */
            
            // if(palavraNormal.contentEquals(palavraInvertida)){
            if(palavraNormal.equals(palavraInvertida.toString())){
                System.out.println("SIM");
            } else {
                System.out.println("NAO");
            }

        }

        // fecha o scanner
        sc.close();
    }
}