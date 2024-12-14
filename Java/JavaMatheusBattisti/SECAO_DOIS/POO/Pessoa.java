package POO;

public class Pessoa {
    // Atributos
    private String nome;
    private int idade;
    private double altura;
    private double peso;

    // Construtor
    public Pessoa(String nome, int idade, double altura, double peso){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        
    }
    
    // Métodos
    // setter e getter

    /* ************************************************************ */
    // NOME
    public void setNome(String nome){
        this.nome = nome;
    }

    public String getNome(){
        return nome;
    }

    /* ************************************************************ */
    // IDADE
    public void setIdade(int idade){
        this.idade = idade;
    }

    public int getIdade(){
        return idade;
    }

    /* ************************************************************ */
    // ALTURA
    public void setAltura(double altura){
        this.altura = altura;
    }

    public double getAltura(){
        return altura;
    }

    /* ************************************************************ */
    // PESO
    public void setPeso(double peso){
        this.peso = peso;
    }

    public double getPeso(){
        return peso;
    }
}
