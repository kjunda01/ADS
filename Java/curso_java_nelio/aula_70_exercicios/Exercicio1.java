import java.util.Scanner;

public class Exercicio1 {
    public static void main(String[] args) {
        Exercicio1_Rectangle exec1 = new Exercicio1_Rectangle();
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter rectangle width and height:");
        exec1.width = sc.nextDouble();
        exec1.height = sc.nextDouble();

        System.out.println("AREA = " + exec1.Area());
        System.out.println("PERIMETER = " + exec1.Perimeter());
        System.out.println("DIAGONAL = " + exec1.Diagonal());

        sc.close();
    }
}
