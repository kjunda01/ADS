import java.io.IOException;
import java.util.Scanner;

public class POO_Peixe {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        String nome = sc.nextLine();
        String especie = sc.nextLine();
        String cor = sc.nextLine();

        double tamanho = sc.nextDouble();
        sc.nextLine();

        int idade = sc.nextInt();
        sc.nextLine();

        Peixe novoPeixe = new Peixe(nome, especie, cor, tamanho, idade);
        
        System.out.println(novoPeixe);

        novoPeixe.nadando();
        novoPeixe.comer();
        novoPeixe.dormir();
        novoPeixe.tomarBanho();

        sc.close();
    }

    public static class Peixe{
        // Atributos
        private String nome;
        private String especie;
        private String cor;
        private double tamanho;
        private int idade;

        // construtor
        public Peixe(String nome, String especie, String cor, double tamanho, int idade){
            this.cor = cor;
            this.especie = especie;
            this.idade = idade;
            this.nome = nome;
            this.tamanho = tamanho;
        }

        // metodos
        public String nadando(){
            // Este método simula o peixe nadando, exibindo uma mensagem no console.
            String mensagem = nome + " esta nadando.";
            System.out.println(mensagem);
            return mensagem;
        }

        public String comer(){
            // Este método simula o peixe nadando, exibindo uma mensagem no console.
            String mensagem =  nome + " esta se alimentando.";
            System.out.println(mensagem);
            return mensagem;
        }

        public String dormir(){
            // Este método simula o peixe dormindo, exibindo uma mensagem no console.
            String mensagem = nome + " esta dormindo.";
            System.out.println(mensagem);
            return mensagem;
        }

        public String tomarBanho(){
            //  Este método simula o peixe tomando banho, exibindo uma mensagem no console.
            String mensagem = nome + " esta tomando banho.";
            System.out.println(mensagem);
            return mensagem;
        }

        public String toString(){
            return 
            "Nome: " + nome
            + " | Especie: " + especie
            + " | Cor: " + cor
            + " | Tamanho: "+ tamanho + " cm" 
            + " | Idade: " + idade + " meses";
        }
    }
}
