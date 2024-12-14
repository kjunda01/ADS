package application;

import java.util.Locale;
import java.util.Scanner;

import entities.Product;

public class Program {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);

		Product product = new Product();

		// Começa o programa
		System.out.println("Enter product data: ");

		// Pedindo as infos do produto:
		System.out.print("Name: ");
		product.name = sc.nextLine();

		System.out.print("Price: ");
		product.price = sc.nextDouble();

		System.out.print("Quantity in stock: ");
		product.quantity = sc.nextInt();

		// Mostrando na tela os dados iniciais
		System.out.print("\nProduct data: ");
		System.out.println(product);

		// Pedindo a quantidade de produtos para acrescentar
		System.out.print("\nEnter the number of products to be added in stock: ");
		product.addProducts(sc.nextInt());
		System.out.println("\n" + product.updatedData());

		// Pedindo a quantidade de produtos para remover
		System.out.print("\nEnter the number of products to be removed from stock: ");
		product.removeProducts(sc.nextInt());
		System.out.println("\n" + product.updatedData());

		sc.close();
	}

}
