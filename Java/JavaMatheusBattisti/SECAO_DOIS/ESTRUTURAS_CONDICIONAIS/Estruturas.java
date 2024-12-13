package SECAO_DOIS.ESTRUTURAS_CONDICIONAIS;

public class Estruturas {
    public static void main(String[] args){
        int[] numeros = {1, 2, 3, 4, 5, 6, 7, 8, 9};

        int somaPar = 0;
        int somaImpar = 0;

        for(int numero : numeros){
            System.out.println("Numero: " + numero);
            if(numero % 2 == 0){
                somaPar += numero;
                System.out.println("Soma par: " + somaPar);
            }
            else{
                somaImpar += numero;
                System.out.println("Soma ímpar: " + somaImpar);
            }
        }

    }
}
