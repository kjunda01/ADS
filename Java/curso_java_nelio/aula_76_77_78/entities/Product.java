package entities;

public class Product {
    /*
     *  TESTANDO 
     * 
     * 
     * 
     * 
     * 
     */
    
    // Atributos
    public String name;
    public double price;
    public int quantity;

    // Construtores -- SOBRECARGA
    public Product() {

    }

    public Product(String name, double price, int quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
        // quantity = 0; -> O java incia com 0, este é opcional
    }

    // Métodos
    public double totalValueInStock() {
        return price * quantity;
    }

    public void addProducts(int quantity) {
        this.quantity += quantity;
    }

    public void removeProducts(int quantity) {
        this.quantity -= quantity;
    }

    public String toString() {
        return name
                + ", $ "
                + String.format("%.2f", price)
                + ", "
                + quantity
                + " units, Total: $ "
                + String.format("%.2f", totalValueInStock());
    }
}