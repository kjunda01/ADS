import java.util.HashMap;

public class ExemploHashMap {
    public static void main(String[] args) {
        // Criando um HashMap onde a chave é uma String (nome) e o valor é um Integer (idade)
        HashMap<String, Integer> idades = new HashMap<>();

        // Adicionando elementos ao HashMap
        idades.put("Alice", 25);
        idades.put("Bob", 30);
        idades.put("Carlos", 22);

        if(idades.containsKey("Alice")){
            int valorAtual = idades.get("Alice");
            idades.put("Alice", valorAtual + 999);
        }

        System.out.println(idades.get("Alice"));

        // // Acessando um valor usando a chave
        // System.out.println("Idade de Alice: " + idades.get("Alice")); // Saída: 25

        // // Verificando se uma chave existe
        // if (idades.containsKey("Bob")) {
        //     System.out.println("Idade de Bob: " + idades.get("Bob")); // Saída: 30
        // }

        // // Iterando sobre o HashMap para mostrar todas as chaves e valores
        // System.out.println("\nTodas as idades:");
        // for (String nome : idades.keySet()) {
        //     System.out.println(nome + " tem " + idades.get(nome) + " anos.");
        // }

        // // Removendo um item do HashMap
        // idades.remove("Carlos");
        // System.out.println("\nApós remover Carlos:");
        // for (String nome : idades.keySet()) {
        //     System.out.println(nome + " tem " + idades.get(nome) + " anos.");
        // }
    }
}
