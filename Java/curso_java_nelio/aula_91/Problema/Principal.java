package Problema;

import java.util.ArrayList;
import java.util.Locale;
import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        ArrayList<Integer> numeros = new ArrayList<>();


        System.out.print("Quantos números você vai digitar? ");
        int numerosADigitar = sc.nextInt();
        sc.nextLine();

        for(int i = 0; i < numerosADigitar; i++) {
            System.out.print("Digite um número: ");
            int numero = sc.nextInt();
            numeros.add(numero);

        }

        System.out.println("NUMEROS NEGATIVOS:");
        numeros.stream()
       .filter(numero -> numero < 0) 
       .forEach(numero -> System.out.println(numero));
        sc.close();
    }
}
