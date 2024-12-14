package POO;

public class Pessoa {
    // Atributos
    private String nome;
    private short idade;
    private double altura;
    private double peso;

    // Construtor
    public Pessoa(){
        this.nome = "Sem nome";
        this.idade = 0;
        this.altura = 0.0;
        this.peso = 0.0;
        
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
    public void setIdade(short idade){
        this.idade = idade;
    }

    public short getIdade(){
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
