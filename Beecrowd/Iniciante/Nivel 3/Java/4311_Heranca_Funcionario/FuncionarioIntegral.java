// Classe "filho"

public class FuncionarioIntegral extends Funcionario {
    // Atributos
    private double bonusMensal;

    // Construtor
    public FuncionarioIntegral(String nome, int idade, double salarioBase, double bonusMensal) {
        super(nome, idade, salarioBase);
        this.bonusMensal = bonusMensal;
    }

    // Métodos
    public void salarioTotal(double salarioBase, double bonusMensal) {
        System.out.printf("%.2f%n" , (salarioBase + bonusMensal));
    }

    // getter e setters
    public double getBonusMensal() {
        return bonusMensal;
    }

    public void setBonusMensal(double bonusMensal) {
        this.bonusMensal = bonusMensal;
    }

}