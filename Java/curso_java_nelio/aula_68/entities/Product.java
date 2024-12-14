package entities;

public class Product {
	// Atributos
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
		/*
		 * String mensagem = String.format("Product data:"
		 * + "%s, "
		 * + "$ %s, "
		 * + "%s units, "
		 * + "Total: $ %s",
		 * name, price, quantity, totalValueInStock());
		 */
		return "Product data: "
				+ name
				+ ", $ "
				+ String.format("%.2f", price)
				+ ", "
				+ quantity
				+ " units, Total: $ "
				+ String.format("%.2f", totalValueInStock());
	}
}
