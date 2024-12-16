public class Account {

    // Métodos
    private String number;
    private String holder;
    private double balance;

    // Construtores e sobrecarga
    public Account(String number) {
        this.number = number;
        setHolder("Não informado");
        deposit(0);
    }

    public Account(String number, String holder) {
        this.number = number;
        setHolder(holder);
        deposit(0);
    }

    public Account(String number, double initialDeposit) {
        this.number = number;
        setHolder("Não informado");
        deposit(initialDeposit);
    }

    public Account(String number, String holder, double initialDeposit) {
        this.number = number;
        setHolder(holder);
        deposit(initialDeposit);
    }

    // Getter e Setters
    public String getNumber() {
        return number;
    }

    public String getHolder() {
        return holder;
    }

    public void setHolder(String holder) {
        this.holder = holder;
    }

    public double getBalance() {
        return balance;
    }

    // toString
    @Override
    public String toString() {
        return String.format("Account %s, Holder: %s, Balance: $ %.2f\n", number, holder, balance);
    }

    // Métodos
    public void deposit(double amount) {
        balance += amount;
    }

    public void withdraw(double amount) {
        double withdrawTax = 5;
        balance -= amount + withdrawTax;
    }

    public void showUpdatedData() {
        System.out.println("\nUpdated account data:");
        System.out.println(toString());
    }
}