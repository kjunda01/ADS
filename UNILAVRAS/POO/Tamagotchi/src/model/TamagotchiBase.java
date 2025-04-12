package model;

import java.util.Random;

public abstract class TamagotchiBase implements ITamagotchi {
    protected String nome;
    protected int idade;
    protected int energia;
    protected int felicidade;
    protected int fome;
    protected int higiene;
    protected boolean doente;
    protected EstadoVida estado;

    public TamagotchiBase(String nome) {
        this.nome = nome;
        this.idade = 0;
        this.energia = 100;
        this.felicidade = 100;
        this.fome = 0;
        this.higiene = 100;
        this.doente = false;
        this.estado = EstadoVida.BEBE;
    }

    @Override
    public void alimentar() {
        fome = Math.max(fome - 30, 0);
        if(higiene >=10) {
            higiene -= 10;
        }
    }

    @Override
    public void brincar() {
        felicidade = Math.min(felicidade + 20, 100);
            energia -= 15;
            fome += 10;   
    }

    @Override
    public void dormir() {
        energia = Math.min(energia + 50, 100);
        idade++;
        evoluir();
    }

    @Override
    public void limpar() {
        higiene = 100;
    }

    @Override
    public void verificarSaude() {
        doente = fome > 80 || higiene < 20 || energia < 20;
    }

    @Override
    public void eventoAleatorio() {
        Random rand = new Random();
        int chance = rand.nextInt(100);
        if (chance < 10) {
            energia = Math.max(energia - 10, 0);
        }
    }

    protected void evoluir() {
        if (idade >= 30) {
            estado = EstadoVida.ADULTO;
        } else if (idade >= 15) {
            estado = EstadoVida.ADOLESCENTE;
        }
    }

    @Override
    public String getStatus() {
        return String.format(
            "Nome: %s\nIdade: %d (%s)\nEnergia: %d\nFelicidade: %d\nFome: %d\nHigiene: %d\nDoente: %b",
            nome, idade, estado, energia, felicidade, fome, higiene, doente
        );
    }

    public String getNome(){
        return nome;
    }

}