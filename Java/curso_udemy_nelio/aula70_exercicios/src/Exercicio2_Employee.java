public class Exercicio2_Employee {
    String name;
    double grossSalary;
    double tax;


    public double NetSalary(){
        return grossSalary - tax;
    }

    public void IncreaseSalary(double percentage){
        grossSalary += ((percentage / 100) * grossSalary);
    }

    public String message(){
        return name + ", $ " + NetSalary();
    }

}
