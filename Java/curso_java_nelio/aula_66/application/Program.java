import java.util.Locale;
import java.util.Scanner;

import entities.Triangulo;

public class Program {
	public static void Main(String[] args){
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		 
		Triangulo x, y;
		x = new Triangulo();
		y = new Triangulo();
		
		System.out.println("Entre com as medidas do triângulo X: ");
		x.a = sc.nextFloat();
		x.b = sc.nextFloat();
		x.c = sc.nextFloat();
		
		System.out.println("Entre com as medidas do triângulo Y: ");
		y.a = sc.nextFloat();
		y.b = sc.nextFloat();
		y.c = sc.nextFloat();
		
		
		
		System.out.printf("Área do triângulo X: %.4f\n", x.area());
		System.out.printf("Área do triângulo Y: %.4f\n", y.area());
		
		if(x.area() > y.area()) {
			System.out.println("Área maior: X");
			
		} else {
			System.out.println("Área maior: Y");
		}
		
		sc.close();
	}
}