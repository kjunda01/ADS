package TESTE;



public class Livro {
    
    // Atributos
    public String titulo;
    public String autor;
    public short anoPublicacao;
    public boolean disponivel;
    
    // Construtor
    public Livro(){
        this.titulo = "Sem título";
        this.autor = "Sem autor";
        this.anoPublicacao = 0;
        this.disponivel = true;
    }

    // Retornar objeto
    public String toString() {
        return 
        "Título: " + titulo + "\n" +
        "Autor(a): " + autor + "\n" +
        "Ano de publicação: " + anoPublicacao + "\n" +
        "Disponível: " + disponivel;
    }

    // getters e setters
    public String getTitulo(){
        return titulo;
    }

    public void setTitulo(String titulo){
        this.titulo = titulo;
    }

    public String getAutor(){
        return autor;
    }

    public void setAutor(String autor){
        this.autor = autor;
    }

    public short getAnoPublicacao(){
        return anoPublicacao;
    }

    public void setAnoPublicacao(short anoPublicacao){
        this.anoPublicacao = anoPublicacao;
    }

    public boolean getDisponivel(){
        return disponivel;
    }

    public void setDisponivel(boolean disponivel){
        this.disponivel = disponivel;
    }

}
