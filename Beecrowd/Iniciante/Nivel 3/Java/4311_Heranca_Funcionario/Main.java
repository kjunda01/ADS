
import java.util.Scanner;

// Classe "pai"
class Funcionario {
    // Atributos
    private String nome;
    private int idade;
    protected double salarioBase;

    // Construtores
    public Funcionario(String nome, int idade, double salarioBase) {
        this.nome = nome;
        this.idade = idade;
        this.salarioBase = salarioBase;
    }

    public Funcionario(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Getters e setter

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public double getSalarioBase() {
        return salarioBase;
    }

    public void setSalarioBase(double salarioBase) {
        this.salarioBase = salarioBase;
    }

}

// Classe "filho"
class FuncionarioIntegral extends Funcionario {
    // Atributos
    private double bonusMensal;

    // Construtor
    public FuncionarioIntegral(String nome, int idade, double salarioBase, double bonusMensal) {
        super(nome, idade, salarioBase);
        this.bonusMensal = bonusMensal;
    }

    // Métodos
    public void salarioTotal() {
        System.out.printf("%.2f%n", salarioBase + this.bonusMensal);
    }

    // getter e setters
    public double getBonusMensal() {
        return bonusMensal;
    }

    public void setBonusMensal(double bonusMensal) {
        this.bonusMensal = bonusMensal;
    }

}

// Classe "filho"
class FuncionarioParcial extends Funcionario {
    // Atributos
    private int horasTrabalhadas;
    private static final double VALOR_HORA = 10.00;

    // Construtor
    public FuncionarioParcial(String nome, int idade, double salarioBase, int horasTrabalhadas) {
        super(nome, idade, salarioBase);
        this.horasTrabalhadas = horasTrabalhadas;
    }

    // Métodos
    public void salarioTotal() {
        System.out.printf("%.2f%n", (salarioBase + (horasTrabalhadas * VALOR_HORA)));
    }

    // Getters e setters
    public int getHorasTrabalhadas() {
        return horasTrabalhadas;
    }

    public void setHorasTrabalhadas(int horasTrabalhadas) {
        this.horasTrabalhadas = horasTrabalhadas;
    }

}

// Classe "filho"
class Estagiario extends Funcionario {
    // Construtor
    public Estagiario(String nome, int idade) {
        super(nome, idade);
    }

}

// Classe "principal"
public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        boolean isOnLoop = true;

        while (isOnLoop) {
            String[] cadastroFuncionario = sc.nextLine().split(" ");

            if (cadastroFuncionario.length >= 3) {
                // Separando a lista
                String tipoFuncionario = cadastroFuncionario[0];
                String nome = cadastroFuncionario[1];
                int idade = Integer.parseInt(cadastroFuncionario[2]);

                if (tipoFuncionario.equalsIgnoreCase("SAIR")) {
                    isOnLoop = false;
                } else {

                    if (tipoFuncionario.equalsIgnoreCase("I")) {
                        double salarioBase = Double.parseDouble(cadastroFuncionario[3]);
                        double bonusMensal = Double.parseDouble(cadastroFuncionario[4]);
                        FuncionarioIntegral funcInt = new FuncionarioIntegral(nome, idade, salarioBase, bonusMensal);
                        funcInt.setSalarioBase(salarioBase);
                        funcInt.setBonusMensal(bonusMensal);
                        funcInt.salarioTotal();
                    }

                    else if (tipoFuncionario.equalsIgnoreCase("P")) {
                        double salarioBase = Double.parseDouble(cadastroFuncionario[3]);
                        int horasTrabalhadas = Integer.parseInt(cadastroFuncionario[4]);
                        FuncionarioParcial funcParc = new FuncionarioParcial(nome, idade, salarioBase,
                                horasTrabalhadas);
                        funcParc.setSalarioBase(salarioBase);
                        funcParc.setHorasTrabalhadas(horasTrabalhadas);
                        funcParc.salarioTotal();
                    }

                    else {
                        Estagiario estagiario = new Estagiario(nome, idade);
                        System.out.println("0.00");
                    }
                }

            } else {
                isOnLoop = false;
            }
        }

    }
}