import java.util.Locale;
import java.util.Scanner;

public class Bank {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        Account account;
        String number = "";
        double inicialDepositValue;
        
        while(number == ""){
            System.out.print("Enter account number: ");
            number = sc.nextLine();
        }

        System.out.print("Enter account holder: ");
        String holder = sc.nextLine();

        
        System.out.print("Is there an initial deposit (Y/n)? ");
        String inicialDeposit = sc.nextLine().toUpperCase();
        boolean hasInitialDeposit = inicialDeposit.startsWith("Y") || inicialDeposit.isEmpty();
        
        if(hasInitialDeposit){
            System.out.print("Enter inicial deposit value: ");
            inicialDepositValue = sc.nextDouble();
            // System.out.format("Conta: %s, Holder: %s, Sal: %b\n", number, holder, hasInitialDeposit);
            
            if(holder.isEmpty()){
                account = new Account(number, inicialDepositValue);
            }
            else {
                account = new Account(number, holder, inicialDepositValue);
            }
    
        }

        else if (!holder.isEmpty()){
            account = new Account(number, holder);
        }
        
        else{
            account = new Account(number);
        }


        System.out.println("\nAccount data:");
        System.out.println(account);

        System.out.print("Enter a deposit value: ");
        double depositValue = sc.nextDouble();
        account.deposit(depositValue);
        account.showUpdatedData();

        System.out.print("Enter a withdraw value: ");
        double withdrawValue = sc.nextDouble();
        account.withdraw(withdrawValue);
        account.showUpdatedData();


        sc.close();
    }
}
