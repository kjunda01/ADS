import java.util.Scanner;

public class Exercicio2 {
    public static void main(String[] args) {
        /*
         * Fazer um programa para ler os dados de um funcionario (nome, salário bruto e
         * imposto). Em seguida, mostrar os dados do funcionário (nome e salário
         * líquido). Em
         * seguida, aumentar o salário do funcionário com base em uma porcentagem dada
         * (somente o salário
         * bruto é afetado pela porcentagem) e mostrar novamente os dados do
         * funcionário. Use a
         * classe projetada abaixo.
         */
        Exercicio2_Employee employee = new Exercicio2_Employee();
        Scanner sc = new Scanner(System.in);

        System.out.print("Name: ");
        employee.name = sc.nextLine();

        System.out.print("Gross Salary: ");
        employee.grossSalary = sc.nextDouble();

        System.out.print("Tax: ");
        employee.tax = sc.nextDouble();

        System.out.println("\nEmployee: " + employee.message());

        System.out.print("\nWhich percentage to increase salary? ");
        employee.IncreaseSalary(sc.nextDouble());

        System.out.print("\nUpdated data: ");
        System.out.println(employee.message());

        sc.close();
    }
}
