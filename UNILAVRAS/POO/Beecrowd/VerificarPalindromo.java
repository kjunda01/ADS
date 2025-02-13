package ADS.UNILAVRAS.POO.Beecrowd;

// Preciso fazer uma verificacao da palavra;
// Se ela ao contrario for igual ta certo, entao um for ao contrario ja funciona
// Depois so comprarar se as palavras sao iguaisimport java.io.IOException;
// O nome da classe principal tem que ser Main
// o nao nao tem "~"

import java.io.IOException;
import java.util.Scanner;

public class VerificarPalindromo {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);

        String palavra = sc.nextLine().replaceAll("\\s", "").toLowerCase();
        String contrario = "";
            
        for(int i = palavra.length() - 1; i >= 0; i--){
            contrario += palavra.charAt(i);
        }

        if (palavra.equals(contrario)){
            System.out.println("SIM");
        } else{
            System.out.println("NAO");
        }

        sc.close();
    }
}