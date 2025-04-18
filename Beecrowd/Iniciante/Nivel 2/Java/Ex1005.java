//beecrowd | 1005
//        Média 1
//        Adaptado por Neilor Tonin, URI  Brasil
//
//        Timelimit: 1
//        Leia 2 valores de ponto flutuante de dupla precisão A e B, que correspondem a 2 notas de um aluno.
//        A seguir, calcule a média do aluno, sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5
//        (A soma dos pesos portanto é 11). Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.
//
//        Entrada
//        O arquivo de entrada contém 2 valores com uma casa decimal cada um.
//
//        Saída
//        Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 5 dígitos após o ponto decimal
//        e com um espaço em branco antes e depois da igualdade. Utilize variáveis de dupla precisão (double) e
//        como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você
//        receberá "Presentation Error".
//
//        Exemplos de Entrada	Exemplos de Saída
//        5.0
//        7.1
//
//        MEDIA = 6.43182
//
//        0.0
//        7.1
//
//        MEDIA = 4.84091
//
//        10.0
//        10.0
//
//        MEDIA = 10.00000

import java.io.IOException;
import java.util.Scanner;


public class Ex1005 {

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);

        double A = sc.nextFloat();
        double B = sc.nextFloat();

        double pesoA = 3.5;
        double pesoB = 7.5;

        double totalNotaA = A * pesoA;
        double totalNotaB = B * pesoB;

        double somaDasNotasAeB = totalNotaA + totalNotaB;

        double somaDosPesos = pesoA + pesoB;

        double media = (somaDasNotasAeB / somaDosPesos);


        System.out.println("MEDIA = " + String.format("%.5f", media));

    }

}