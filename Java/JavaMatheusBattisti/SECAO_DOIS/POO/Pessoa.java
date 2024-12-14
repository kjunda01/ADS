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

    public void setNome(String nome){
        this.nome = nome;
    }

    public String getNome(){
        return nome;
    }
}
