import java.io.IOException;
import java.util.Scanner;

public class MaiorEMenorNumeroEmUmaLista {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        
        // Lendo a linha completa de números
        String[] numerosStr = scanner.nextLine().split(" ");
        
        // Inicializando valores com o primeiro número da entrada
        int maior = -2147483648;
        int menor = 2147483647;
        
        // Iterando sobre os números e encontrando o maior e o menor
        // Este for é o mesmo que for num in numerosStr
        for (String num : numerosStr) {
            int numero = Integer.parseInt(num);
            
            if (numero > maior) {
                maior = numero;
            }
            
            if (numero < menor) {
                menor = numero;
            }
        }
        
        System.out.println(maior);
        System.out.println(menor);
        
        scanner.close();
    }
}