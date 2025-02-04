package aula_89;

import java.util.ArrayList;
import java.util.Scanner;
import java.util.Locale;

public class Problema {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        System.out.println("Quantidade de pessoas:");
        Integer qtdPessoas = sc.nextInt();
        ArrayList<Double> listaDeAlturas = new ArrayList<Double>();

        for (int i = 1; i <= qtdPessoas; i++) {
            System.out.println("Informe a altura da pessoa: [ " + i + " ]");
            Double altura = sc.nextDouble();
            listaDeAlturas.add(altura);
        }

        Double media = listaDeAlturas.stream().reduce(0.0, (subtotal, elemento) -> (subtotal + elemento)) / qtdPessoas;

        System.out.println("Média de altura das " + qtdPessoas + " pessoas: " + String.format("%.2f", media));
        

        sc.close();
    }
}
