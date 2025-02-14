import java.io.IOException;
import java.util.Scanner;

class MediaDeNumerosEmUmaLista{
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        double somaDosNumeros = 0.00;
        
        
        String[] numeros = sc.nextLine().split(" ");
               
        for(String numero : numeros){
            somaDosNumeros += Double.parseDouble(numero);
        }

        double media = somaDosNumeros / numeros.length;

        System.out.printf("%.2f\n", media);

        sc.close();
    }
}