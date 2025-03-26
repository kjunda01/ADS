import java.util.Scanner;

public class POO_Heranca_funcionario {

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
                        funcInt.salarioTotal(salarioBase, bonusMensal);
                    }

                    else if (tipoFuncionario.equalsIgnoreCase("P")) {
                        double salarioBase = Double.parseDouble(cadastroFuncionario[3]);
                        int horasTrabalhadas = Integer.parseInt(cadastroFuncionario[4]);
                        FuncionarioParcial funcParc = new FuncionarioParcial(nome, idade, salarioBase,
                                horasTrabalhadas);
                        funcParc.salarioTotal(salarioBase, horasTrabalhadas);
                    }

                    else {
                        Estagiario estagiario = new Estagiario(nome, idade);
                        System.out.println(0.00);
                    }
                }

            } else {
                isOnLoop = false;
            }
        }

    }
}