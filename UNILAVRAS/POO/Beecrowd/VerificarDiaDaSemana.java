import java.io.IOException;
import java.util.Scanner;

class VerificarDiaDaSemana {
    public static void main(String[] args) throws IOException {
        Scanner input = new Scanner(System.in);

        int diaDaSemana = input.nextInt();

        switch (diaDaSemana) {
            case 1:
                System.out.println("Domingo");
            break;
            
            case 2:
                System.out.println("Segunda-feira");
            break;
            
            case 3:
                System.out.println("Terça-feira");
            break;
            
            case 4:
                System.out.println("Quarta-feira");
            break;
            
            case 5:
                System.out.println("Quinta-feira");
            break;
            
            case 6:
                System.out.println("Sexta-feira");
            break;
            
            case 7:
                System.out.println("Sabado");
                break;
            
            default:
                System.out.println("Dia invalido");
                break;
        }

        input.close();
    }
}