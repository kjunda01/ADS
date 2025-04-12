package model;

public interface ITamagotchi {
    void alimentar();
    void brincar();
    void dormir();
    void limpar();
    void verificarSaude();
    void eventoAleatorio();
    String getStatus();
}