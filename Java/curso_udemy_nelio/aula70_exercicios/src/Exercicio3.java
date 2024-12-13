import java.util.Scanner;

public class Exercicio3 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        Exercicio3_Student student = new Exercicio3_Student();

        System.out.println("Entrada: ");
        student.name = sc.nextLine();
        student.grade1 = sc.nextFloat();
        student.grade2 = sc.nextFloat();
        student.grade3 = sc.nextFloat();


        System.out.println("FINAL GRADE = " + student.sumGrades());
        System.out.println(student.checkAproved());
    }
}
