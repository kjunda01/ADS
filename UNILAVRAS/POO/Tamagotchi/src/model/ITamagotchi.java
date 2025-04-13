package model;

public interface ITamagotchi {
    void alimentar();

    void brincar();

    void dormir();

    void limpar();

    void socializar();

    void verificarSaude();

    String eventoAleatorio();

    String getStatus();
}