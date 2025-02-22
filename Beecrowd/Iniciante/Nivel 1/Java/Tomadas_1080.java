import java.io.IOException;
import java.util.Scanner;

public class Tomadas_1080 {

	public static void main(String[] args) throws IOException {
		Scanner sc = new Scanner(System.in);
		
		String[] linha = sc.nextLine().split(" ");

		// Cria um array para armazenar os números
        int[] numeros = new int[linha.length];
		
        // Converte cada parte em um número e armazena no array
        for (int i = 0; i < linha.length; i++) {
            numeros[i] = Integer.parseInt(linha[i]);
        }

		int soma = 0;
		for(int i = 0; i < numeros.length; i++){
			if((i + 1) == numeros.length){
				soma += numeros[i];
			} else{
				soma += (numeros[i] - 1);
			}
			
		
			
		}
		System.out.println(soma);


        sc.close();

	



	}

}
