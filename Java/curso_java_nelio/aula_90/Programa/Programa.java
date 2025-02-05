package Programa;

import java.util.Scanner;
import java.util.ArrayList;
import java.util.Locale;

import Produtos.Produto;

class Programa {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Locale.setDefault(Locale.US);

        System.out.println("Informe um número inteiro:");
        int numero = sc.nextInt();
        sc.nextLine();

        ArrayList<Produto> produtos = new ArrayList<Produto>();

        for (int i = 1; i <= numero; i++) {
            System.out.println("Nome do produto: " + i);
            String nome = sc.nextLine();

            System.out.println("Valor do produto: " + i);
            Double preco = sc.nextDouble();

            sc.nextLine();

            
            Produto produto = new Produto(nome, preco);
            produtos.add(produto);
            System.out.println("Produto" + i +  " criado com sucesso!");
        }


        Double mediaDosPrecos = produtos.stream().mapToDouble(Produto::getPreco).average().orElse(0.0);

        System.out.println("Preço médio dos produtos: R$ " + String.format("%.2f", mediaDosPrecos));

        sc.close();

    }
}