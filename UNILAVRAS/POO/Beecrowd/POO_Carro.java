import java.io.IOException;
import java.util.Scanner;

public class POO_Carro {
 
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);

        for(int i = 0; i < 2; i++){
            
            String marca = sc.nextLine();
            String modelo = sc.nextLine();
            int ano = sc.nextInt();
            // consome as linhas até agora
            sc.nextLine();

            String cor = sc.nextLine();
            Carro novoCarro = new Carro(marca, modelo, ano, cor);
            novoCarro.exibirInformacoes();
        }

        sc.close();
    }
    

    public static class Carro{
        // atributos
        private String marca;
        private String modelo;
        private int ano;
        private String cor;
        
        // construtor
        public Carro(String marca, String modelo, int ano, String cor){
            this.marca = marca;
            this.modelo = modelo;
            this.ano = ano;
            this.cor = cor;
        }

        // método
        public void exibirInformacoes(){
            String resposta = 
            "Marca: " + marca + "\n" +
            "Modelo: " + modelo + "\n" +
            "Ano: " + ano + "\n" +
            "Cor: " + cor;

            System.out.println(resposta);
        }


        // toString
        @Override
        public String toString(){
            String json = "{ \n"
            + "    Marca: " + marca + ", \n"
            + "    Modelo: " + modelo + ",\n"
            + "    Ano: " + ano + ",\n"
            + "    Cor: " + cor + "\n},";
            return json;
        }

        
    }
 
}