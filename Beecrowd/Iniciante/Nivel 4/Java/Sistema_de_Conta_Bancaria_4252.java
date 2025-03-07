public class Sistema_de_Conta_Bancaria_4252 {

    public static void main(String[] args) {
        
    }




    class ContaBancaria{
        // 
        // Atributos privados
        // 
        private double saldo;
        private int numeroConta;
        private String titular;

        // 
        // Construtor
        // 
        public ContaBancaria(double saldo, int numeroConta, String titular){
            this.saldo = saldo;
            this.numeroConta = numeroConta;
            this.titular = titular;
        }

        // 
        // Métodos
        // 
        public String depositar(double saldo){
            if(saldo >= 0){
                this.saldo += saldo;
                return "Depósito realizado!";
            } else{
                return "Depósito inválido";
            }
        }

        public String sacar(double saldo){
            if(this.saldo - saldo >= 0 || saldo > 0){
                this.saldo -= saldo;
                return "Saque realizado!";
            } else{
                return "Saque inválido!";
            }
        }

        public double conferirSaldo() {
            return saldo;
        }

        public int numeroDaConta() {
            return numeroConta;
        }


        public String nomeDoTitular() {
            return titular;
        }


    }

    



}
