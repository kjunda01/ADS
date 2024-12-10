public class Exercicio1_Rectangle {
    double width;
    double height;

    public double Area(){
        return width * height;
    }

    public double Perimeter() {
        return 2 * (width + height);
    }

    public double Diagonal(){
        return Math.sqrt((Math.pow(height, 2) + Math.pow(width, 2)));
    }
}
