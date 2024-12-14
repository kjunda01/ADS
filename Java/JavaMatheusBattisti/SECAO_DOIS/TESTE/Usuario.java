package TESTE;

import java.util.ArrayList;

public class Usuario {

    // Atributos
    public String nome;
    public String email;
    public ArrayList<Livro> livrosEmprestados;


    // Construtor
    public Usuario(){
        this.nome = "Sem nome";
        this.email = "teste@teste.com";
        this.livrosEmprestados = new ArrayList<>();
    }

    // Retornar objeto
    @Override
    public String toString() {
        return "Usuario{" +
                "nome='" + nome + '\'' +
                ", email='" + email + '\'' +
                ", livrosEmprestados=" + livrosEmprestados +
                '}';
    }

    // getters e setter
    public String getNome(){
        return nome;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public ArrayList<Livro> getLivrosEmprestados() {
        return livrosEmprestados;
    }

    public void setLivrosEmprestados(ArrayList<Livro> livrosEmprestados){
        this.livrosEmprestados = livrosEmprestados;
    }


    // Métodos
    public void emprestarLivro(Livro livro){
        this.livrosEmprestados.add(livro);
        if(livro.getDisponivel()){
            livro.setDisponivel(false);
        }
    }

    public void devolverLivro(Livro livro){
        this.livrosEmprestados.remove(livro);
        livro.setDisponivel(true);
    }
}
