package controller;

import model.Tamagotchi;

public class TamagotchiController {
    private final Tamagotchi tamagotchi;

    public TamagotchiController(String nome) {
        this.tamagotchi = new Tamagotchi(nome);
    }

    public void alimentar() {
        tamagotchi.alimentar();
        atualizar();
    }

    public void brincar() {
        tamagotchi.brincar();
        atualizar();
    }

    public void dormir() {
        tamagotchi.dormir();
        atualizar();
    }

    public void limpar() {
        tamagotchi.limpar();
        atualizar();
    }

    public void socializar() {
        tamagotchi.socializar();
        atualizar();
    }

    private void atualizar() {
        tamagotchi.verificarSaude();
        tamagotchi.eventoAleatorio();
    }

    public String getStatus(String acao) {
        return "Ação: " + acao + "\n" + tamagotchi.getStatus();
    }

    public String getNome() {
        return tamagotchi.getNome();
    }

    public int getEnergia() {
        return tamagotchi.getEnergia();
    }

    public int getFelicidade() {
        return tamagotchi.getFelicidade();
    }

    public int getFome() {
        return tamagotchi.getFome();
    }

    public int getHigiene() {
        return tamagotchi.getHigiene();
    }

    public int getSocializacao() {
        return tamagotchi.getSocializacao();
    }

    public boolean isDoente() {
        return tamagotchi.isDoente();
    }

    public String getImagemEstadoVida() {
        return tamagotchi.getImagemEstadoVida();
    }
}