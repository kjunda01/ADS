import java.io.IOException;
import java.util.Scanner;

class Criptografia_1024 {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int casosTeste = sc.nextInt();
        sc.nextLine();

        for(int i = 0; i < casosTeste; i++){
            StringBuilder palavra = new StringBuilder();
            String textoBruto = sc.nextLine();

            for(int x = 0; x < textoBruto.length(); x++){
                palavra.append(textoBruto.charAt(x));
            }

            for(int j = 0; j < palavra.length(); j++){
                // Na primeira passada, somente caracteres que sejam letras minúsculas e maiúsculas devem ser deslocadas 3 posições para a direita
                char caractere = palavra.charAt(j);

                if(Character.isLetter(caractere)){
                    char novoCaractere = (char) (caractere + 3);
                    palavra.setCharAt(j, novoCaractere);
                }
            }

            // Na segunda passada, a linha deverá ser invertida.
            palavra.reverse();

            // Na terceira e última passada, todo e qualquer caractere a partir da metade em
            //  diante (truncada) devem ser deslocados uma posição para a esquerda na tabela ASCII.
            //  Neste caso, 'b' vira 'a' e 'a' vira '`'.
            int metade = palavra.length() / 2;
            StringBuilder pedacoFinal = new StringBuilder();
            pedacoFinal.append(palavra.substring(metade, palavra.length()));

            for(int k = 0; k < pedacoFinal.length(); k++) {
                char novoCaractere = (char) (pedacoFinal.charAt(k) - 1);
                pedacoFinal.setCharAt(k, novoCaractere);
            }

            palavra.replace(metade, palavra.length(), pedacoFinal.toString());

            //  mostra a resposta
            System.out.println(palavra);

        }
    }
}
