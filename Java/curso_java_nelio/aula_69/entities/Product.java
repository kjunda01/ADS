package entities;

public class Product {
	//Atributos
	public String name;
	public double price;
	public int quantity;
	
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
	
	public String updatedData() {
		return "Updated data: " + toString();
	}
}
