import controller.TamagotchiController;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite o nome do seu Tamagotchi: ");
        String nome = scanner.nextLine();

        TamagotchiController controller = new TamagotchiController(nome);
        boolean rodando = true;

        System.out.println(controller.getStatus("Inicializado"));

        while (rodando) {
            System.out.println("\nEscolha uma ação:");
            System.out.println("1 - Alimentar");
            System.out.println("2 - Brincar");
            System.out.println("3 - Dormir");
            System.out.println("4 - Limpar");
            System.out.println("0 - Sair");
            System.out.print("> ");
            String escolha = scanner.nextLine();

            switch (escolha) {
                case "1":
                    controller.alimentar();
                    System.out.println(controller.getStatus("Alimentou"));
                    break;
                case "2":
                    controller.brincar();
                    System.out.println(controller.getStatus("Brincou"));
                    break;
                case "3":
                    controller.dormir();
                    System.out.println(controller.getStatus("Dormiu"));
                    break;
                case "4":
                    controller.limpar();
                    System.out.println(controller.getStatus("Limpou"));
                    break;
                case "0":
                    rodando = false;
                    System.out.println("Encerrando o jogo...");
                    break;
                default:
                    System.out.println("Opção inválida!");
            }
        }
        scanner.close();
    }
}