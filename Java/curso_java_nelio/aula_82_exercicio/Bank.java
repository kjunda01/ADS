import java.util.Scanner;

public class Bank {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter account Number: ");
        String accountNumber = sc.nextLine();
        
        
        System.out.print("Enter account holder: ");
        String accountHolder = sc.nextLine();

        System.out.print("Is there an initial deposit (Y/n)? ");
        String inicialDeposit = sc.nextLine().toUpperCase();
        char response = inicialDeposit.charAt(0);
        
        if(response == 'Y'){
            System.out.print("Enter inicial depois value: ");
            float inicialDepositValue = sc.nextFloat();

        } else {
            System.out.println("Saindo...");
        }

        
        
    }
}
