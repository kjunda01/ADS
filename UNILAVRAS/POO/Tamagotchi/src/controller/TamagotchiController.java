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

    private void atualizar() {
        tamagotchi.verificarSaude();
        tamagotchi.eventoAleatorio();
    }

    public String getStatus(String acao) {
        return "Ação: " + acao + "\n" + tamagotchi.getStatus();
    }

    public String getNome(){
        return tamagotchi.getNome();
    }

}