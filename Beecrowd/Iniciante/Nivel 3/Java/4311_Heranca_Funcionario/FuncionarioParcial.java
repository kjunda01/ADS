public class FuncionarioParcial extends Funcionario {
    // Atributos
    private int horasTrabalhadas;
    private static final double VALOR_HORA = 10.00;

    // Construtor
    public FuncionarioParcial(String nome, int idade, double salarioBase, int horasTrabalhadas) {
        super(nome, idade, salarioBase);
        this.horasTrabalhadas = horasTrabalhadas;
    }

    // Métodos
    public void salarioTotal(double salarioBase, int horasTrabalhadas) {
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
