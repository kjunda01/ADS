package TESTE;
import java.util.Locale;
import java.util.Scanner;

public class Bibliotecario {
    public static void main(String[] args){
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        Livro livro = new Livro();
        Usuario usuario = new Usuario();

        System.out.println(usuario);
    }
}
